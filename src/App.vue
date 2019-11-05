<template>
  <v-app>
    <v-app-bar clipped-left app fixed color="darker">
      <v-app-bar-nav-icon />
      <v-toolbar-title class="headline text-uppercase">
        <span>Labtic</span>
      </v-toolbar-title>
      <v-divider class="mx-1" inset vertical />
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Frontend</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn text>
        <span class="mr-2">Sair</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({
    //
  }),
}
</script>
