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
import { PRODUCTS_GET } from "@/store/settings/action-types";
import {
  PAGE_LIMIT_SET,
  PAGE_INDEX_SET
} from "@/store/settings/mutation-types";
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
        this.$store.commit(PAGE_INDEX_SET, index);
        this.$store.dispatch(PRODUCTS_GET);
      }
    },
    itemsPerPage: {
      get() {
        return this.$store.state.settings.products.pagination.itemsPerPage;
      },
      set(limit) {
        this.$store.commit(PAGE_LIMIT_SET, limit);
        this.$store.dispatch(PRODUCTS_GET);
      }
    }
  },
  mounted() {
    this.$store.dispatch(PRODUCTS_GET);
  }
};
</script>