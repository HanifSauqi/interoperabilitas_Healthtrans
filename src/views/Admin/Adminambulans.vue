<template>
    <div class="relative mb-10">
      <!-- Title and "Tambah" button -->
      <h1 class="text-3xl font-bold mb-5">List Ambulans</h1>
      <div class="absolute   top-4 right-4">
        <router-link to="/admin/create-ambulans">
        <button @click="addAmbulance" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
        <select class="flex items-center bg-white rounded-xl border-0">
          <option>Wilayah</option>
          <option>yogayakarta</option>
        </select>
        <button class="flex items-center text-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 21 21" class="fill-current mr-2">
            <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3.578 6.487A8 8 0 1 1 2.5 10.5"/>
              <path d="M7.5 6.5h-4v-4"/>
            </g>
          </svg>
          Reset Filter
        </button>
      </div>
  
      <!-- Ambulance Table -->
      <div class="bg-white">
        <table class="table-fixed w-full divide-y divide-gray-200 rounded-lg">
          <thead class="bg-gray-50">
            <tr>
              <th class="pl-8 px-6 py-3 text-left text-xs font-bold text-black uppercase">ID</th>
              <th class="px-6 py-3 text-left text-xs font-bold text-black uppercase">Wilayah</th>
              <th class="px-6 py-3 text-left text-xs font-bold text-black uppercase">Plat Nomor</th>
              <th class="px-6 py-3 text-left text-xs font-bold text-black uppercase">Nomor Telepon</th>
              <th class="px-6 py-3 text-left text-xs font-bold text-black uppercase">Status</th>
              <th class="px-6 py-3 text-left text-xs font-bold text-black uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="ambulance in filteredAmbulances" :key="ambulance.id">
              <td class="pl-8 px-6 py-4 whitespace-nowrap">{{ ambulance.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ ambulance.wilayah }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ ambulance.platNomor }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ ambulance.nomorTelepon }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="['px-2 py-1 rounded text-center font-bold text-xs uppercase', getStatusClass(ambulance.status)]">
                  {{ ambulance.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap flex space-x-2">
                <button @click="editAmbulance(ambulance)" class="text-blue-600 hover:text-blue-900">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M2.293 12.293a1 1 0 0 0 1.414 1.414l12-12a1 1 0 0 0 0-1.414l-1.5-1.5a1 1 0 0 0-1.414 0l-12 12a1 1 0 0 0 1.414 1.414l1.5-1.5a1 1 0 0 0 0-1.414L2.293 12.293z"/>
                    <path fill-rule="evenodd" d="M7.5 17H4a2 2 0 0 1-2-2v-3.5a.5.5 0 0 1 1 0V15a1 1 0 0 0 1 1h3.5a.5.5 0 0 1 0 1z"/>
                  </svg>
                </button>
                <button @click="deleteAmbulance(ambulance.id)" class="text-red-600 hover:text-red-900">
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
  export default {
    name: "Ambulans",
    data() {
      return {
        filter: "",
        ambulances: [
          { id: 1, wilayah: "Jakarta", platNomor: "B 1234 AB", nomorTelepon: "081234567890", status: "SIAP" },
          { id: 2, wilayah: "Bandung", platNomor: "D 5678 EF", nomorTelepon: "089876543210", status: "BEROPRASI" },
          { id: 3, wilayah: "Surabaya", platNomor: "L 9012 GH", nomorTelepon: "085678912345", status: "STOP" }
        ]
      };
    },
    computed: {
      filteredAmbulances() {
        return this.ambulances.filter((ambulance) => ambulance.wilayah.includes(this.filter));
      }
    },
    methods: {
      getStatusClass(status) {
        switch (status) {
          case "SIAP": return "bg-green-200 text-green-800";
          case "BEROPRASI": return "bg-purple-200 text-purple-800";
          case "STOP": return "bg-red-200 text-red-800";
          default: return "";
        }
      },
      addAmbulance() {
        console.log("Add ambulance"); // Implement the add functionality
      },
      editAmbulance(ambulance) {
        console.log("Edit ambulance", ambulance); // Implement the edit functionality
      },
      deleteAmbulance(id) {
        console.log("Delete ambulance with ID", id); // Implement the delete functionality
        this.ambulances = this.ambulances.filter(ambulance => ambulance.id !== id);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>