<template>
  <div>
    <div>
      <v-row>
        <v-col>
          <CrudDialog @onClose="onClose" :mode="crud.mode" :opened="crud.opened">
            <template>
              <v-form>
                <v-text-field label="Название" v-model="defaultItem.title" />
                <v-select
                  :items="categories"
                  item-text="title"
                  item-value="code"
                  label="Категория"
                  @change="categoryChange"
                  v-model="defaultItem.category"
                />
                <v-select
                  v-model="defaultItem.labels"
                  :items="labels"
                  item-text="title"
                  item-value="code"
                  label="Метки"
                  multiple
                ></v-select>
                <v-radio-group v-model="defaultItem.isPublished">
                  <v-radio label="Показывать" :value="true"></v-radio>
                  <v-radio label="Не показывать" :value="false"></v-radio>
                </v-radio-group>
              </v-form>
            </template>
          </CrudDialog>
          <FilesUploader />
          <v-data-iterator
            :server-items-length="totalDocs"
            :items-per-page.sync="itemsPerPage"
            :page.sync="page"
            :items="items"
            :footer-props="{'items-per-page-options': [9, 18, -1], 'items-per-page-all-text': 'Все'}"
          >
            <template v-slot:default="props">
              <v-row>
                <v-col v-for="item in props.items" :key="item._id" cols="12" sm="6" md="4">
                  <v-card>
                    <v-img height="200" :src="`${uploads}/${item.imageURI}`"></v-img>
                    <v-card-title>{{item.title || item._id}}</v-card-title>
                    <v-card-text></v-card-text>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn @click.stop="openCrudDialog('update', item)" text>Редактировать</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </template>
            <template v-if="totalPages > 1" v-slot:footer>
              <v-pagination v-model="page" :length="totalPages"></v-pagination>
            </template>
          </v-data-iterator>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import CrudDialog from "../CrudDialog";
import {
  PRODUCTS_GET,
  PRODUCT_REMOVE,
  PRODUCT_DATA_UPDATE
} from "@/store/settings/website/action-types";
import {
  PAGE_LIMIT_SET,
  PAGE_INDEX_SET
} from "@/store/settings/website/mutation-types";
import FilesUploader from "./FilesUploader";
export default {
  name: "WebsiteProducts",
  components: {
    FilesUploader,
    CrudDialog
  },
  data() {
    return {
      tab: null,
      crud: {
        opened: false,
        mode: "create"
      },
      defaultItem: {
        title: "",
        category: {
          title: "",
          code: ""
        },
        isPublished: false,
        labels: []
      }
    };
  },
  methods: {
    categoryChange() {
      this.defaultItem.labels = [];
    },
    openCrudDialog(mode, item) {
      this.defaultItem = Object.assign({}, item);
      this.crud.mode = mode;
      this.crud.opened = true;
    },
    onClose(mode) {
      switch (mode) {
        case "update":
          let $update = Object.assign({}, this.defaultItem);
          this.$store.dispatch(PRODUCT_DATA_UPDATE, $update);
          break;
        case "remove":
          this.$store.dispatch(PRODUCT_REMOVE, this.defaultItem._id);
          break;
        case "cancel":
          break;
      }
      this.crud.opened = false;
      this.defaultItem = {
        title: "",
        category: {
          title: "",
          code: ""
        },
        isPublished: false,
        labels: []
      };
    }
  },
  mounted() {
    this.$store.dispatch(PRODUCTS_GET);
  },
  computed: {
    categories() {
      return this.$store.state.settings.website.categories;
    },
    labels() {
      const $code = this.defaultItem.category;
      if ($code) {
        const category = this.categories.find(c => c.code === $code);
        return category?.labels;
      }
      return [];
    },
    items() {
      return this.$store.state.settings.website.products.items;
    },
    totalDocs() {
      return this.$store.state.settings.website.products.pagination.totalDocs;
    },
    totalPages() {
      return this.$store.state.settings.website.products.pagination.totalPages;
    },
    page: {
      get() {
        return this.$store.state.settings.website.products.pagination.page;
      },
      set(index) {
        this.$store.commit(PAGE_INDEX_SET, index);
        this.$store.dispatch(PRODUCTS_GET);
      }
    },
    itemsPerPage: {
      get() {
        return this.$store.state.settings.website.products.pagination
          .itemsPerPage;
      },
      set(limit) {
        this.$store.commit(PAGE_LIMIT_SET, limit);
        this.$store.dispatch(PRODUCTS_GET);
      }
    },
    uploads() {
      return process.env.VUE_APP_UPLOADS;
    },
    isDevelopment() {
      return process.env.NODE_ENV === "development";
    }
  }
};
</script>