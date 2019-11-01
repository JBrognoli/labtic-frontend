<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200"></v-img>
      </v-flex>
      <v-flex xs12>
        <h1>testing vuex modules store</h1>
        <v-layout class="justify-center row align-center">
          <v-btn class="mr-5" @click="handleSubtract">remove</v-btn>
          <pre class="mt-5" style="font-size: 52px">{{ this.$store.state.user.counter }}</pre>
          <v-btn class="ml-5" @click="handleAdd">add</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({}),
  methods: {
    ...mapMutations('user', ['ADD_COUNTER', 'SUBTRACT_COUNTER']),
    handleSubtract() {
      this.SUBTRACT_COUNTER()
    },
    handleAdd() {
      this.ADD_COUNTER()
    },
  },
}
</script>
