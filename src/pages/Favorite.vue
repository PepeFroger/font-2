<template>
  <v-container>

		<v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-6">Просмотренно</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="movie in movieStore.watchMovies" :key="movie.id" cols="12">
        <Movies
        :key="movie.id"
        :movie="movie"
      />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-6">Избранные фильмы</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="movie in movieStore.movies" :key="movie.id" cols="12">
        <Movies :movie="movie" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Movies from "@/components/Movies.vue";
import { useMovieStore } from "../stores/MovieStore";

const movieStore = useMovieStore();
</script>

<style scoped></style>
