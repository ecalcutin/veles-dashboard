<template>
  <div>
    <AppBar />
    <SidenavBar />
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
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