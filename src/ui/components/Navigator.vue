<template>
  <v-container
    fluid
    class="search-bar__wrapper d-flex flex-column pa-0"
  >
    <v-sheet
      class="search-bar__navigation px-5 py-9 grey lighten-4"
    >
      <v-text-field
        :value="selectedRoute"
        readonly
        hide-details
        :loading="isLoading"
        rounded
        dense
        solo
        :placeholder="$vuetify.lang.t('$vuetify.navigator.placeholder.make_route')"
        class="field-centered-text"
        @click="showDialog()"
      />
    </v-sheet>

    <div class="flex-grow-1 search-bar__content">
      <div v-if="hasItems">
        <span
          class="body-2"
        >
          <template v-for="(item, index) in items">
            <div
              :key="index"
              class="search-bar__route-card"
            >
              <slot
                name="card"
                :cost="item.cost"
                :time="item.time"
                :vehicles="item.vehicles"
              />
            </div>
          </template>
        </span>
      </div>
      <div
        v-else
        class="search-bar__status"
      >
        <v-progress-circular
          v-if="isLoading"
          indeterminate
          color="primary"
        />

        <span
          v-else
          class="body-2"
        >
          Список пуст
        </span>
      </div>
    </div>
    <RouteDialog
      v-model="routeDialogState"
      @route:submit="onRouteSubmit"
      @route:cancel="closeDialog"
    />
  </v-container>
</template>

<style scoped lang="less">
.search-bar {
  &__wrapper {
    height:100%;
  }

  &__navigation {
    width: 100%;
  }

  &__status {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__route-card {
    border-bottom: 1px solid var(--v-navigatorCardBorderBottom-base);
  }
}
</style>

<style lang="less">
.field-centered-text {
  input {
    text-align: center;
  }
}
</style>

<script src="./Navigator" lang="ts" />
