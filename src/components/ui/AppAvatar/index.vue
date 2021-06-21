<template>
  <div
    class="rounded-full"
  >
    <img
      class="rounded-full"
      :class="{
        'w-12 h-12': size === 'sm',
        'w-16 h-16': size === 'md',
        'w-28 h-28': size === 'lg'
      }"
      :src="image"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'md'
    },
    image: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
</script>
