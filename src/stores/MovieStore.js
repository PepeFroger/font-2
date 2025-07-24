import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useMovieStore = defineStore("moiveStore", () => {
  const movies = ref([]);

  const moviesInLocalStorege = localStorage.getItem("movies");
  if (moviesInLocalStorege) {
    movies.value = JSON.parse(moviesInLocalStorege);
  }

  const deleteMovies = (id) => {
    movies.value = movies.value.filter((el) => el.id !== id);
  };

  const toggleWatch = (id) => {
    const idx = movies.value.findIndex((el) => el.id === id);
    movies.value[idx].isWatched = !movies.value[idx].isWatched;
  };
  const watchMovies = computed(() => {
    return movies.value.filter((el) => el.isWatched);
  });
  watch(
    () => movies.value,
    (state) => {
      localStorage.setItem("movies", JSON.stringify(state));
    },
    { deep: true }
  );
  return {
    movies,
    deleteMovies,
    toggleWatch,
    watchMovies,
  };
});
