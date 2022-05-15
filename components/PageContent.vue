<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      {{ title }} <BIcon v-if="icon.length" :icon="icon" size="is-large" />
    </h2>
    <h3 v-if="description.length" class="subtitle is-6 has-text-grey">
      {{ description }}
    </h3>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'PageContent',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: '',
      required: false
    },
    icon: {
      type: String,
      default: '',
      required: false
    }

  }
}
</script>
