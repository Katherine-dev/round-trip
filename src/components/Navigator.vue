<template>
  <v-container
    fluid
    pt-0
    class="search-bar__wrapper d-flex flex-column"
  >
    <v-sheet
      color="#eaeaea"
      class="navigation-bar px-7 py-6"
    >
      <v-text-field
        v-model="text"
        hide-details
        rounded
        dense
        solo
      />
    </v-sheet>

    <div class="mt-3 flex-grow-1 search-bar__content">
      <div v-if="hasItems">
        <span
          class="body-2"
        >
          Здесь результаты
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
  </v-container>
</template>

<style scoped lang="less">
.navigation-bar {
  width: 100%;
}

.search-bar {
  &__wrapper {
    height:100%;
  }

  &__status {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<script src="./Navigator" lang="ts" />
