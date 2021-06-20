<template>
  <div class="container px-4 mx-auto">
    <vue-final-modal
      v-model="state.showModalTermsConditions"
      v-slot="{ close }"
      classes="flex justify-center items-center"
      content-class="relative flex flex-col max-h-full max-w-2xl mx-4 p-6 bg-white dark:bg-gray-900"
    >
      <ShareRequestModalTermsConditions />
      <XIcon @click="close" class="absolute top-4 right-4 mt-2 mr-2 h-6 w-6 cursor-pointer text-gray" />
    </vue-final-modal>

    <vue-final-modal
      v-model="state.showModalConfirmation"
      v-slot="{ close }"
      classes="flex justify-center items-center"
      content-class="relative flex flex-col max-h-full w-96 mx-4 p-6 bg-white dark:bg-gray-900"
    >
      <ShareRequestModalConfirmation />
      <XIcon @click="close" class="absolute top-4 right-4 mt-2 mr-2 h-6 w-6 cursor-pointer text-gray" />
    </vue-final-modal>

    <vue-final-modal
      v-model="state.showModalSuccess"
      v-slot="{ close }"
      classes="flex justify-center items-center"
      content-class="relative flex flex-col max-h-full max-w-md mx-4 p-6 bg-white dark:bg-gray-900"
    >
      <ShareRequestModalSuccess @yes="close" />
      <XIcon @click="close" class="absolute top-4 right-4 mt-2 mr-2 h-6 w-6 cursor-pointer text-gray" />
    </vue-final-modal>

    <AppLineX text="pedido de compartilhamento" class="my-8" />

    <div class="flex flex-col">
      <div class="flex lg:p-0 px-8 justify-center text-primary-dark">
        <div class="max-w-lg pb-28">

          <AppAvatarCompare />

          <form @submit="onSubmit">
            <p class="text-sm mb-4">
              O <span class="font-semibold">Santander</span> (Instituição Receptora dos dados - IR) está solicitando o compartilhamento dos dados apresentados abaixo. Para que possamos concluir o compartilhamento, vamos lhe redirecionar para a <span class="font-semibold">IR</span>.
            </p>

            <p class="text-sm mb-4">
              Caso opte por <span class="font-semibold">NÃO</span> compartilhar um dos dados solicitados ou entenda ser necessário incluir novos dados no compartilhamento, será necessário iniciar um novo pedido na <span class="font-semibold">IR</span>.
            </p>

            <ShareRequestIdentification class="mb-3" />

            <ShareRequestConfirmationForm class="mb-3" />

            <ShareRequestDataSource class="mb-3" />

            <ShareRequestCode class="mb-3" />

            <app-button
              type="submit"
              :disabled="state.isLoading"
              :loading="state.isLoading"
            >
              LER TERMOS E CONDIÇÕES
            </app-button>
          </form>
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
import AppLineX from '@/components/ui/AppLineX'
import ShareRequestIdentification from './ShareRequestIdentification'
import ShareRequestDataSource from './ShareRequestDataSource'
import ShareRequestCode from './ShareRequestCode'
import ShareRequestConfirmationForm from './ShareRequestConfirmationForm'
import ShareRequestModalTermsConditions from './ShareRequestModalTermsConditions'
import ShareRequestModalConfirmation from './ShareRequestModalConfirmation'
import ShareRequestModalSuccess from './ShareRequestModalSuccess'
import AppAvatarCompare from '@/components/ui/AppAvatarCompare'
import { XIcon } from '@heroicons/vue/outline'

export default {
  components: {
    AppButton,
    AppLineX,
    ShareRequestIdentification,
    ShareRequestDataSource,
    ShareRequestCode,
    ShareRequestConfirmationForm,
    ShareRequestModalTermsConditions,
    ShareRequestModalConfirmation,
    AppAvatarCompare,
    ShareRequestModalSuccess,
    XIcon
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
      showModalTermsConditions: false,
      showModalConfirmation: false,
      showModalSuccess: false
    })

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
      onSubmit
    }
  }
}
</script>
