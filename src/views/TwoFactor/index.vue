<template>
  <div class="container px-4 mx-auto">
    <AppLineX text="autenticação de dois fatores" class="my-8" />

    <div class="flex flex-col">
      <div class="flex lg:p-0 px-8 justify-center text-primary-dark">
        <div class="max-w-sm">
          <!-- <form @submit="onSubmit"> -->
            <p class="text-sm mb-4">
              Enviamos uma mensagem de texto para seu telefone (11) XXXXX-9999. Insira no campo abaixo o código recebido para entrar.
            </p>

            <app-input
              type="text"
              placeholder="Código"
              required
              :disabled="state.isLoading"
              :error="state.code.errorMessage"
              v-model="state.code.value"
            ></app-input>

            <div class="mb-8">
              <router-link to="/" class="text-primary-light cursor-pointer underline">Reenviar</router-link>
            </div>

            <p class="text-xs mb-6">
              "Caso não reconheça esse número de telefone, faça atualização do seu cadastro ligando na Central de Atendimento 3003-4022 (Capitais e Regiões Metropolitanas) / 0800 200 4022 (demais localidades)"
            </p>

            <!-- <app-button type="submit" :disabled="state.isLoading" :loading="state.isLoading">VERIFICAR</app-button> -->
            <app-button @click="redirect">VERIFICAR</app-button>
          <!-- </form> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
// import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import { validateEmptyAndLength3 } from '@/utils/validators'
// import services from '@/services/index'
import AppButton from '@/components/ui/AppButton'
import AppInput from '@/components/ui/AppInput'
import AppLineX from '@/components/ui/AppLineX'

export default {
  components: {
    AppButton,
    AppInput,
    AppLineX
  },

  setup () {
    // const store = useStore()
    // const route = useRoute()
    const router = useRouter()
    const { handleSubmit } = useForm()

    const {
      value: codeValue,
      errorMessage: codeErrorMessage
    } = useField('code', validateEmptyAndLength3)

    const state = reactive({
      code: {
        value: codeValue,
        errorMessage: codeErrorMessage
      },
      isLoading: false,
      showModal: true
    })

    const redirect = () => {
      router.push({ name: 'ShareRequest' })
    }

    const onSubmit = handleSubmit(async (values) => {
      router.push({ name: 'Dashboard' })
      // state.isLoading = true
      // try {
      //   const response = await services.auth.login({ cpf: state.cpf.value, password: state.password.value })

      //   if (response.data) {
      //     store.commit('setToken', response.data.token)

      //     route.query.redirect
      //       ? router.push({ name: route.query.redirect })
      //       : router.push({ name: 'Dashboard' })
      //   }
      // } catch (error) {
      //   console.log('Ocorreu um erro ao fazer o login')
      // } finally {
      //   state.isLoading = false
      // }
    })

    return {
      state,
      onSubmit,
      redirect
    }
  }
}
</script>
