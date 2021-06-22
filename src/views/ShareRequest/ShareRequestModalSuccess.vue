<template>
  <div>
    <div class="flex justify-center">
      <CheckCircleIcon class="h-20 w-20 text-green-500" />
    </div>

    <p class="text-lg mb-2 text-center">Operação realizada com sucesso</p>
    <p class="text-sm mt-3 mb-8 text-center">Você está sendo direcionado para o <span class="font-semibold">Banco Santander</span> para concluir o processo de compartilhamento de dados</p>

    <AppAvatarCompare size="sm" />

    <div class="flex justify-center">
      <app-button @click="$emit('yes')">OK</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/ui/AppButton'
import AppAvatarCompare from '@/components/ui/AppAvatarCompare'
import { CheckCircleIcon } from '@heroicons/vue/outline'

export default {
  components: {
    AppButton,
    AppAvatarCompare,
    CheckCircleIcon
  }
}
</script>
