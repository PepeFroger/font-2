<template>
  <v-card
    class="mx-auto"
    max-width="800"
    link
    @click="$router.push({ path: `/${movie.id}`, params: { id: movie.id } })"
  >
    <MovieCard :movie="movie" />
    <MovieAction :movie="movie" :isSearch="isSearch" @add-movie="addMovie" />
  </v-card>
  <v-snackbar v-model="snackbar.show" :timeout="2000" :color="snackbar.color">
    {{ snackbar.message }}
  </v-snackbar>
</template>

<script setup>
import { useSearchStore } from "@/stores/SearchStore";
import { ref } from "vue";
import MovieCard from "./MovieCard.vue";
import MovieAction from "./MovieAction.vue";
defineProps({
  movie: {
    type: Object,
    required: true,
  },
  isSearch: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const searchStore = useSearchStore();

const snackbar = ref({
  show: false,
  message: "",
  color: "success",
});

const addMovie = async (movie) => {
  try {
    await searchStore.addToUserMovies(movie);
    snackbar.value = {
      show: true,
      message: "Фильм успешно добавлен",
      color: "success",
    };
  } catch (error) {
    snackbar.value = {
      show: true,
      message: "Ошибка",
      color: "error",
    };
  }
};

</script>

<style lang="scss" scoped></style>
