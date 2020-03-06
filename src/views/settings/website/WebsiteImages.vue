<template>
  <div>
    <div>
      <v-row>
        <v-col>
          <FilesUploader />
          <v-data-iterator
            :server-items-length="totalDocs"
            :items-per-page.sync="itemsPerPage"
            :page.sync="page"
            :items="items"
          >
            <template v-slot:default="props">
              <v-row>
                <v-col v-for="item in props.items" :key="item._id" cols="12" sm="6" md="4">
                  <v-card>
                    <v-img height="400" :src="`${uploads}/${item.imageURI}`"></v-img>
                    <v-card-title>{{item._id}}</v-card-title>
                    <v-card-text>
                      <v-row></v-row>
                      <div class="my-4 subtitle-1">{{item._id}}</div>
                      <div class="my-4 subtitle-1">{{item.imageURI}}</div>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        text
                        @click="togglePublished(item)"
                      >{{`${item.isPublished ? 'Не показывать' :'Опубликовать'}`}}</v-btn>
                      <v-btn text>Удалить</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </template>
          </v-data-iterator>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import {
  IMAGES_GET,
  IMAGE_TOGGLE_PUBLISH
} from "@/store/settings/website/action-types";
import {
  PAGE_LIMIT_SET,
  PAGE_INDEX_SET
} from "@/store/settings/website/mutation-types";
import FilesUploader from "./FilesUploader";
export default {
  name: "WebsiteImages",
  components: {
    FilesUploader
  },
  data() {
    return {
      tab: null
    };
  },
  methods: {
    togglePublished(item) {
      this.$store.dispatch(IMAGE_TOGGLE_PUBLISH, {
        id: item._id,
        publishOption: !item.isPublished
      });
    }
  },
  mounted() {
    this.$store.dispatch(IMAGES_GET);
  },
  computed: {
    items() {
      return this.$store.state.settings.website.images.items;
    },
    totalDocs() {
      return this.$store.state.settings.website.images.pagination.totalDocs;
    },
    page: {
      get() {
        return this.$store.state.settings.website.images.pagination.page;
      },
      set(index) {
        this.$store.commit(PAGE_INDEX_SET, index);
        this.$store.dispatch(IMAGES_GET);
      }
    },
    itemsPerPage: {
      get() {
        return this.$store.state.settings.website.images.pagination
          .itemsPerPage;
      },
      set(limit) {
        this.$store.commit(PAGE_LIMIT_SET, limit);
        this.$store.dispatch(IMAGES_GET);
      }
    },
    uploads() {
      return process.env.VUE_APP_UPLOADS;
    }
  }
};
</script>