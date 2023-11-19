<template>
  <div class="loader">
    <slot></slot>

    <div class="loader__progress" v-if="props.loading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  loading: { type: [Boolean], required: true}
})

</script>

<style scoped lang="scss">
.loader {
  position: relative;

  &__progress {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(255,255,255,0.7);
  }
}
</style>