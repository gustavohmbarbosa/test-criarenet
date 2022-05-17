<template>
  <PageContent v-if="user" :title="title" icon="pencil-outline">
    <form id="edit-user-form" @keypress.enter="edit(user)">
      <BField label="Nome">
        <BInput v-model="user.name" required />
      </BField>
      <BField label="E-mail">
        <BInput v-model="user.mail" required type="email" />
      </BField>
      <BField label="CPF">
        <BInput v-model="user.cpf" disabled />
      </BField>
      <BField label="Telefone (opcional)">
        <BInput v-model="user.phone" />
      </BField>

      <div class="buttons">
        <BButton form="edit-user-form" type="is-primary" :loading="loading" @click="edit(user)">
          Salvar alterações
        </BButton>
        <BButton tag="router-link" to="/">
          Voltar
        </BButton>
      </div>
    </form>
  </PageContent>

  <PageContent v-else :title="title" icon="alert-circle-outline">
    <BButton tag="router-link" to="/">
      Voltar
    </BButton>
  </PageContent>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { SnackbarProgrammatic as Snackbar } from 'buefy'
import { EDIT_USER } from '@/store/Users/actions-types'
import { GET_USER_BY_DOCUMENT } from '@/store/Users/types'

export default {
  name: 'EditUser',
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters('Users', [GET_USER_BY_DOCUMENT]),
    user () {
      const user = this[GET_USER_BY_DOCUMENT](this.$route.params.cpf)

      if (!user) {
        return null
      }

      return { ...user }
    },
    title () {
      if (this.user) {
        const firstName = this.user.name.split(' ')[0]
        return `Editar dados de ${firstName}`
      }

      return 'Não existe usuário com o cpf informado'
    }
  },
  methods: {
    ...mapActions('Users', { saveUserData: EDIT_USER }),
    async edit (user) {
      this.loading = true

      if (this.validateUserData(user)) {
        await this.saveUserData(user)
        Snackbar.open(`Os dado de ${user.name} foram salvos.`)
      }

      this.loading = false
    },
    validateUserData ({ name, mail }) {
      if (!name || !mail) {
        Snackbar.open({
          message: 'Preencha os dados obrigatórios.',
          type: 'is-warning'
        })

        return false
      }

      return true
    }
  }
}
</script>

<style>
  @media (min-width: 960px) {
    form input {
      max-width: 50% !important;
    }
  }
</style>
