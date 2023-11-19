<template>
  <v-dialog v-model="state.show" persistent>
    <v-card>
      <v-card-title>
        <slot name="title">Подтвердите действие</slot>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <slot name="text">
          <p>{{ text }}</p>
        </slot>
      </v-card-text>
      <v-card-actions>
        <v-btn :disabled="state.loading" :loading="state.loading" color="error" @click="confirmed">Да</v-btn>
        <v-btn :disabled="state.loading" @click="close">Отмена</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>

import {computed, reactive} from "vue";

const props = defineProps()

const emits = defineEmits(['removed'])

const state = reactive({
  show: false,
  loading: false,
})

const show = () => {
  state.show = true
}

const close = () => {
  state.show = false
}

const text = computed(() => {
  switch (props.itemName) {
    case "users":
      return 'Действительно хотите удалить пользователя: ' + props.assignedItem.name + '?'
    case "applications":
      return `Действительно хотите удалить заявк${ props.assignedItem.length > 1 ? 'и' : 'у'}?`
    case "applications_group":
      return 'Действительно хотите удалить группу заявок?'
    case "trash":
      return 'Действительно хотите удалить заявку?'
    case "group":
      return 'Действительно хотите удалить группу: ' + props.assignedItem.id + '?'
    default:
      return 'Действительно хотите сделать это?'
  }
})

const confirmed = () => {
  try {
    state.loading = true

    switch (props.itemName) {
      case "users":
        api.users.delete(props.assignedItem.id)
        break;
      case "applications":
        api.applications.deleteAll({
          'applications_id': props.assignedItem.map((i) => { return i.id })
        })
        break;
      case "trash":
        api.trash.delete(props.assignedItem.id)
        break;
      case "group":
        api.group.delete(props.assignedItem.id)
        break;
    }

    state.show = false

    emits('removed')

  } catch (e) {
    console.error(e)
  } finally {
    state.loading = false
  }
}

defineExpose({
  show
})

</script>

<style scoped>

</style>