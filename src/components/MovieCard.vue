<template>
  <v-card-item>
    <template v-slot:prepend>
      <v-avatar size="200">
        <v-img
          :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
          :alt="movie.original_title"
          cover
        ></v-img>
      </v-avatar>
    </template>
    <v-card-title>{{ movie.original_title }}</v-card-title>
    <v-card-subtitle>{{ movie.release_date }}</v-card-subtitle>
    <v-card-subtitle>{{ movie.overview }}</v-card-subtitle>

  </v-card-item>
</template>

<script setup>
defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

</script>

<style scoped></style>
