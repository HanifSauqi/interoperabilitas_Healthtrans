<template>
    <div class="w-full mx-auto">
      <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="gambar">
            Gambar
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gambar" type="file" @change="onFileChange">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="judul">
            Judul
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="judul" type="text" v-model="form.judul" required>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="deskripsi">
            Deskripsi
          </label>
          <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="deskripsi" v-model="form.deskripsi" required></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        id: null,
        gambar: null,
        judul: '',
        deskripsi: ''
      }
    }
  },
  methods: {
    async fetchData(id) {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/pertolongan-pertama/${id}`);
        const item = response.data.data;
        this.form.id = item.id;
        this.form.judul = item.judul;
        this.form.deskripsi = item.deskripsi;
        // Note: The image file itself can't be directly set to the input element. 
        // However, you can show the existing image separately and allow user to change it.
        this.form.gambar = item.gambar;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    onFileChange(e) {
      this.form.gambar = e.target.files[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('judul', this.form.judul);
      formData.append('deskripsi', this.form.deskripsi);
      if (this.form.gambar instanceof File) {
        formData.append('gambar', this.form.gambar);
      }

      try {
        await axios.post(`http://127.0.0.1:8000/api/pertolongan-pertama/${this.form.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          body: {
            ...formData,
            _method: 'PUT'
          }
        });
        // alert('Data has been updated successfully');
        // Redirect to the previous page
        this.$router.go(-1);
      } catch (error) {
        console.error('Error updating data:', error);
      }
    }
  },
  mounted() {
    const id = this.$route.params.id; // Assumes the route contains the id parameter
    this.fetchData(id);
  }
}
</script>

<style scoped>
/* No changes here */
</style>
