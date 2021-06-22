<template>
  <div>
    <div class="text-base">
      <p class="text-lg mb-2">Atenção</p>
      <p class="mb-4">Identificamos que seu acesso vem do redirecionamento da solicitação de <span class="font-semibold">Compartilhamento de Dados.</span></p>
      <p class="mb-4">No entanto, o CPF/CNPJ informado no início do processo não é o mesmo do utilizado para acessar o(s) seu(s) contrato(s) no Banco PSA.</p>

      <div class="bg-gray-lightest p-4">
        <p class="font-semibold mb-2">Para resolver o problema você pode:</p>
        <p class="mb-4">Voltar à Solicitação de Compartilhamento na Instituição Receptora dos dados e inserir o mesmo CPF/CNPJ que você usa para acessar o(s) seu(s) contrato(s) no Banco PSA.</p>
        <p>Utilizar os dados de acesso de um contrato do Banco PSA que tenha o mesmo CPF/CNPJ informado na Solicitação de Compartilhamento na Instituição Receptora dos dados.</p>
      </div>
    </div>

    <div class="flex-shrink-0 justify-end flex pt-4">
      <app-button @click="$emit('ok')">ENTENDI</app-button>
    </div>
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
