import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";
import { ref } from "vue";
const url =
  "https:api.themoviedb.org/3/search/movie?api_key=02708c4929ad93aa5e68f8ee7bfa4445&query=";

export const useSearchStore = defineStore("searchStore", () => {
  const movies = ref([]);
  const loader = ref(false);

  const getMovies = async (search) => {
    try {
      loader.value = true;
      const res = await fetch(`${url}${search}`);
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      movies.value = data.results;
      loader.value = false;
    } catch (err) {
      err.value = err.message;
    } finally {
      loader.value = false;
    }
  };

  const addToUserMovies = (object) => {
    const movieStore = useMovieStore();
    movieStore.movies.push({ ...object, isWatched: false });
  };
  return { movies, getMovies, addToUserMovies, loader };
});
