<template>
  <v-card-title>
    Сообщения
  </v-card-title>

  <v-divider/>

  <v-card-item class="chat">
    <v-list lines="two" v-if="props?.chat.length > 0">
      <template v-for="message in props?.chat" :key="`message_${message.id}`">
        <v-list-item>
          <template v-slot:title v-if="props?.from !== 'telegram'">
            {{ message.user ? message.user.name : message.telegramUser.username }}
          </template>
          <template v-slot:subtitle>
            {{ message.message }}
          </template>
          <template v-slot:append>
<!--            {{ formatDate(message.created_at) }}-->
          </template>
        </v-list-item>
        <v-divider/>
      </template>
    </v-list>

    <v-list v-else>
      <v-list-item>Нет сообщений</v-list-item>
    </v-list>
  </v-card-item>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  chat: Object,
  from: String
})
</script>