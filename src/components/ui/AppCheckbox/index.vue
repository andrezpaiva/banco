<template>
  <div class="mb-4">
    <label class="flex items-center select-none">
      <input
        :="$attrs"
        type="checkbox"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.checked)"
        class="hidden"
      />
      <div
        class="h-6 w-6 border"
        :class="{
          'bg-primary border-primary': modelValue,
          'border-gray-light': !modelValue
        }"
      >
        <CheckIcon
          v-show="modelValue"
          :class="{ 'text-white': modelValue }"
        />
      </div>
      <span class="text-sm font-semibold ml-3">{{ label }}</span>
    </label>

    <transition name="fade">
      <div
        v-show="!!error"
        class="transition ease-in-out flex items-center mt-1 text-danger text-xs font-medium"
      >
        {{ error }}
      </div>
    </transition>
  </div>
</template>

<script>
import { CheckIcon } from '@heroicons/vue/outline'

export default {
  components: {
    CheckIcon
  },

  props: {
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    }
  }
}
</script>

<style lang="postcss">

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
