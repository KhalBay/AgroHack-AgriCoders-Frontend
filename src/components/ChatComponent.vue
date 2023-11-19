<template>
  <loader :loading="state.loading">
    <v-card border>
      <MessageList :chat="state.chat" :from="props.from"/>
      <v-divider/>
      <v-card-actions>
        <v-form class="w-100" @submit.prevent>
          <v-textarea
              type="text"
              :rows="2"
              auto-grow
              label="Написать пользователю в чат"
              v-model="state.chatForm.message"
          />
          <v-btn type="submit" color="primary" @click="sendMessage">Отправить</v-btn>
        </v-form>
      </v-card-actions>
    </v-card>
  </loader>
</template>

<script setup>
import Loader from "./Loader.vue";
import {reactive, defineProps} from "vue";
import {useRoute} from 'vue-router'
import MessageList from "@/components/MessageList.vue";

interface Props {
  from?: string | null
}

const route = useRoute()

const props = defineProps<Props>()

const state = reactive({
  chat: [],
  chatForm: {
    message: ''
  },
  chatFormState: {
    hasResponseError: false,
    submitting: false
  },
  loading: false
})


const fetch = async () => {
  // state.loading = true
  // try {
  //   switch (props.from) {
  //     case 'group':
  //       const groupChat = await api.group.getChat(Number(route.params.id))
  //       state.chat = groupChat.data.reverse()
  //       break;
  //     default:
  //       const chat = await api.applications.getChat(Number(route.params.id))
  //       state.chat = chat.data.reverse()
  //       break;
  //   }
  // } catch (e) {
  //   console.error(e)
  // } finally {
  //   state.loading = false
  // }
}

const sendMessage = async () => {
  // try {
  //   state.chatFormState.submitting = true
  //   switch (props.from) {
  //     case 'group':
  //       await api.group.postChat(Number(route.params.id), state.chatForm)
  //       break;
  //     default:
  //       await api.applications.postChat(Number(route.params.id), state.chatForm)
  //       break;
  //   }
  //   state.chatForm.message = ''
  //   appStore.notify('Сообщение успешно отправлено')
  //   await fetch()
  // } catch (e) {
  //   state.chatFormState.hasResponseError = true
  // } finally {
  //   state.chatFormState.submitting = false
  // }
}

fetch()
</script>