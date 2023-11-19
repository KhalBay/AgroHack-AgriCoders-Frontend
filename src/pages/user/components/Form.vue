<template>
    <v-form @submit.prevent="submit">
      <v-text-field
          label="Имя пользователя"
          type="text"
          name="name"
          density="comfortable"
          v-model="state.form.name"
      />
      <v-text-field
          label="Email"
          type="text"
          name="email"
          density="comfortable"
          v-model="state.form.email"
      />
      <v-text-field
          label="Пароль"
          type="password"
          name="password"
          density="comfortable"
          v-model="state.form.password"
      />
      <v-text-field
          label="Подтвердите пароль"
          type="password"
          name="password_confirmation"
          density="comfortable"
          v-model="state.form.password_confirmation"
      />
      <v-radio-group
          inline
          mandatory
          name="role"
          density="comfortable"
          v-model="state.form.role"
      >
        <v-radio
            label="Админ"
            value="admin"
        ></v-radio>
        <v-radio
            label="Суперадмин"
            value="superadmin"
        ></v-radio>
      </v-radio-group>

      <v-btn type="submit" color="primary">
        {{ isEdit ? 'Сохранить пользователя' : 'Создать пользователя' }}
      </v-btn>
    </v-form>
</template>

<script setup>
import {computed, reactive} from "vue";

const props = defineProps()

const state = reactive({
  form: {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: 'admin'
  },
  userFormState: {
    hasResponseError: false,
    isSubmitting: false
  },
  isEdit: false,
})
</script>
