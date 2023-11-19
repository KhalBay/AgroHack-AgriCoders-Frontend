<template>
    <v-row>
      <v-col>
        <ToolbarHead
            :btn-back="false"
            :title="`Техника`"
        >
        </ToolbarHead>
      </v-col>
    </v-row>

<!--    <v-row>-->
<!--      <v-col cols="12" md="6">-->
<!--        <v-form @submit.prevent="fetch">-->

<!--          <v-text-field-->
<!--              label="Поиск"-->
<!--              v-model="state.params.filters.search"-->
<!--              density="compact"-->
<!--              hide-details-->
<!--          >-->
<!--          </v-text-field>-->

<!--        </v-form>-->
<!--      </v-col>-->
<!--    </v-row>-->

    <v-row>
      <v-col>
        <v-card variant="outlined" color="grey-lighten-2">
          <v-card-item>
            <ListTable :headers="headers"
                       :list="state.list"
                       :actions="true"
                       :loading="state.loading"
                       @action="actionPressed"
                       @sorted="sorted"
            >
            </ListTable>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>


    <v-row>
      <v-col>
<!--        <ListMeta :disabled="state.loading" :meta="state.meta" :list-count="state.list.length"-->
<!--                  @updated="fetch"></ListMeta>-->
      </v-col>
    </v-row>

    <RemoveItem ref="removeItem"
                :assigned-item="state.selected_item"
                :item-name="'users'"
                @removed="removed"
    ></RemoveItem>

</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import ListMeta from "@/components/ListMeta.vue";
import ListTable from "@/components/ListTable.vue";
import RemoveItem from "@/components/RemoveItem.vue";
import ToolbarHead from "@/components/ToolbarHead.vue";

const removeItem = ref(null)

const state = reactive({
  list: [],
  meta: {},
  params: {
    filters: {
      search: null
    }
  },
  selected_item: {},
  loading: false
})

const headers = [
  {
    title: 'Техника',
    value: 'equipment',
    sortable: true
  },
  {
    title: 'Скоростной режим от',
    value: 'speed-mode-from',
    sortable: true
  },
  {
    title: 'Скоростной режим до',
    value: 'speed-mode-to',
    sortable: true
  },
  {
    title: 'Ширина захвата',
    value: 'work-area',
    sortable: true
  }
]

const data = [
  {'equipment': 'Опрыскиватель', 'speed-mode-from': 10, 'speed-mode-to': 15, 'work-area': 25},
  {'equipment': 'Опрыскиватель 2', 'speed-mode-from': 10, 'speed-mode-to': 10, 'work-area': 15},
  {'equipment': 'Трактор', 'speed-mode-from': 10, 'speed-mode-to': 25, 'work-area': 50},
]


const fetch = async () => {
  state.list = data
  // state.loading = true
  //
  // try {
  //   state.params.page = state.meta.current;
  //   state.params.per_page = state.meta.per_page;
  //
  //   const res = await api.users.list(state.params)
  //
  //   state.list = res.data.data
  //   state.meta = res.data.meta
  //
  //   state.loading = false
  // } catch (e) {
  //   console.error(e)
  // }
}

const actionPressed = async (payload) => {
  // switch (payload.action) {
  //   case "show":
  //     await router.push({name: 'users.show', params: {id: payload.item.id}})
  //     break;
  //   case "edit":
  //     await router.push({name: 'users.edit', params: {id: payload.item.id}})
  //     break;
  //   case "delete":
  //     state.selected_item = payload.item
  //     removeItem.value?.show()
  //     break;
  // }
}

const removed = async () => {
  state.selected_item = {}
  // appStore.notify('Пользователь успешно удален')
  await fetch()
}

const sorted = async (payload) => {
  // state.params.sort = payload.value
  // state.params.direction = payload.direction
  //
  // await fetch()
}

onMounted(() => {
  fetch()
})
</script>