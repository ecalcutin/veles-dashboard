<template>
  <div>
    <v-card>
      <v-toolbar flat>
        <v-btn text>Добавить</v-btn>
      </v-toolbar>
      <v-data-table
        :server-items-length="totalDocs"
        :items-per-page.sync="itemsPerPage"
        :page.sync="page"
        :items="items"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
import { SETTINGS_PRODUCTS_GET } from "@/store/settings/action-types";
import { SETTINGS_PRODUCTS_ITEMS_PER_PAGE_CHANGE, SETTINGS_PRODUCTS_PAGE_CHANGE } from "@/store/settings/mutation-types";
export default {
  name: "Products",
  computed: {
    items() {
      return this.$store.state.settings.products.items;
    },
    totalDocs() {
      return this.$store.state.settings.products.pagination.totalDocs;
    },
    page: {
      get() {
        return this.$store.state.settings.products.pagination.page;
      },
      set(index) {
        this.$store.commit(SETTINGS_PRODUCTS_PAGE_CHANGE, index);
        this.$store.dispatch(SETTINGS_PRODUCTS_GET);
      }
    },
    itemsPerPage: {
      get() {
        return this.$store.state.settings.products.pagination.itemsPerPage;
      },
      set(cound) {
        console.log("Setting unit");
        this.$store.commit(SETTINGS_PRODUCTS_ITEMS_PER_PAGE_CHANGE, cound);
        this.$store.dispatch(SETTINGS_PRODUCTS_GET);
      }
    }
  },
  mounted() {}
};
</script>