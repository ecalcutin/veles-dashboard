<template>
  <div>
    <v-form ref="form">
      <v-row align="center">
        <v-col class="flex-grow-1">
          <v-file-input
            chips
            accept="image/*"
            show-size
            counter
            v-model="files"
            multiple
            label="Выберите файлы"
          ></v-file-input>
        </v-col>
        <v-col class="flex-grow-0">
          <v-btn :disabled="files.length === 0" @click="upload">Загрузить</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-progress-linear v-if="uploading" v-model="progress" />
  </div>
</template>

<script>
import api from "@/plugins/api";
export default {
  name: "WebsiteFilesUploader",
  data() {
    return {
      files: [],
      uploading: false,
      progress: 0
    };
  },
  methods: {
    upload() {
      this.uploading = true;
      const formData = new FormData();
      for (let i = 0; i < this.files.length; i++) {
        formData.append(`images`, this.files[i]);
      }
      api
        .post("/website/products", formData, {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: progressEvent => {
            this.progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
          }
        })
        .then(() => {
          setTimeout(() => {
            this.files = [];
            this.uploading = false;
          }, 1000);
        });
    }
  }
};
</script>