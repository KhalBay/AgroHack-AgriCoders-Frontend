<template>
  <v-row justify="center" align-content="center">
    <v-col class="v-col-md-5 v-col-sm-12">
      <v-sheet>
        <v-card>
          <v-toolbar color="light-grey">
            <v-toolbar-title>Вход</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-alert class="mb-3" density="comfortable" type="error" v-model="state.loginFormState.hasResponseError">Неверный логин или пароль</v-alert>

            <v-form
                ref="form"
                @submit.prevent="submit"
            >
              <v-text-field
                  name="email"
                  v-model="state.form.email"
                  label="Email"
                  type="text"
                  :disabled="state.loginFormState.submitting"
                  density="comfortable"
              />
              <v-text-field
                  class="my-3"
                  name="password"
                  v-model="state.form.password"
                  label="Пароль"
                  type="password"
                  :disabled="state.loginFormState.submitting"
                  density="comfortable"
              />
              <v-btn type="submit" color="primary">Войти</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup>
import {reactive} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()

const state = reactive({
  form: {
    email: '',
    password: ''
  },
  loginFormState: {
    hasResponseError: false,
    submitting: false
  }
})

const submit = async () => {
  await router.push('/area')
  // try {
  //   state.loginFormState.hasResponseError = false
  //   state.loginFormState.submitting = true
  //
  //   // const res = await api.auth.login(state.form.email, state.form.password)
  //   authStore.authenticate({token: 'ng', user: 'User'})
  //   await router.push('/admin')
  //   await router.push('/dashboard')
  //
  // } catch (e) {
  //   state.loginFormState.hasResponseError = true
  // } finally {
  //   state.loginFormState.submitting = false
  // }
}
</script>