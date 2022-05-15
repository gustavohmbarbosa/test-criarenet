<template>
  <PageContent title="Novo Usuário" icon="plus" description="Adicione um novo usuário ao sistema">
    <form>
      <BField label="Nome" required>
        <BInput v-model="model.name" />
      </BField>
      <BField label="E-mail" required>
        <BInput v-model="model.email" type="email" />
      </BField>
      <BField label="CPF" required>
        <BInput v-model="model.cpf" />
      </BField>
      <BField label="Telefone">
        <BInput v-model="model.phone" />
      </BField>

      <div class="buttons">
        <BButton type="is-primary">
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
export default {
  name: 'InspirePage',
  data () {
    return {
      model: {}
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
