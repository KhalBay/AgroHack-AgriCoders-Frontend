<template>
    <v-list>
      <v-list-item
          v-for="(item, i) in navigation"
          :key="i"
          :value="item"
          :to="item.route"
          :active="route.name === item.route.name"
          color="primary"
          :disabled="item.disabled"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
      <v-divider/>
    </v-list>
<!--  <v-list-item-->
<!--      :title="authStore.state.user?.name"-->
<!--      :subtitle="formatRoles(authStore.state.user?.role)"-->
<!--  >-->
<!--    <template v-slot:append>-->
<!--      <v-btn-->
<!--          size="small"-->
<!--          variant="text"-->
<!--          icon="mdi-logout-variant"-->
<!--          @click="logout"-->
<!--          color="primary"-->
<!--      ></v-btn>-->
<!--    </template>-->
<!--  </v-list-item>-->
</template>

<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
const navigation = ref([
  { title: 'Поля', icon: 'mdi-texture-box', route: {name: 'area.index'}, disabled: false},
  { title: 'Техника', icon: 'mdi-tractor-variant', route: {name: 'equipment.index'}, disabled: false},
  { title: 'Пользователи Telegram', icon: 'mdi-send', route: {name: 'users-telegram.index'}, disabled: false},
  { title: 'Настройки', icon: 'mdi-cog', route: {name: 'settings.index'}, disabled: true},
  { title: 'Интеграции', icon: 'mdi-connection', route: {name: 'integration.index'}, disabled: false},
  { title: 'Журнал', icon: 'mdi-clipboard-text-search-outline', route: {name: 'log.index'}, disabled: false},
  { title: 'Справочник операций', icon: 'mdi-notebook-check-outline', route: {name: 'directory.index'}},
  { title: 'Пользователи', icon: 'mdi-account-group', route: {name: 'users.index'}, disabled: false}
])

const logout = async () => {
  // try {
  //   // await api.auth.logout()
  //   authStore.destroy()
  //   await router.push('/')
  // } catch (e) {
  //   console.error(e)
  // }
}
</script>
