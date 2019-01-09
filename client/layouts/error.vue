<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>
          <h3 class="text-xs-center primary-title headline">
            {{ error.statusCode }}
          </h3>
        </v-card-title>
        <v-card-text>
          {{ error.message }}
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
  export default {
    props: ['error']
  }

</script>

<style scoped>
</style>
