<template>
  <app-card class="text-sm">
    <p class="font-semibold">Identificação</p>
    <p><span class="font-semibold">Nome:</span> José Alfredo Nascimento</p>
    <p><span class="font-semibold">CPF:</span> XXX.XXX.999-99</p>
  </app-card>
</template>

<script>
import AppCard from '@/components/ui/AppCard'

export default {
  components: {
    AppCard
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
