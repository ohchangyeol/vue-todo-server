<script>
  export default {
    data: () => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
  }
</script>

<template>
  <v-menu :location="location">
      <template v-slot:activator="{ props }">
        <v-text-field
            v-model="date"
            label="Picker without buttons"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="props"
          ></v-text-field>
      </template>
      <v-date-picker color="primary" v-model="date"></v-date-picker>
    </v-menu>
</template>