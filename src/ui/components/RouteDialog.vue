<template>
  <v-bottom-sheet
    :value="value"
    transition="dialog-top-transition"
    content-class="route-top-dialog"
    @click:outside="missClick()"
  >
    <v-sheet class="px-6 py-6">
      <v-row
        justify="space-between"
        align="center"
      >
        <v-col
          cols="auto"
        >
          <span class="body-1 d-none">
            {{ $vuetify.lang.t('$vuetify.route_dialog.label.route') }}
          </span>
        </v-col>
        <v-col cols="auto">
          <v-btn
            icon
            @click="closeDialog"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-row
        no-gutters
        align="center"
        justify="center"
        class="mt-2"
      >
        <v-col
          cols="12"
          sm="auto"
        >
          <v-autocomplete
            v-model="origin.value"
            :items="origin.items"
            :search-input.sync="origin.search"
            dense
            filled
            full-width
            :placeholder="$vuetify.lang.t('$vuetify.route_dialog.placeholder.start')"
            hide-details
            hide-no-data
          />
        </v-col>
        <v-col
          cols="auto"
          class="mx-4 hidden-xs-and-up"
        >
          <v-btn
            icon
            large
            disabled
          >
            <v-icon>mdi-airplane-takeoff</v-icon>
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          sm="auto"
        >
          <v-autocomplete
            v-model="dest.value"
            :items="dest.items"
            :search-input.sync="dest.search"
            dense
            filled
            full-width
            :placeholder="$vuetify.lang.t('$vuetify.route_dialog.placeholder.finish')"
            flat
            hide-details
            hide-no-data
          />
        </v-col>
      </v-row>

      <v-row
        no-gutters
        class="mt-6"
      >
        <v-col>
          <v-btn
            :disabled="!isSubmitEnabled"
            color="primary"
            block
            depressed
            rounded
            @click="submitRoute"
          >
            <v-icon class="mr-2">
              mdi-magnify
            </v-icon>
            {{ $vuetify.lang.t('$vuetify.route_dialog.action.build_route') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script src="./RouteDialog" lang="ts" />

<style lang="less">
.route-top-dialog {
  align-self: flex-start !important;
}
</style>
