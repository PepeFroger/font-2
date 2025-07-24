<template>
  <v-card-actions v-if="!isSearch">
    <v-btn
      color="success "
      @click.stop="movieStore.toggleWatch(movie.id)"
      v-if="!movie.isWatched"
      >Watch</v-btn
    >
    <v-btn v-else @click.stop="movieStore.toggleWatch(movie.id)">Unwatch</v-btn>
    <v-btn color="error" @click.stop="movieStore.deleteMovies(movie.id)"
      >Delete</v-btn
    >
  </v-card-actions>
  <v-card-actions v-else>
    <v-btn color="success" @click.stop="handleAddMovie">Add</v-btn>
  </v-card-actions>
</template>

<script setup>
import { useMovieStore } from "@/stores/MovieStore";

const props = defineProps({
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

const movieStore = useMovieStore();
const emit = defineEmits(["add-movie"])

const handleAddMovie = () => {
  emit("add-movie", props.movie);
};
</script>

<style scoped></style>
