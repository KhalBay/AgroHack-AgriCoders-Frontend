<template>
  <ToolbarHead
      title="Журнал"
  >
  </ToolbarHead>

  <Loader :loading="state.loading">
    <v-row>
      <v-col cols="6">
        <v-card border>
          <v-card-text>
            <v-table>
              <tbody>
              <tr>
                <td>Username</td>
                <td>{{ state.user.username ? state.user.username : '-' }}</td>
              </tr>
              <tr>
                <td>Имя</td>
                <td>{{ state.user.first_name ? state.user.first_name : '-' }}</td>
              </tr>
              <tr>
                <td>Роль</td>
                <td>{{ state.user.last_name ? state.user.last_name : '-' }}</td>
              </tr>
              <tr>
                <td>Комментарий</td>
                <td>{{ state.user.comment ? state.user.comment : '-' }}</td>
              </tr>
              <tr>
                <td>Телефон</td>
                <td>{{ state.user.phone ? state.user.phone : '-' }}</td>
              </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card border>
          <MessageList :chat="state.message" from="telegram"/>
        </v-card>
      </v-col>
    </v-row>
  </Loader>
</template>

<script setup>
import ToolbarHead from "@/components/ToolbarHead.vue";
import Loader from "@/components/Loader.vue";
import MessageList from "@/components/MessageList.vue";
import {reactive} from "vue";
import {useRoute} from 'vue-router'

const route = useRoute()

const state = reactive({
  user: {},
  applicationsId: [],
  loading: false,
  message: [],
})

const fetch = async () => {
  // state.loading = true
  // try {
  //   state.applicationsId = []
  //   // const res = await api.telegram_users.get(+route.params.id)
  //   state.user = {
  //     id: 1,
  //     telegram_id: 12,
  //     first_name: 'string|undefined',
  //     username: 'string|null',
  //     last_name: 'string|undefined',
  //     description: 'string|null',
  //     phone: 'string|undefined',
  //     created_at: 'string',
  //     updated_at: 'string',
  //     comment: 'string | undefined',
  //     new_messages_count: null,
  //     contacts: undefined,
  //     messages: { 'hello': 'ee' },
  //     applications: null,
  //     email: 'string | null',
  //     vk: 'string | null',
  //     instagram: 'string | null',
  //   }
  //   state.user.applications?.forEach(el => state.applicationsId.push(el.id))
  //   // state.message = res.data.messages.filter(el => el.type === 'message')
  //
  //   state.loading = false
  // } catch (e) {
  //   console.error(e)
  // }
}

const editUser = () => {
  // router.push({name: 'telegram_users.edit', params: {id: route.params.id}})
}

fetch()
</script>
