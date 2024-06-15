<template>
  <div class="w-full mx-auto">
    <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="gambar">
          Gambar
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gambar" type="file" @change="onFileChange" required>
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
        gambar: null,
        judul: '',
        deskripsi: ''
      }
    };
  },
  methods: {
    onFileChange(e) {
      this.form.gambar = e.target.files[0];
    },
    submitForm() {
      const formData = new FormData();
      formData.append('gambar', this.form.gambar);
      formData.append('judul', this.form.judul);
      formData.append('deskripsi', this.form.deskripsi);

      axios.post('http://127.0.0.1:8000/api/pertolongan-pertama', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        // Redirect to the previous page
        this.$router.go(-1);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
    }
  }
};
</script>

<style scoped>
/* No changes here */
</style>
