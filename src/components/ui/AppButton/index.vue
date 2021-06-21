<template>
  <button
    :="$attrs"
    class="py-2 px-8 shadow-md focus:outline-none transition duration-300"
    :class="{
      'animate-pulse': loading,
      'w-full': full,
      'bg-primary text-white hover:bg-white hover:text-primary': variant === 'primary',
      'bg-white text-primary hover:bg-primary hover:text-white': variant === 'secondary'
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
