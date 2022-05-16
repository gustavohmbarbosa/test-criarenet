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
            <a href="#editar" class="column is-half" @click.prevent="editUser(props.row.cpf)">
              <BIcon icon="pencil-outline" />
            </a>
            <a href="#excluir" class="column is-half" @click.prevent="editUser(props.row.cpf)">
              <BIcon icon="delete-outline" />
            </a>
          </div>
        </BTableColumn>
      </BTable>
    </div>
  </PageContent>
</template>

<script>
import { mapState } from 'vuex'

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
    }
  }
}
</script>
