import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugins/axios';

export const useAutorStore = defineStore('autor', () => {
  const state = reactive({
    autores: [],
  });

  const autores = computed(() => state.autores);
  const getGenreName = (id) =>
    state.autores.find((genre) => genre.id === id).name;

  const getAllGenres = async (type) => {
    const response = await api.get(`genre/${type}/list?language=pt-BR`);
    state.autores = response.data.genres;
  };

  return { autores: autores, getAllGenres, getGenreName };
});

export default useAutorStore;