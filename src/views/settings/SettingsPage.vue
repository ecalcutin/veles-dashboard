<template>
  <div>
    <v-row>
      <v-col>
        <v-card to="/dashboard/settings/erp-content/categories" min-height="150" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">OVERLINE</div>
              <v-list-item-title class="headline mb-1">Категории</v-list-item-title>
              <v-list-item-subtitle>Настроить категории для группировки в категорию</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col>
        <v-card to="/dashboard/settings/erp-content/labels" min-height="150" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">OVERLINE</div>
              <v-list-item-title class="headline mb-1">Метки и тэги</v-list-item-title>
              <v-list-item-subtitle>Настроить метки и теги для продукции</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col>
        <v-card to="/dashboard/settings/erp-content/products" min-height="150" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">OVERLINE</div>
              <v-list-item-title class="headline mb-1">Продукция</v-list-item-title>
              <v-list-item-subtitle>Настройте продукцию, изображения и зависимости</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col>
        <v-card to="/dashboard/settings/website/categories" min-height="150" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Вебсайт</div>
              <v-list-item-title class="headline mb-1">Категории</v-list-item-title>
              <v-list-item-subtitle>Настроить категории для группировки в категорию</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col>
        <v-card to="/dashboard/settings/website/images" min-height="150" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Вебсайт</div>
              <v-list-item-title class="headline mb-1">Изображения</v-list-item-title>
              <v-list-item-subtitle>Добавьте изображения на сайт с описанием</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "SettingsPage"
};
</script>