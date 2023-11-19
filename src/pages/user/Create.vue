<template>
  <ToolbarHead
      :btn-back="true"
      :title="`Создание нового пользователя`"
  />

  <v-row>
    <v-col cols="12" md="6">
      <v-card border>
        <v-card-text>
          <Form></Form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>


</template>

<script lang="ts" setup>
import Form from '@/pages/user/components/Form.vue'
import ToolbarHead from "@/components/ToolbarHead.vue";

</script>