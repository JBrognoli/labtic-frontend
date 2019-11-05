<template>
  <h1>Styleguide</h1>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Styleguide',
  components: {},
  data: () => ({}),
  computed: {
    ...mapState('user', ['']),
  },
  methods: {
    ...mapMutations('user', ['']),
  },
}
</script>

<style scoped></style>
