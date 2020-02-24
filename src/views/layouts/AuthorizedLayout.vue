<template>
  <div>
    <AppBar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar";
export default {
  name: "AuthorizedLaout",
  components: {
    AppBar
  }
};
</script>