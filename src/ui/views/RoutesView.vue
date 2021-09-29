<template>
  <v-container
    fluid
    class="routes-container"
  >
    <v-row
      no-gutters
      class="routes-container__columns"
    >
      <v-col
        cols="12"
        md="4"
        sm="6"
        class="overflow-hidden"
      >
        <!-- TODO: NavigatorView -->
      </v-col>
      <v-col
        cols="0"
        md="8"
        sm="6"
        class="overflow-hidden hidden-xs-only"
      >
        <map-component />
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
