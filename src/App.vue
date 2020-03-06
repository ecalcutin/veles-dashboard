<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  mounted() {
    this.$store.dispatch("__APP_INIT__");
  }
};
</script>
