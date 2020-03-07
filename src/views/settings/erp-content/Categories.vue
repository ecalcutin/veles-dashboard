<template>
  <div>
    <v-card>
      <v-toolbar flat>
        <v-btn @click.stop="openCrudDialog('create', defaultItem)" text>Создать</v-btn>
        <CrudDialog @onClose="onClose" :mode="crud.mode" :opened="crud.opened">
          <template>
            <v-form>
              <v-text-field label="Название" v-model="defaultItem.title" />
            </v-form>
          </template>
        </CrudDialog>
      </v-toolbar>
      <v-data-table :items="items" :headers="headers">
        <template v-slot:item="row">
          <tr>
            <td>{{row.item._id}}</td>
            <td>{{row.item.title}}</td>
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
import CrudDialog from "../CrudDialog";
import {
  CATEGORIES_GET,
  CATEGORY_REMOVE,
  CATEGORY_CREATE
} from "@/store/settings/action-types";
export default {
  name: "Categories",
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
        title: "",
        image: null
      },
      headers: [
        { text: "UUID", value: "_id", sortable: false },
        { text: "Артикул", value: "title", sortable: false },
        { text: "Действия", sortable: false }
      ]
    };
  },
  computed: {
    items() {
      return this.$store.state.settings.categories;
    }
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
          this.$store.dispatch(CATEGORY_CREATE, this.defaultItem);
          break;
        case "update":
          console.log("Updating: ", this.defaultItem);
          break;
        case "remove":
          this.$store.dispatch(CATEGORY_REMOVE, this.defaultItem._id);
          break;
        case "cancel":
          console.log("Cancelling");
          break;
      }
      this.crud.opened = false;
      this.defaultItem = {
        title: ""
      };
    }
  }
};
</script>