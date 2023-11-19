<template>
  <div v-if="props.images.length > 0">
    <v-carousel show-arrows="hover" v-if="props.images.length >= 2">
      <v-carousel-item
          @click="selectImage(item)"
          class="image"
          v-for="item in props.images"
          :key="`image_${item.id}`"
          :src="'https://test.kznhelpbot.kzn.kirarock.space/storage/telegram/' + item.path"
          cover
      />
    </v-carousel>

    <div @click="selectImage(props.images[0])" class="image" v-else>
      <v-img cover :aspect-ratio="1"
             :src="'https://test.kznhelpbot.kzn.kirarock.space/storage/telegram/' + props.images[0].path"></v-img>
    </div>
  </div>

  <v-dialog v-model="state.dialog" class="fullscreen">
    <div class="fullscreen__container" @click="state.dialog = false">
        <v-img :width="'100%'" :aspect-ratio="1"
               :src="'https://test.kznhelpbot.kzn.kirarock.space/storage/telegram/' + state.selected.path"></v-img>
    </div>
  </v-dialog>
</template>

<script lang="ts" setup>
import {defineProps, reactive} from "vue";

const props = defineProps()

const state = reactive({
  dialog: false,
  selected: {}
})

const selectImage = (image) => {
  state.dialog = true
  state.selected = image
}

</script>

<style lang="scss" scoped>
.image {
  cursor: pointer;
}

.fullscreen {
  cursor: pointer;

  &__container {
    width: 80vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>