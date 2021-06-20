<template>
  <app-card class="text-sm">
    <p class="font-semibold mb-3">Origem dos dados</p>
    <p class="mb-3">Os contratos abaixo serão utilizados na origem de dados</p>

    <p class="font-semibold">CDC 20021123974</p>
    <p class="text-gray mb-3">Vigência do contrato: de 01/2020 a 01/2023</p>

    <p class="font-semibold">CDC 20021783984</p>
    <p class="text-gray mb-3">Vigência do contrato: de 09/2019 a 09/2022</p>

    <p class="font-semibold">CDC 20021623234</p>
    <p class="text-gray">Vigência do contrato: de 09/2019 a 09/2022</p>
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
