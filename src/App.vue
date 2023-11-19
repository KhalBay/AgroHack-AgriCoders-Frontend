<script setup>
import LeftMenu from "@/components/LeftMenu.vue";
import {RouterView, useRoute} from 'vue-router'
import {computed} from "vue";

const route = useRoute()
const isShowLeftMenu = computed(() => route.name !== 'login')
</script>

<template>
  <v-app theme="primary">
    <v-layout>
      <v-navigation-drawer
          v-if="isShowLeftMenu"
          floating
          permanent
      >
        <LeftMenu/>
      </v-navigation-drawer>
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>

      </v-main>
    </v-layout>


<!--    <v-snackbar color="success" v-model="appStore.state.notification.show" :timeout="appStore.state.notification.timeout">-->
<!--      {{ appStore.state.notification.message }}-->
<!--    </v-snackbar>-->


<!--    <v-snackbar v-model="appStore.state.error.show" :timeout="appStore.state.error.timeout">-->
<!--      {{ appStore.state.error.message }}-->

<!--      <template v-slot:actions>-->
<!--        <v-btn-->
<!--            color="primary"-->
<!--            variant="text"-->
<!--            @click="appStore.state.error.show = false"-->
<!--        >-->
<!--          Закрыть-->
<!--        </v-btn>-->
<!--      </template>-->
<!--    </v-snackbar>-->

  </v-app>
</template>

<style lang="scss" scoped>

</style>
