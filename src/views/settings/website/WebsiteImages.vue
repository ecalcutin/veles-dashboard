<template>
  <div>
    <div>
      <v-row>
        <v-col>
          <FilesUploader />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import FilesUploader from "./FilesUploader";
export default {
  name: "WebsiteImages",
  components: {
    FilesUploader
  },
  data() {
    return {};
  },
  methods: {}
};
</script>