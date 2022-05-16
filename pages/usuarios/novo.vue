<template>
  <PageContent title="Novo Usuário" icon="plus" description="Adicione um novo usuário ao sistema">
    <form id="add-user-form" @keypress.enter="add(user)">
      <BField label="Nome">
        <BInput v-model="user.name" required />
      </BField>
      <BField label="E-mail">
        <BInput v-model="user.mail" required type="email" />
      </BField>
      <BField label="CPF">
        <BInput v-model="user.cpf" required minlength="11" maxlength="11" />
      </BField>
      <BField label="Telefone (opcional)">
        <BInput v-model="user.phone" />
      </BField>

      <div class="buttons">
        <BButton form="add-user-form" type="is-primary" :loading="loading" @click="add(user)">
          Adicionar usuário
        </BButton>
        <BButton tag="router-link" to="/">
          Voltar
        </BButton>
      </div>
    </form>
  </PageContent>
</template>

<script>
import { mapActions } from 'vuex'
import { SnackbarProgrammatic as Snackbar } from 'buefy'
import { ADD_USER } from '@/store/Users/actions-types'

export default {
  name: 'AddUser',
  data () {
    return {
      user: {},
      loading: false
    }
  },
  methods: {
    ...mapActions('Users', { saveUser: ADD_USER }),
    async add (user) {
      this.loading = true

      if (this.validateUserData(user)) {
        await this.saveUser(user)
        Snackbar.open(`${user.name} foi adicionado ao sistema.`)
        this.user = {}
      }

      this.loading = false
    },
    validateUserData ({ name, cpf, mail }) {
      if (!name || !cpf || !mail) {
        Snackbar.open({
          message: 'Preencha os dados obrigatórios.',
          type: 'is-warning'
        })

        return false
      }

      if (cpf.length !== 11) {
        Snackbar.open({
          message: 'O cpf deve conter 11 dígitos.',
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
