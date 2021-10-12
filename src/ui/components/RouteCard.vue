<template>
  <v-card
    tile
    flat
  >
    <div
      class="pa-4 grey lighten-4"
    >
      <v-card-title class="text-h5 font-weight-bold mb-2">
        {{ routeCostDemo }}
      </v-card-title>
      <v-card-subtitle>I'm a subtitle</v-card-subtitle>
      <div class="card__button_container">
        <v-btn
          v-if="!isExpanded"
          @click="showRoute"
        >
          Отобразить маршрут
        </v-btn>
        <v-btn
          v-else
          @click="hideRoute"
        >
          Скрыть маршрут
        </v-btn>
      </div>
    </div>
    <v-list v-if="isExpanded">
      <v-list-item-group>
        <v-list-item
          v-for="(item, i) in vehiclesDemo"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
            <v-list-item-subtitle v-text="item.text" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<style scoped lang="less">
.card {
  &__button_container {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
<script src="./RouteCard" lang="ts" />
