<template>
  <PageContent title="Listagem de Usuários" :description="description" icon="account-group">
    <div class="container">
      <BButton tag="router-link" :to="{ name: 'usuarios-novo'}" class="block is-primary" icon-right="plus">
        Usuário
      </BButton>
      <BTable :data="users" :focusable="true">
        <BTableColumn v-slot="props" field="name" label="Nome" searchable>
          {{ props.row.name }}
        </BTableColumn>
        <BTableColumn v-slot="props" field="cpf" label="CPF" searchable>
          {{ props.row.cpf }}
        </BTableColumn>
        <BTableColumn v-slot="props" field="mail" label="E-mail" searchable>
          {{ props.row.mail }}
        </BTableColumn>
        <BTableColumn v-slot="props" field="phone" label="Telefone" searchable>
          {{ props.row.phone }}
        </BTableColumn>
        <BTableColumn v-slot="props" field="actions" label="Ações">
          <div class="columns is-mobile">
            <NuxtLink :to="{ name: 'usuarios-cpf', params: { cpf: props.row.cpf }}" class="column is-half">
              <BIcon icon="pencil-outline" />
            </NuxtLink>
            <a href="#excluir" class="column is-half" @click.prevent="confirmDeleteUser(props.row)">
              <BIcon icon="delete-outline" />
            </a>
          </div>
        </BTableColumn>
      </BTable>
    </div>
  </PageContent>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { DELETE_USER } from '@/store/Users/actions-types'

export default {
  name: 'IndexPage',
  data () {
    return {
      columns: [
        {
          field: 'name',
          label: 'Nome',
          searchable: true
        },
        {
          field: 'cpf',
          label: 'CPF',
          searchable: true
        },
        {
          field: 'mail',
          label: 'E-mail',
          searchable: true
        },
        {
          field: 'phone',
          label: 'Telefone',
          searchable: true
        }
      ]
    }
  },
  computed: {
    description () {
      return `Total de ${this.users.length} usuários`
    },
    ...mapState('Users', ['users'])
  },
  methods: {
    editUser (text) {
      alert(text)
    },
    ...mapActions('Users', { DELETE_USER }),
    confirmDeleteUser ({ name, cpf }) {
      this.$buefy.snackbar.open({
        indefinite: true,
        type: 'is-danger',
        position: 'is-top',
        message: `Excluir <b>${name}</b> do sistema?`,
        cancelText: 'Cancelar',
        actionText: 'Excluir',
        onAction: () => {
          this[DELETE_USER](cpf)
          this.$buefy.toast.open({
            message: `${name} foi excluído(a) do sistema.`
          })
        }
      })
    }
  }
}
</script>
