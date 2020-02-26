<template>
  <div>
    <v-dialog @click:outside="close('cancel')" :value="opened" max-width="500px">
      <v-card>
        <v-card-title>
          <span v-if="mode === 'create'">Создать запись</span>
          <span v-if="mode === 'update'">Редактировать</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <slot></slot>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="red" v-if="mode==='update'" @click="close('remove')" text>Удалить</v-btn>
          <v-spacer />
          <v-btn @click="close('cancel')" text>Отмена</v-btn>
          <v-btn color="green" v-if="mode === 'create'" @click.stop="close('create')" text>Создать</v-btn>
          <v-btn color="green" v-if="mode==='update'" @click="close('update')" text>Обновить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "CrudDialog",
  props: {
    mode: {
      type: String,
      required: true
    },
    opened: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    close(mode) {
      this.$emit("onClose", mode);
    }
  }
};
</script>