<template>
  <div>
    <v-card>
      <v-toolbar flat>
        <v-btn text>Добавить</v-btn>
      </v-toolbar>
      <v-data-table :items="items"></v-data-table>
    </v-card>
  </div>
</template>

<script>
import { SETTINGS_PRODUCTS_GET } from "@/store/settings/action-types";
export default {
  name: "Products",
  computed: {
    items() {
      return [];
    }
  },
  mounted() {
    this.$store.dispatch(SETTINGS_PRODUCTS_GET);
  }
};
</script>