<script setup>
import {computed, defineEmits, defineProps, reactive} from "vue";

const props = defineProps({
  headers: [],
  actions: Boolean,
  list: [],
  selects: Boolean,
  loading: Boolean,
  row_clickable: Boolean
})
// const props = withDefaults(defineProps(), {
//   row_clickable: false,
// })

const emits = defineEmits(['action', 'sorted', 'rowClicked', 'update:modelValue'])

const state = reactive({
  selected: [],
  current_sort: {
    value: null,
    direction: 'desc'
  },
})

const actionPressed = (item, action) => {
  emits('action', {
    item: item,
    action: action
  })
}


const sort = (value) => {
  // if (state.current_sort.value != value) {
  //   state.current_sort.direction = "desc"
  // } else {
  //   state.current_sort.direction = state.current_sort.direction === "desc" ? "asc" : "desc"
  // }
  // state.current_sort.value = value
  //
  // emits('sorted', state.current_sort)
}

const selectItem = () => {
  emits('update:modelValue', state.selected)
}

const hasSelected = computed(() => {
  return state.selected.length > 0
})

const selectAll = () => {
  if (hasSelected.value) {
    state.selected.splice(0, state.selected.length)
  } else {
    props.list.forEach(e => {
      return state.selected.push(e)
    })
  }

  selectItem()
}

const clickOnRow = (item) => {
  if (props.row_clickable){
    emits('rowClicked', item)
  }
}

</script>

<template>
  <div class="table__container">
    <v-table class="table" density="comfortable">
      <thead>
      <tr>
        <th style="max-width: 50px" v-if="props.selects">
          <v-checkbox
              density="compact"
              hide-details
              v-model="hasSelected"
              @change="selectAll"
          ></v-checkbox>
        </th>
        <th v-for="(header, i) in props.headers" :key="`header_${i}`">
          <template v-if="header.sortable">
          <span class="table__sort" @click="sort(header.value)">
            <v-icon v-if="state.current_sort.value === header.value"
                    :icon="state.current_sort.direction === 'asc' ? 'mdi-sort-ascending' : 'mdi-sort-descending'"
                    small></v-icon>
            <v-icon v-else small icon="mdi-sort"></v-icon>
            {{ header.title }}
          </span>
          </template>
          <template v-else>
            {{ header.title }}
          </template>
        </th>
        <th v-if="props.actions"></th>
      </tr>
      </thead>
      <tbody>

      <tr v-for="(item, i) in props.list" :key="`item_${i}`" @click.stop="clickOnRow(item)" :class="{clickable: props.row_clickable}">
        <td v-if="props.selects">
          <v-checkbox
              @click.stop
              density="compact"
              hide-details
              v-model="state.selected"
              :value="item"
              @change="selectItem"
          ></v-checkbox>
        </td>
        <td v-for="(header, i) in props.headers" :key="`header_${i}`">
          <slot :name="`item_${header.value}`" :item="item">
            {{ item[header.value] }}
          </slot>
        </td>
        <template v-if="props.actions">
          <td class="table__actions">
            <slot :name="`item_actions`" :item="item">
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" flat density="compact" icon="mdi-dots-vertical"></v-btn>
                </template>
                <v-list density="compact">
                  <v-list-item density="compact">
                    <slot :name="`item_actions_show`"  :item="item">
                    <v-list-item-title>
                      <v-btn class="w-100" flat density="comfortable" prepend-icon="mdi-eye"
                             @click="actionPressed(item, 'show')">Просмотр
                      </v-btn>
                    </v-list-item-title>
                    </slot>
                    <slot :name="`item_actions_edit`"  :item="item">
                    <v-list-item-title>
                      <v-btn class="w-100" flat density="comfortable" prepend-icon="mdi-pencil"
                             @click="actionPressed(item, 'edit')">Редактировать
                      </v-btn>
                    </v-list-item-title>
                    </slot>
                    <v-divider class="mb-2 mt-2"></v-divider>
                    <slot :name="`item_actions_delete`"  :item="item">
                    <v-list-item-title>
                      <v-btn class="w-100" outlined color="error" flat density="comfortable" prepend-icon="mdi-delete"
                             @click="actionPressed(item, 'delete')">
                        Удалить
                      </v-btn>
                    </v-list-item-title>
                    </slot>
                  </v-list-item>
                </v-list>
              </v-menu>
            </slot>
          </td>
        </template>
      </tr>
      </tbody>
    </v-table>

    <div v-if="props.loading" class="table__loader">
      <v-progress-circular
          indeterminate
          color="primary"
      ></v-progress-circular>
    </div>
  </div>

</template>

<style lang="scss">
.table {
  .clickable {
    cursor: pointer;
  }

  td {
    max-width: 300px;
  }

  &__container {
    position: relative;
  }


  &__actions {
    text-align: right;
  }

  &__sort {
    cursor: pointer;
    width: 100%;
    display: block;
  }

  &__loader {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
  }
}
</style>