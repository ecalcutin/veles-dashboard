<template>
  <v-navigation-drawer :value="sideNav" clipped app>
    <v-list>
      <v-subheader>Меню</v-subheader>
      <v-list-item-group>
        <v-list-item to="/">
          <v-list-item-title>Главная</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SidenavBar",
  computed: {
    sideNav() {
      return this.$store.state.UI.sideNav.opened;
    }
  }
};
</script>