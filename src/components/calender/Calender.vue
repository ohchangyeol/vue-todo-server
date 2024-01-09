<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="today"
          color="primary"
          type="month"
          :events="events"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

