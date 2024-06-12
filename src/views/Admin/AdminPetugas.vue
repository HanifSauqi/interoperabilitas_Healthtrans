<template>
    <div class="relative mb-10">
      <!-- Title and "Tambah" button -->
      <h1 class="text-3xl font-bold mb-5">List Petugas</h1>
      <div class="absolute top-4 right-4">
        <router-link to="/admin/create-petugas">
          <button @click="addPetugas" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Tambah
          </button>
        </router-link>
      </div>
  
      <!-- Filter Section -->
      <div class="inline-flex items-center mb-10 bg-white space-x-10 px-5 py-3 rounded-xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" class="fill-current h-6 w-6">
          <path fill="currentColor" d="M7.914 1c-3.6 0-5.897 1.111-5.897 1.876c0 .766 2.297 1.877 5.897 1.877s5.897-1.111 5.897-1.877C13.811 2.111 11.514 1 7.914 1m3.98 7.988c-1.187.331-2.601.502-3.98.502c-1.383 0-2.801-.172-3.991-.505l2.863 3.242v2.515c.136.08.515.214 1.128.214c.61 0 .989-.133 1.126-.213v-2.515zm2.394-1.206l-4.248 4.823v2.246h.004c0 .763-1.069 1.105-2.13 1.105s-2.13-.342-2.13-1.105h.002v-2.245L1.321 7.55l.01-.008A1.53 1.53 0 0 1 1 6.607V2.78h.02C1.14.973 4.627 0 7.913 0s6.774.973 6.894 2.78h.02v3.827c0 .343-.12.657-.335.941l-.003.004q-.09.118-.202.23m-.578-.856a.56.56 0 0 0 .118-.319V4.411c-1.288.879-3.649 1.342-5.914 1.342S3.288 5.29 2 4.411v2.196C2 7.375 4.304 8.49 7.914 8.49c2.879 0 4.927-.709 5.639-1.385z"/>
        </svg>
        <span>Filter by</span>
        <select v-model="filter" class="flex items-center bg-white rounded-xl border-0">
          <option value="">Jabatan</option>
          <option value="dokter">Dokter</option>
          <option value="perawat">Perawat</option>
          <option value="admin">Admin</option>
        </select>
        <button @click="resetFilter" class="flex items-center text-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 21 21" class="fill-current mr-2">
            <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3.578 6.487A8 8 0 1 1 2.5 10.5"/>
              <path d="M7.5 6.5h-4v-4"/>
            </g>
          </svg>
          Reset Filter
        </button>
      </div>
  
      <!-- Petugas Table -->
      <div class="bg-white">
        <table class="table-fixed w-full divide-y divide-gray-200 rounded-lg">
          <thead class="bg-gray-50">
            <tr>
              <th class="pl-8 px-6 py-3 text-left text-xs font-bold text-black uppercase">ID</th>
              <th class="px-6 py-3 text-left text-xs font-bold text-black uppercase">Nama</th>
              <th class="px-6 py-3 text-left text-xs font-bold text-black uppercase">NIP</th>
              <th class="px-6 py-3 text-left text-xs font-bold text-black uppercase">Alamat</th>
              <th class="px-6 py-3 text-left text-xs font-bold text-black uppercase">Jabatan</th>
              <th class="px-6 py-3 text-left text-xs font-bold text-black uppercase">Nomor Telepon</th>
              <th class="px-6 py-3 text-left text-xs font-bold text-black uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="petugas in filteredPetugas" :key="petugas.id">
              <td class="pl-8 px-6 py-4 whitespace-nowrap">{{ petugas.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ petugas.nama }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ petugas.nip }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ petugas.alamat }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ petugas.jabatan }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ petugas.no_telp }}</td>
              <td class="px-6 py-4 whitespace-nowrap flex space-x-2">
                <router-link :to="'/admin/edit-petugas/' + petugas.id" class="text-blue-600 hover:text-blue-900">
                    <button @click="editPetugas(petugas.id)" class="text-blue-600 hover:text-blue-900">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M2.293 12.293a1 1 0 0 0 1.414 1.414l12-12a1 1 0 0 0 0-1.414l-1.5-1.5a1 1 0 0 0-1.414 0l-12 12a1 1 0 0 0 1.414 1.414l1.5-1.5a1 1 0 0 0 0-1.414L2.293 12.293z"/>
                    <path fill-rule="evenodd" d="M7.5 17H4a2 2 0 0 1-2-2v-3.5a.5.5 0 0 1 1 0V15a1 1 0 0 0 1 1h3.5a.5.5 0 0 1 0 1z"/>
                  </svg>
                </button>
                </router-link>
                <button @click="confirmDeletePetugas(petugas.id)" class="text-red-600 hover:text-red-900">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.828 10l-4.414 4.414a1.5 1.5 0 1 0 2.122 2.122L10 12.122l4.414 4.414a1.5 1.5 0 1 0 2.122-2.122L12.122 10l4.414-4.414a1.5 1.5 0 1 0-2.122-2.122L10 7.878 5.586 3.464a1.5 1.5 0 1 0-2.122 2.122L7.878 10z"/>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "Petugas",
    data() {
      return {
        filter: "",
        petugasList: []
      };
    },
    computed: {
      filteredPetugas() {
        if (this.filter) {
          return this.petugasList.filter(petugas => petugas.jabatan.toLowerCase().includes(this.filter.toLowerCase()));
        }
        return this.petugasList;
      }
    },
    methods: {
      async fetchPetugas() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/petugas');
          this.petugasList = response.data.data;
          console.log(this.petugasList);
        } catch (error) {
          console.error("There was an error fetching the petugas:", error);
        }
      },
      addPetugas() {
        console.log("Add petugas"); // Implement the add functionality
      },
      editPetugas(petugas) {
        console.log("Edit petugas", petugas); // Implement the edit functionality
      },
      async deletePetugas(id) {
        try {
          // Perform delete operation using Axios or fetch API
          await axios.delete(`http://127.0.0.1:8000/api/petugas/${id}`);
          // Remove the deleted petugas from the local list
          this.petugasList = this.petugasList.filter(petugas => petugas.id !== id);
          // Optionally show a success message or handle further UI updates
          console.log(`Petugas with ID ${id} deleted successfully.`);
        } catch (error) {
          console.error(`Error deleting petugas with ID ${id}:`, error);
          // Optionally show an error message or handle errors gracefully
        }
      },
      confirmDeletePetugas(id) {
        if (confirm("Are you sure you want to delete this petugas?")) {
          this.deletePetugas(id);
        }
      },
      resetFilter() {
        this.filter = "";
      }
    },
    mounted() {
      this.fetchPetugas();
    }
  };
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  