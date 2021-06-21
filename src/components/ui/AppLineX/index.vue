<template>
  <div class="app-line-x text-center relative">
    <span
      class="app-line-x__text m-0 text-lg bg-white inline-block uppercase"
      :class="{ 'px-10 py-2': text !== '' }"
    >
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style  scoped>
.app-line-x {
  z-index: 2;
}

.app-line-x :after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  border-top: solid 1px #B1B1B1;
  z-index: -1;
}
</style>
