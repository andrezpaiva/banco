<template>
  <app-card class="text-sm">
    <div class="border-b-2 border-dashed pb-3 mb-3">
      <p>Código da solicitação:</p>
      <p class="font-semibold">656.664</p>
    </div>

    <div class="border-b-2 border-dashed pb-3 mb-3">
      <p>Data do compartilhamento:</p>
      <p class="font-semibold">29/04/2021 ás 17:54:30</p>
    </div>

    <div>
      <p>Prazo do compartilhamento:</p>
      <p class="font-semibold">12 meses | 29/04/2022</p>
    </div>
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
