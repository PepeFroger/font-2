<template>
  <v-form v-model="valid" @submit.prevent="searchStore.getMovies(searchMovie)">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-text-field
            v-model="searchMovie"
            :rules="nameRules"
            label="Search..."
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <v-row justify="center">
    <v-col cols="12" md="10">
      <v-container v-if="searchStore.loader">
        <Loader />
      </v-container>
      <v-container v-else>
        <Movies
          v-for="movie of searchStore.movies"
          :key="movie.id"
          :movie="movie"
          :isSearch="true"
        />
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup>
import Loader from "@/components/Loader.vue";
import Movies from "@/components/Movies.vue";
import { useSearchStore } from "@/stores/SearchStore";
import { ref } from "vue";

const searchMovie = ref("");
const searchStore = useSearchStore();
</script>

<style scoped></style>
