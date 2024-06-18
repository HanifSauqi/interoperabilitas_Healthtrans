<template>
  <div class="w-full mx-auto">
    <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="lokasi">
          Lokasi
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lokasi" type="text" v-model="form.lokasi" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="plat_nomor">
          Plat Nomor
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="plat_nomor" type="text" v-model="form.plat_nomor" required>
      </div>
      <!-- <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="tipe">
          Tipe
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tipe" type="text" v-model="form.tipe" required>
      </div> -->
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="status">
          Status
        </label>
        <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status" v-model="form.status" required>
          <option disabled value="">Please select one</option>
          <option>Siap</option>
          <option>Beroperasi</option>
          <option>Stop</option>
        </select>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="rumahSakit">
          Rumah Sakit
        </label>
        <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="rumahSakit" v-model="form.rumah_sakit_id" required>
          <option disabled value="">Please select one</option>
          <option v-for="rs in rumahSakitOptions" :key="rs.id" :value="rs.id">{{ rs.nama }}</option>
        </select>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="petugas">
          Petugas
        </label>
        <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="petugas" v-model="form.petugas_id" required>
          <option disabled value="">Please select one</option>
          <option v-for="ptgs in petugasOptions" :key="ptgs.id" :value="ptgs.id">{{ ptgs.nama }}</option>
        </select>
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
        lokasi: '',
        plat_nomor: '',
        // tipe: '',
        status: '',
        rumah_sakit_id: '', // To store selected rumah sakit id
        petugas_id: ''     // To store selected petugas id
      },
      rumahSakitOptions: [], // Array to hold fetched rumah sakit options
      petugasOptions: []     // Array to hold fetched petugas options
    }
  },
  methods: {
    async fetchRumahSakitOptions() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/rumah-sakit');
        this.rumahSakitOptions = response.data.data;
      } catch (error) {
        console.error('Error fetching rumah sakit options:', error);
      }
    },
    async fetchPetugasOptions() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/petugas');
        this.petugasOptions = response.data.data;
      } catch (error) {
        console.error('Error fetching petugas options:', error);
      }
    },
    async submitForm() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/ambulans', this.form);
        console.log(response.data);
        // You can perform additional actions like redirecting or showing a success message
        // Redirect to the previous page
        this.$router.go(-1);
      } catch (error) {
        console.error('There was an error submitting the form:', error);
      }
    }
  },
  mounted() {
    this.fetchRumahSakitOptions();
    this.fetchPetugasOptions();
  }
}
</script>

<style scoped>
/* No changes here */
</style>
