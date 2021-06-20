<template>
  <div class="text-base">
    <p class="text-lg mb-4">Confirmar consentimento</p>
    <p class="mt-3">Tem certeza que deseja compartilhar os dados?</p>
  </div>

  <div class="flex-shrink-0 justify-end flex pt-4">
    <app-button class="mr-4" variant="secondary" @click="$emit('no')">NÃO</app-button>
    <app-button @click="$emit('yes')">SIM</app-button>
  </div>
</template>

<script>
import AppButton from '@/components/ui/AppButton'

export default {
  components: {
    AppButton
  }
}
</script>
