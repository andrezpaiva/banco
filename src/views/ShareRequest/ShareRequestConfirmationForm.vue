<template>
  <app-card class="text-sm">
    <div class="flex justify-between border-b-2 border-dashed pb-3 mb-3">
      <div class="flex">
        <div class="mr-2">
          <app-checkbox
            v-model="state.checkboxOne"
          ></app-checkbox>
        </div>
        <div>
          <p class="font-semibold mb-1">Dados Cadastrais</p>
          <p>Serão compartilhados dados pessoais.</p>
        </div>
      </div>
      <div>
        <ExclamationCircleIcon class="text-gray w-6 h-6 cursor-pointer" @click="$emit('showDataSource')" />
      </div>
    </div>

    <div class="flex justify-between border-b-2 border-dashed pb-3 mb-3">
      <div class="flex items-center">
        <div class="mr-2">
          <app-checkbox
            v-model="state.checkboxTwo"
          ></app-checkbox>
        </div>
        <div>
          <p class="font-semibold">Dados de Operação de Crédito – Financiamento</p>
        </div>
      </div>
      <div>
        <ExclamationCircleIcon class="text-gray w-6 h-6 cursor-pointer" @click="$emit('showDataSourceCredit')" />
      </div>
    </div>

    <div class="flex">
      <div class="mr-2">
        <XCircleIcon class="text-red-500 w-6 h-6" />
      </div>
      <div>
        <p class="font-semibold mb-1">Dados de Conta Corrente</p>
        <p>O Banco PSA não possui dados desta modalidade para compartilhar.</p>
      </div>
    </div>
  </app-card>
</template>

<script>
import { reactive } from 'vue'
import AppCard from '@/components/ui/AppCard'
import AppCheckbox from '@/components/ui/AppCheckbox'
import { ExclamationCircleIcon, XCircleIcon } from '@heroicons/vue/outline'

export default {
  components: {
    AppCard,
    AppCheckbox,
    ExclamationCircleIcon,
    XCircleIcon
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  setup () {
    const state = reactive({
      checkboxOne: '',
      checkboxTwo: ''
    })

    return {
      state
    }
  }
}
</script>
