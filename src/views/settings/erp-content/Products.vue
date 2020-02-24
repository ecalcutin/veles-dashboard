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
export default {
  name: "Products",
  computed: {
    items() {
      return [];
    }
  }
};
</script>