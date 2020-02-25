<template>
  <div>
    <v-card>
      <v-toolbar flat>
        <v-btn @click.stop="openCrudDialog('create', defaultItem)" text>Создать</v-btn>
        <CrudDialog @onClose="onClose" :mode="crud.mode" :opened="crud.opened">
          <template>
            <v-form>
              <v-text-field label="UUID" v-model="defaultItem._id" />
            </v-form>
          </template>
        </CrudDialog>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :server-items-length="totalDocs"
        :items-per-page.sync="itemsPerPage"
        :page.sync="page"
        :items="items"
      >
        <template v-slot:item="row">
          <tr>
            <td>{{row.item._id}}</td>
            <td>{{row.item.title}}</td>
            <td>{{row.item.imageURI}}</td>
            <td>
              <v-btn @click.stop="openCrudDialog('update', row.item)" icon small>
                <v-icon dark>mdi-pencil-outline</v-icon>
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import CrudDialog from "./CrudDialog";
import { PRODUCTS_GET, PRODUCT_REMOVE } from "@/store/settings/action-types";
import {
  PAGE_LIMIT_SET,
  PAGE_INDEX_SET
} from "@/store/settings/mutation-types";
export default {
  name: "Products",
  components: {
    CrudDialog
  },
  data() {
    return {
      crud: {
        opened: false,
        mode: "create"
      },
      defaultItem: {
        _id: "",
        title: "",
        imageURI: ""
      },
      headers: [
        { text: "UUID", value: "_id", sortable: false },
        { text: "Артикул", value: "title", sortable: false },
        { text: "Image URI", value: "imageURI", sortable: false },
        { text: "Действия", sortable: false }
      ]
    };
  },
  mounted() {
    this.$store.dispatch(PRODUCTS_GET);
  },
  methods: {
    openCrudDialog(mode, item) {
      this.defaultItem = Object.assign({}, item);
      this.crud.mode = mode;
      this.crud.opened = true;
    },
    onClose(mode) {
      switch (mode) {
        case "create":
          console.log("Creating: ", this.defaultItem);
          break;
        case "update":
          console.log("Updating: ", this.defaultItem);
          break;
        case "remove":
          this.$store.dispatch(PRODUCT_REMOVE, this.defaultItem._id);
          break;
        case "cancel":
          console.log("Cancelling");
          break;
      }
      this.crud.opened = false;
      this.defaultItem = {
        _id: "",
        title: "",
        imageURI: ""
      };
    }
  },
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
  }
};
</script>