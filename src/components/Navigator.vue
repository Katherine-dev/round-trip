<template>
  <v-container
    fluid
    fill-height
    pt-0
  >
    <v-row style="height: 100%">
      <v-col class="pa-0">
        <v-sheet
          style="height: 15%"
          min-width="100%"
          color="#eaeaea"
        >
          <v-col>
            <v-text-field
              v-model="text"
              placeholder="Введите"
              rounded
              dense
              solo
              prepend-inner-icon="mdi-airplane-takeoff"
              @input="takeInput(text)"
            />
          </v-col>
        </v-sheet>
        <v-row
          style="height: 100%"
          align="center"
          justify="center"
        >
          <v-col align="center">
            <span
              v-if="!isFilled"
              class="body-2 mx-auto"
            >
              Ничего не введено
            </span>
            <v-progress-circular
              v-else-if="isLoading"
              class="mx-auto"
              indeterminate
              color="primary"
            />
            <span
              v-else-if="!searchResult"
              class="body-2 mx-auto"
            >
              Ничего не найдено
            </span>
            <span
              v-else-if="searchResult"
              class="body-2 mx-auto"
            >
              Здесь результаты
            </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>

<script src="./Navigator" lang="ts" />
