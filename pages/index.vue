<template>
  <PageContent title="Listagem de Usuários" :description="description" icon="account-group">
    <div class="container">
      <BButton tag="router-link" to="/novo-usuario" class="block is-primary" icon-right="plus">
        Usuário
      </BButton>
      <BTable
        :data="data"
        :focusable="true"
      >
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
            <a href="#editar" class="column is-half" @click.prevent="alert(props.row.cpf)">
              <BIcon icon="pencil-outline" />
            </a>
            <a href="#excluir" class="column is-half" @click.prevent="alert(props.row.cpf)">
              <BIcon icon="delete-outline" />
            </a>
          </div>
        </BTableColumn>
      </BTable>
    </div>
  </PageContent>
</template>

<script>

export default {
  name: 'IndexPage',
  data () {
    return {
      data: [
        { name: 'Jesse', mail: 'Jesse@test.com.br', phone: '11987654321', cpf: '11244545784' },
        { name: 'John', mail: 'John@test.com.br', phone: '11987654321', cpf: '05578411244' },
        { name: 'Tina', mail: 'Tina@test.com.br', phone: '11987654321', cpf: '54112445784' },
        { name: 'Clarence', mail: 'Clarence@test.com.br', phone: '11987654321', cpf: '04112445784' },
        { name: 'Anne', mail: 'Anne@test.com.br', phone: '11987654321', cpf: '78404112445' }
      ],
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
      return `Total de ${this.data.length} usuários`
    }
  },
  methods: {
    alert (text) {
      alert(text)
    }
  }
}
</script>
