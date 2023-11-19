<template>
  <ToolbarHead
      :btn-back="true"
      title="Просмотр пользователя"
  >
    <template #btns>
      <v-btn @click="routeEdit">Изменить</v-btn>
    </template>
  </ToolbarHead>

  <loader :loading="state.loading">
  <v-row>
    <v-col cols="12" md="6">
      <v-card border>
        <v-card-title>
          {{ state.user?.name }}
        </v-card-title>
        <v-card-item>
          <v-table>
            <tbody>
            <tr>
              <th>Id</th>
              <td>{{ state.user.id}}</td>
            </tr>
            <tr>
              <th>Имя</th>
              <td>{{ state.user.name}}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{{ state.user.email}}</td>
            </tr>
            <tr>
              <th>Роль</th>
              <td>{{ formatRoles(state.user.role) }}</td>
            </tr>
            </tbody>
          </v-table>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
  </loader>

</template>

<script setup>
import {reactive} from "vue";
import ToolbarHead from "@/components/ToolbarHead.vue";
import Loader from "@/components/Loader.vue";


const state = reactive({
  user: {},
  loading: true
})

const fetch = async () => {
  // try {
  //   const res = await api.users.get(Number(route.params.id))
  //   state.user = res.data
  // } catch (e){
  //   appStore.error('Произошла ошибка при получении информации о пользователе')
  // } finally {
  //   state.loading = false
  // }
}

// const routeEdit = () => {
//   router.push({name: 'users.edit', params: {id: route.params.id}})
// }

// fetch()
</script>
