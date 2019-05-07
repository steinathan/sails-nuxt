<template>
  <div class="div">
    <v-progress-linear
      v-if="loading"
      color="primary darken-3"
      class="ma-0 fixed"
      :indeterminate="true"
    ></v-progress-linear>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title @click="$router.push('/')" class="headline text-uppercase">
        <span>Chain</span>
        <span class="font-weight-light">Mall</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>
        <span class="mr-2">Apps</span>
      </v-btn>
      <v-btn
        disabled
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Pricing</span>
      </v-btn>
      <v-btn flat to="/auth/login">
        <span class="mr-2">Account</span>
      </v-btn>
      <v-btn flat>
        <span class="mr-2">Latest Apps</span>
      </v-btn>
      <v-btn flat>
        <span class="mr-2">How It Works</span>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState(["loading", "user"])
  },
  mounted() {},
  created() {},
  methods: {}
};
</script>
