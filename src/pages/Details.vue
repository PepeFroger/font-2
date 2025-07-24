<template>
  <v-container>
    <v-container
      class="d-flex flex-md-row flex-column align-center align-md-start"
    >
      <v-avatar size="300" class="mr-md-4 mb-4 mb-md-0">
        <v-img
          :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
          :alt="movie.original_title"
          cover
        ></v-img>
      </v-avatar>
      <v-container class="d-flex flex-column align-center align-md-start">
        <h1 class="text-h4 mb-2">{{ movie.original_title }}</h1>
        <h1 class="text-h4 mb-2">{{ movie.release_date }}</h1>
        <span class="text-h5">{{ movie.overview }}</span>
      </v-container>
    </v-container>
    <v-container
      class="d-flex flex-md-row flex-column align-center align-md-start"
    >
      <v-container class="d-flex flex-column align-center align-md-start">
        <span class="text-h5">Рейтинг:</span>
        <span class="text-h5">{{ movie.vote_average }}</span>
      </v-container>
      <v-container class="d-flex flex-column align-center align-md-start">
        <span class="text-h5">Всего голосовали:</span>
        <span class="text-h5">{{ movie.vote_count }}</span>
      </v-container>

    </v-container>
  </v-container>
</template>

<script setup>
import { useMovieStore } from "@/stores/MovieStore";
import { useSearchStore } from "@/stores/SearchStore";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const movieStore = useMovieStore();
const searchStore = useSearchStore();

const movie = computed(() => {
  return (
    movieStore.movies.find((m) => m.id == route.params.id) ||
    searchStore.movies.find((m) => m.id == route.params.id)
  );
});
</script>

<style scoped></style>
