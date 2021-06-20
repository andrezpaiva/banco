<template>
  <header class="bg-primary-dark px-6 py-4">
    <div class="flex flex-col lg:flex-row justify-between items-center min-h-full">
      <img
        src="../../../assets/images/logo.png"
        class="h-12 cursor-pointer mr-6"
        @click="goPage('Home')"
      />

      <TheHeaderNav :items="state.list" />
    </div>
  </header>
</template>

<script>
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import TheHeaderNav from './TheHeaderNav'

export default {
  components: {
    TheHeaderNav
  },

  setup () {
    const router = useRouter()
    const store = useStore()
    const state = reactive({
      list: [
        {
          id: 1,
          text: 'início'
        },
        {
          id: 2,
          text: 'institucional'
        },
        {
          id: 3,
          text: 'fale conosco'
        },
        {
          id: 4,
          text: 'ouvidoria'
        },
        {
          id: 5,
          text: 'mapa de navegação'
        },
        {
          id: 6,
          text: 'política de privacidade'
        },
        {
          id: 7,
          text: 'proteção de dados'
        },
        {
          id: 8,
          text: 'lgpd'
        },
        {
          id: 9,
          text: 'open banking'
        }
      ]
    })

    function goPage (page) {
      router.push({ name: page })
    }

    function logout () {
      store.commit('logout')
      goPage('Home')
    }

    return {
      state,
      goPage,
      logout,
      isAuthenticated: computed(() => store.getters.isAuthenticated)
    }
  }
}
</script>
