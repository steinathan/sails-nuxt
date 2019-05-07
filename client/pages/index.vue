<template>
  <div class="home">
    <v-card flat class="pa-0">
      <v-img aspect-ratio="1.7777" :src="require('@/assets/chain/path.svg')">
        <v-card-title>
          <h3 class="display-2 white--text">Automate Example Header</h3>
        </v-card-title>
        <v-card-text class="white--text">
          <v-flex
            xs6
          >The v-overlay component is used to provide emphasis on a particular element or parts of it. It signals to the user of a state change within the application and can be used for creating loaders, dialogs and more.</v-flex>
          <br>
          <v-img :src="require('@/assets/chain/link.svg')"/>
        </v-card-text>
      </v-img>
    </v-card>
    <v-container grid-list-mdclea>
      <h3 class="text-xs-center display-2 font-weight-light">Automate your work flow</h3>
      <p class="text-xs-center ma-4 headline grey--text">
        From a follower on instagram to a mail from gmail to your dropbox account, we have a solution for you.
        <br>
        <v-btn round class="ma-5" color="primary">Get Started For Free</v-btn>
      </p>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

// @ is an alias to /src
export default {
  name: "home",
  components: {},
  computed: {
    ...mapState(["user"])
  },
  mounted() {},
  data() {
    return {
      overlay: false
    };
  }
};
</script>
