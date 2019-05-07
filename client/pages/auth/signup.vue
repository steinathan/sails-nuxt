<template>
  <div>
    <v-card flat :img="require('@/assets/chain/login.svg')">
      <v-container grid-list-md>
        <v-layout justify-center>
          <!-- :timeout="6000" -->
          <v-snackbar v-model="snackbar.key" bottom left multi-line>
            {{ snackbar.text }}
            <v-btn flat @click="snackbar.key = false" icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-snackbar>
          <v-card width="400" class="text-xs-center white lighten-5 elevation-0" flat>
            <!-- <v-progress-linear class="my-0" v-if="loading" :indeterminate="true"></v-progress-linear> -->
            <v-card-title>
              <h3 class="headline primary-title">Signup</h3>
            </v-card-title>
            <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                  outline
                  v-model="fullName"
                  :rules="fullNameRules"
                  label="Full Name"
                  required
                ></v-text-field>
                <v-text-field
                  outline
                  v-model.trim="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>

                <!-- <v-text-field
                type="password"
                v-model.trim="password"
                :rules="passwordRules"
                :counter="10"
                label="Password"
                outline
                required
                ></v-text-field>-->
                <v-text-field
                  outline
                  v-model.trim="password"
                  :append-icon="showPw ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[passwordRules.required, passwordRules.min, passwordRules.max]"
                  :type="showPw ? 'text' : 'password'"
                  name="input-10-2"
                  label="Enter Password"
                  hint="At least 6 characters"
                  value="654321"
                  class="input-group--focused"
                  @click:append="showPw = !showPw"
                ></v-text-field>

                <v-text-field
                  outline
                  v-model.trim="rePassword"
                  :rules="[passwordRules.confirmed, passwordRules.required, passwordRules.min, passwordRules.max]"
                  :type="showPw ? 'text' : 'password'"
                  name="input-10-2"
                  label="Password Again"
                  hint="At least 6 characters"
                  value="654321"
                  class="input-group--focused"
                  @click:append="showPw = !showPw"
                ></v-text-field>

                <v-btn
                  :loading="$store.state.loading"
                  :disabled="!valid"
                  round
                  small
                  depressed
                  color="primary"
                  @click="doSignup()"
                  block
                >Signup</v-btn>
              </v-form>
              <small>
                Signing up means that you're ok with our
                <router-link
                  style="text-decoration:none;"
                  to="/about/terms-of-service"
                >Terms Of Service.</router-link>
              </small>
              <br>
            </v-card-text>
            <v-card-actions>
              <router-link style="text-decoration:none;" to="/auth/login">Already have an account?</router-link>
            </v-card-actions>
          </v-card>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      snackbar: {
        key: false,
        text: "Sorry, an unexpected error occured, please try later."
      },
      loading: false,
      err: "",
      valid: false,
      password: "",
      rePassword: "",
      // show password
      showPw: false,

      passwordRules: {
        min: v => v.length >= 6 || "Min 6 characters",
        max: v => v.length <= 15 || "password must be less than 15 characters",
        required: v => !!v || "Password is required",
        confirmed: v => v == this.password || "Password's don't match"
      },
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      fullName: "",
      fullNameRules: [v => !!v || "fullname is required"],
      socketConnected: false
    };
  },
  mounted() {
    this.$store.state.loading = false;
  },
  methods: {
    isReferalLink() {
      var ref = this.$route.query.referalLink;
      if (typeof ref == "string" && ref) {
        return "?referalLink=" + ref;
      } else {
        return "?nil";
      }
    },

    doSignup() {
      this.$axios
        .post("/entrance/signup/" + this.isReferalLink(), {
          emailAddress: this.email,
          password: this.rePassword || this.password,
          fullName: this.fullName
        })
        .then(({ data }) => {
          this.$store.commit("setUser", data);
          this.$router.push("/auth/billing/?keepTrackManifest=re&un=billing");
        })
        .catch(error => {
          this.snackbar.key = true;
          switch (error.response.status) {
            case 401:
              this.snackbar.text =
                "The provided email or password combination does not match any user in our database, please check and try again.";
              break;
            case 409:
              break;
              this.snackbar.text =
                "Some provided details is currently in use by another user";
            default:
              this.snackbar.text =
                "Sorry, an error was thrown without an actual value from the server - this should never happen";
              break;
          }
          // if (error.response.status == 401) {
          // } else if (error.response.status == 409) {
          //   this.snackbar.text =
          //     "Some provided details is currently in use by another user";
          // }
        });
    }
  },
  head() {
    return {
      title: { inner: `Signup - Meanometer` }
    };
  }
};
</script>
