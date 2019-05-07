<template>
  <div>
    <v-card height="600" flat :img="require('@/assets/chain/login.svg')">
      <!-- <v-sheet :img="require('@/assets/chain/bkg.svg')">..</v-sheet> -->
      <v-layout justify-center>
        <v-snackbar color="error" v-model="snackbar.key" bottom left multi-line :timeout="6000">
          {{ snackbar.text }}
          <v-btn flat @click="snackbar.key = false" icon class="secondary">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-snackbar>
        <v-card width="450" class="elevation-0 text-xs-center white lighten-5" flat>
          <!-- <v-progress-linear class="my-0" v-if="loading" :indeterminate="true"></v-progress-linear> -->
          {{ err }}
          <div class="text-muted mb-3 mt-5">
            <h3 class="display-2 primary-title">Sign in</h3>with your chainmall Account
          </div>
          <v-card-text>
            <v-form v-model="valid">
              <v-text-field
                outline
                v-model.trim="email"
                :rules="emailRules"
                label="E-mail"
                required
                focus
              ></v-text-field>
              <v-text-field
                outline
                type="password"
                v-model.trim="password"
                :rules="passwordRules"
                :counter="10"
                label="Password"
                required
              ></v-text-field>
              <v-btn
                depressed
                round
                :loading="$store.state.loading"
                :disabled="!valid"
                color="primary"
                @click="doLogin()"
                block
              >Login</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn to="/auth/signup" color="secondary" flat>Create account</v-btn>
            <v-btn color="secondary" flat>Forgot Password</v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-card>
  </div>
</template>
<script>
export default {
  computed: {},
  data() {
    return {
      snackbar: {
        key: false,
        text: "Unexpected Error Occured"
      },
      loading: false,
      err: "",
      valid: false,
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length <= 10 || "password must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  mounted() {
    console.log(this.loading);
  },
  methods: {
    doLogin() {
      if (this.valid) {
        this.loading = true;
        this.$axios
          .post("/entrance/login/", {
            emailAddress: this.email,
            password: this.password
          })
          .then(({ data }) => {
            this.$store.commit("setUser", data);
          })
          .catch(error => {
            this.loading = false;
            this.snackbar.key = true;
            if (error.response.status == 406) {
              this.snackbar.text =
                "The provided email or password combination does not match any user in our database, please check and try again.";
            }
          });
      }
    }
  },
  head() {
    return {
      title: { inner: `Login ` }
    };
  }
};
</script>


