<template>
  <div class="app-radio-group flex space-x-4">
    <AppRadio v-for="option in options" :option="option" :key="option" />
  </div>
</template>

<script>
import AppRadio from '@/components/ui/AppRadio'

export default {
  components: {
    AppRadio
  },

  props: {
    options: {
      required: true,
      type: Array
    }
  }
}
</script>
