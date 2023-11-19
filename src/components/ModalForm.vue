<script setup>
import {reactive} from "vue";

const props = defineProps({
  isActive: Boolean,
})

const state = reactive({
  form: {
    url: '',
    login: '',
    password: ''
  }
})
const submit = () => {

}
</script>

<template>
  <v-dialog width="500" v-model="props.isActive">
    <v-card title="Интеграция">
      <v-card-text>
        <v-form
            ref="form"
            @submit.prevent="submit"
        >
          <v-text-field
              name="url"
              v-model="state.form.url"
              label="Url"
              type="text"
              density="comfortable"
          />
          <v-text-field
              name="login"
              v-model="state.form.login"
              label="Логин"
              type="text"
              density="comfortable"
          />
          <v-text-field
              class="my-3"
              name="password"
              v-model="state.form.password"
              label="Пароль"
              type="password"
              density="comfortable"
          />
          <v-btn type="submit" color="primary" @click="props.isActive = false">Соединить</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>

</style>