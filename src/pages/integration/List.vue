<template>
  <ToolbarHead title="Интеграции"/>

  <loader :loading="state.loading">
    <v-row>
      <v-col
          v-for="item in sortedApplicationsList"
          cols="4"
      >
        <v-card
            variant="outlined"
            link
            @click="isModal = !isModal"
        >
          <v-card-text>
            <v-row>
              <v-col
                  class="text-center"
                  align-self="center"
              >
                <v-icon size="xxx-large">
                  {{ categoryIcons[item.slug] }}
                </v-icon>
              </v-col>
              <v-col>
                <v-card-title class="text-center">
                  {{ item.name }}
                </v-card-title>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </loader>

  <ModalForm :isActive="isModal"/>

</template>

<script setup>
import ToolbarHead from "@/components/ToolbarHead.vue";
import Loader from "@/components/Loader.vue";
import ModalForm from "@/components/ModalForm.vue";
import {computed, reactive, ref} from 'vue'

const categoryIcons = {
  trash: 'mdi-delete-empty',
  cars: 'mdi-car-hatchback',
  dogs: 'mdi-dog-side',
  pits: 'mdi-image-broken-variant',
  heating: 'mdi-radiator',
  flooding: 'mdi-home-flood',
  woods: 'mdi-tree',
  other: 'mdi-help-circle',
}

const state = reactive({
  categories: [],
  loading: false
})

const isModal = ref(false)

const sortedApplicationsList = computed(() => {
  // return state.categories.sort(function (a, b) {
  //   return b.active - a.active
  // })
  return [
      {name: '1C Предприятие', slug: 'cars'},
      {name: 'другое..', slug: 'woods'},
  ]
})

const totalApplicationsCount = computed(() => {
  return state.categories.reduce((accumulator, item) => item.applications_count + accumulator, 0)
})


const fetch = async () => {
  // try {
  //   state.loading = true
  //   const response = await api.categories.list(state.params)
  //   state.categories = response.data.data
  // } catch (e) {
  //   console.error(e)
  // } finally {
  //   state.loading = false
  // }
}


fetch()
</script>