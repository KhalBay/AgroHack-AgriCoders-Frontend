<template>
  <ToolbarHead
      :btn-back="true"
      :title="`Изменить пользователя`"
  />

  <loader :loading="state.loading">
    <v-col cols="12" md="6">
      <v-card border v-if="state.user">
        <v-card-text>
          <Form  :user="state.user"></Form>
        </v-card-text>
      </v-card>
    </v-col>
  </loader>


</template>

<script lang="ts" setup>
import Form from '@/pages/user/components/Form.vue'
import ToolbarHead from "@/components/ToolbarHead.vue";
import Loader from "@/components/Loader.vue";
import {reactive} from "vue";
import {useRoute} from 'vue-router'

const route = useRoute()

const state = reactive({
  user: null,
  loading: true
})


//Подгуражаем информаци о пользователе
const fetch = async () => {
  // try {
  //   const res = await api.users.get(Number(route.params.id))
  //   state.user = res.data
  // } catch (e) {
  //   appStore.error('Произошла ошибка при получении информации о пользователе')
  // } finally {
  //   state.loading = false
  // }
}


fetch()

</script>