<template>
  <div class="list-meta">
    <div class="list-meta__select">
      <v-pagination
          density="comfortable"
          color="primary"
          v-model="props.meta.current"
          :length="props.meta.last_page"
          @update:modelValue="changed"
          :disabled="props.disabled"
      ></v-pagination>

    </div>
    <div class="list-meta__pagination" >
      <v-select density="compact"
                label="Кол-во на странице"
                v-model="props.meta.per_page"
                :items="state.select.list"
                item-value="value"
                item-title="text"
                hide-details
                @update:modelValue="changePerPage"
                :disabled="props.disabled"
      >
      </v-select>
      <p class="mt-2 list-meta__text" v-if="props.listCount && props.meta.total">Показано {{ props.listCount }} из {{ props.meta.total }}</p>
    </div>
  </div>
</template>

<script setup>
import {computed, defineEmits, reactive} from "vue";

const props = defineProps()

const computedProrsTotal = computed(() => {
  return props.meta.total
})

const emits = defineEmits(['updated'])

const state = reactive({
  select: {
    list: [{value: 10, text: '10'}, {value: 25, text: '25'}, {value: 50, text: '50'}, {value: computedProrsTotal, text: 'Все'}]
  }
})

const changePerPage = () => {
  props.meta.current = 1
  changed()
}

const changed = () => {
  emits('updated')
}
</script>

<style lang="scss">
.list-meta {
  display: grid;
  grid-template-columns: 1fr 300px;

  &__text {
    font-size: 12px;
  }
}
</style>