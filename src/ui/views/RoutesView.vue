<template>
  <v-container
    fluid
    class="routes-container pa-0"
  >
    <v-row
      no-gutters
      class="routes-container__columns"
    >
      <v-col class="overflow-hidden">
        <Navigator />
      </v-col>
      <v-col class="overflow-hidden">
        <!-- TODO: MapView -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./RoutesView" lang="ts" />

<style lang="less" scoped>
.routes-container {
  height: 100%;
  overflow: hidden;

  &__columns {
    height: 100%;
    overflow: hidden;
  }
}
</style>
