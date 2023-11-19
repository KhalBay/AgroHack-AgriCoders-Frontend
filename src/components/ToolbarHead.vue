<template>
  <v-toolbar class="mb-3" rounded>
    <v-toolbar-items>
      <v-btn
          v-if="props?.btnBack"
          @click="router.back()"
          color="primary"
      >Назад
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-title>
      {{ props.title }}
    </v-toolbar-title>
    <v-spacer/>
    <v-card-item>
      <slot name="btns"></slot>
    </v-card-item>
  </v-toolbar>
</template>

<script lang="ts" setup>
import {defineProps, reactive} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()

const props = defineProps()
</script>