<template>
    <div class="w-full mx-auto">
      <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="id">
            ID
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="id"
            type="text"
            v-model="form.id"
            disabled
          >
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="nama">
            Nama
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nama"
            type="text"
            v-model="form.nama"
            required
          >
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="alamat">
            Alamat
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="alamat"
            type="text"
            v-model="form.alamat"
            required
          >
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="no_telp">
            Nomor Telepon
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="no_telp"
            type="text"
            v-model="form.nomer_telp"
            required
          >
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            v-model="form.email"
            required
          >
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
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
          id: '',
          nama: '',
          alamat: '',
          nomer_telp: '',
          email: ''
        }
      }
    },
    methods: {
      async fetchRumahSakit() {
        const rumahSakitId = this.$route.params.id; // Assumes the route param is named 'id'
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/rumah-sakit/${rumahSakitId}`);
          this.form = response.data.data;
        } catch (error) {
          console.error('There was an error fetching the rumah sakit:', error);
        }
      },
      async submitForm() {
        const rumahSakitId = this.$route.params.id; // Assumes the route param is named 'id'
        console.log('Form submitted:', this.form); // Debugging step
        try {
          const response = await axios.put(`http://127.0.0.1:8000/api/rumah-sakit/${rumahSakitId}`, this.form);
          console.log('Response:', response.data);
          // Redirect to the previous page
          this.$router.go(-1);
        } catch (error) {
          console.error('There was an error submitting the form:', error);
        }
      }
    },
    mounted() {
      this.fetchRumahSakit();
    }
  }
  </script>
  
  <style scoped>
  /* No changes here */
  </style>
  