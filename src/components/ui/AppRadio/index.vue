<template>
  <label class="app-radio flex items-center select-none" :for="option">
    <input
      type="radio"
      :value="option"
      :id="option"
      @change="$parent.$emit('input', $event.target.value), modelValue = $event.target.value"
      name="app-radio"
      class="hidden"
    />

    <div
      class="app-radio__control h-6 w-6 border rounded-full border-gray-light flex items-center justify-center"
    >
      <div class="app-radio__control__ball hidden h-4 w-4 bg-primary border-white border-2 rounded-full"></div>
    </div>
    <span class="text-sm font-semibold ml-3">{{ option }}</span>
  </label>
</template>

<script>
export default {
  props: {
    option: {
      required: true,
      type: String
    }
  },

  data () {
    return {
      modelValue: ''
    }
  }
}
</script>

<style>
.app-radio input[type=radio]:checked + .app-radio__control {
  background-color: #163762;
  border-color: #163762;
}
.app-radio input[type=radio]:checked + .app-radio__control .app-radio__control__ball {
  display: block;
}
</style>
