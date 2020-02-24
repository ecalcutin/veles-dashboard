<template>
  <div>
    <AppBar />
    <SidenavBar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar";
import SidenavBar from "@/components/SidenavBar";
export default {
  name: "AuthorizedLaout",
  components: {
    AppBar,
    SidenavBar
  }
};
</script>