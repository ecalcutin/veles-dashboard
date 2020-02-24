<template>
  <v-app-bar app clipped-left clipped-right>
    <v-app-bar-nav-icon @click="toggleSideNav"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <span class="text-uppercase font-weight-light">Veles ERP</span>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { UI_SIDENAV_TOGGLE } from "@/store/ui/action-types";
export default {
  name: "AppBar",
  methods: {
    toggleSideNav() {
      this.$store.dispatch(UI_SIDENAV_TOGGLE, true);
    }
  }
};
</script>