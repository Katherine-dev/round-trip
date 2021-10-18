<template>
  <v-card
    tile
    flat
  >
    <div
      class="pa-4"
    >
      <v-card-title class="text-h5 font-weight-bold mb-2">
        {{ time }}
      </v-card-title>
      <v-card-subtitle>vehicle icons</v-card-subtitle>
      <v-card-actions>
        <v-spacer />
        <v-btn
          text
          color="primary"
          @click="showRoute"
        >
          Отобразить маршрут
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script src="./RouteCard" lang="ts" />
