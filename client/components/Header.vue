<template>
  <header>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-btn round to="/?" flat>Home</v-btn>
      <v-spacer></v-spacer>
      <v-btn round to="/faq" flat>Faq</v-btn>
      <v-btn round to="/auth/?" flat>Auth</v-btn>
    </v-toolbar>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        items: [],
        search: null,
        select: null,
        // Products: [
        //   "clothes",
        //   "shoes",
        //   "phones",
        //   "pc",
        //   "Toys",
        //   "hard Disk",
        //   "Keyoard"
        // ]
      };
    },
    watch: {
      search(val) {
        val && val !== this.select && this.querySelections(val);
      }
    },
    methods: {
      querySelections(v) {
        this.loading = true;
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.Products.filter(e => {
            return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
          });
          this.loading = false;
        }, 500);
      }
    },
    props: [
      /** */
      "color"
    ]
  };

</script>
