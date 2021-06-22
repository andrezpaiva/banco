<template>
  <div class="container px-4 mx-auto">
    <vue-final-modal
      v-model="state.showModal"
      v-slot="{ close }"
      classes="flex justify-center items-center"
      content-class="relative flex flex-col max-h-full max-w-2xl mx-4 p-6 bg-white dark:bg-gray-900"
    >
      <LoginAttention
        @ok="redirect"
      />
      <XIcon @click="close" class="absolute top-4 right-4 mt-2 mr-2 h-6 w-6 cursor-pointer text-gray" />
    </vue-final-modal>

    <AppLineX text="login" class="my-8" />

    <div class="flex flex-col lg:flex-row">
      <div
        class="flex lg:p-0 px-8 justify-center text-primary-dark"
      >
        <div class="max-w-sm">
          <form @submit="onSubmit">
            <p class="text-sm mb-6">
              <span>Entre com seu CPF ou CNPJ para ter acesso ao Portal </span>
              <span class="font-bold">Banco PSA</span>
            </p>

            <AppRadioGroup
              :options="state.decisions"
              v-model="state.selected"
              class="pb-6"
            />

            <app-input
              type="number"
              placeholder="CPF"
              required
              :disabled="state.isLoading"
              :error="state.cpf.errorMessage"
              v-model="state.cpf.value"
            ></app-input>

            <app-input
              type="password"
              placeholder="Password"
              required
              :disabled="state.isLoading"
              :error="state.password.errorMessage"
              v-model="state.password.value"
            ></app-input>

            <div class="mb-8">
              <router-link to="/" class="text-primary-light cursor-pointer underline">Esqueci minha senha</router-link>
            </div>

            <!-- <app-button type="submit" :disabled="state.isLoading" :loading="state.isLoading">CONFIRMAR</app-button> -->
            <app-button @click="modal">CONFIRMAR</app-button>
          </form>
        </div>
      </div>

      <div
        class="flex lg:p-0 py-10 px-8 lg:h-56 justify-center"
      >
        <div class="max-w-sm lg:border-l border-gray-light lg:ml-12">
          <div class="lg:ml-12">
            <h1 class="text-sm mb-4">Primeiro acesso?</h1>
            <app-button>CLIQUE AQUI</app-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import { validateEmptyAndLength3, validateEmptyAndCPF } from '@/utils/validators'
import services from '@/services/index'
import AppButton from '@/components/ui/AppButton'
import AppInput from '@/components/ui/AppInput'
import AppRadioGroup from '@/components/ui/AppRadioGroup'
import AppLineX from '@/components/ui/AppLineX'
import LoginAttention from './LoginAttention'
import { XIcon } from '@heroicons/vue/outline'

export default {
  components: {
    AppButton,
    AppInput,
    AppRadioGroup,
    AppLineX,
    LoginAttention,
    XIcon
  },

  setup () {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const { handleSubmit } = useForm()

    const {
      value: cpfValue,
      errorMessage: cpfErrorMessage
    } = useField('cpf', validateEmptyAndCPF)
    const {
      value: passwordValue,
      errorMessage: passwordErrorMessage
    } = useField('password', validateEmptyAndLength3)

    const state = reactive({
      cpf: {
        value: cpfValue,
        errorMessage: cpfErrorMessage
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage
      },
      isLoading: false,
      showModal: false,
      decisions: ['Pessoa física', 'Pessoa jurídica'],
      selected: ''
    })

    const modal = () => {
      state.showModal = true
    }

    const redirect = () => {
      router.push({ name: 'TwoFactor' })
    }

    const onSubmit = handleSubmit(async (values) => {
      state.isLoading = true
      try {
        const response = await services.auth.login({ cpf: state.cpf.value, password: state.password.value })

        if (response.data) {
          store.commit('setToken', response.data.token)

          route.query.redirect
            ? router.push({ name: route.query.redirect })
            : router.push({ name: 'Dashboard' })
        }
      } catch (error) {
        console.log('Ocorreu um erro ao fazer o login ')
      } finally {
        state.isLoading = false
      }
    })

    return {
      state,
      onSubmit,
      modal,
      redirect
    }
  }
}
</script>
