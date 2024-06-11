<template>
  <div class="mb-10">
    <h1 class="text-3xl font-bold">List Ambulans</h1>
  </div>

  <div class="inline-flex items-center mb-10 bg-white space-x-10 px-5 py-3 rounded-xl">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      class="fill-current h-6 w-6"
    >
      <path
        fill="currentColor"
        d="M7.914 1c-3.6 0-5.897 1.111-5.897 1.876c0 .766 2.297 1.877 5.897 1.877s5.897-1.111 5.897-1.877C13.811 2.111 11.514 1 7.914 1m3.98 7.988c-1.187.331-2.601.502-3.98.502c-1.383 0-2.801-.172-3.991-.505l2.863 3.242v2.515c.136.08.515.214 1.128.214c.61 0 .989-.133 1.126-.213v-2.515zm2.394-1.206l-4.248 4.823v2.246h.004c0 .763-1.069 1.105-2.13 1.105s-2.13-.342-2.13-1.105h.002v-2.245L1.321 7.55l.01-.008A1.53 1.53 0 0 1 1 6.607V2.78h.02C1.14.973 4.627 0 7.913 0s6.774.973 6.894 2.78h.02v3.827c0 .343-.12.657-.335.941l-.003.004q-.09.118-.202.23m-.578-.856a.56.56 0 0 0 .118-.319V4.411c-1.288.879-3.649 1.342-5.914 1.342S3.288 5.29 2 4.411v2.196C2 7.375 4.304 8.49 7.914 8.49c2.879 0 4.927-.709 5.639-1.385z"
      />
    </svg>
    <span class="">Filter by</span>
    <select class="flex items-center bg-white rounded-xl border-0">
      <span class="">Wilayah</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          d="M36 18L24 30L12 18"
        />
      </svg>
        <option>Wilayah</option>
        <option>yogayakarta</option>
    </select>
    <button class="flex items-center text-red-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 21 21"
        class="fill-current mr-2"
      >
        <g
          fill="none"
          fill-rule="evenodd"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3.578 6.487A8 8 0 1 1 2.5 10.5" />
          <path d="M7.5 6.5h-4v-4" />
        </g>
      </svg>
      Reset Filter
    </button>
</div>

  <div class="bg-white">
    <table class="table-fixed w-full divide-y divide-gray-200 rounded-lg">
      <thead class="bg-gray-50">
        <tr>
          <th
            class="pl-8 px-6 py-3 text-left text-xs font-bold text-black uppercase"
          >
            ID
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-bold text-black uppercase"
          >
            Wilayah
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-bold text-black uppercase"
          >
            Plat Nomor
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-bold text-black uppercase"
          >
            Nomor Telepon
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-bold text-black uppercase"
          >
            Status
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="ambulance in ambulances" :key="ambulance.id">
          <td class="pl-8 px-6 py-4 whitespace-nowrap">{{ ambulance.id }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ ambulance.lokasi }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ ambulance.plat_nomor }}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            {{ ambulance.petugas.no_telp }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span
              :class="[
                'px-2 py-1 rounded text-center font-bold text-xs uppercase',
                getStatusClass(ambulance.status),
              ]"
              >{{ ambulance.status }}</span
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Ambulans",
  data() {
    return {
      filter: "",
      ambulances: [],
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/ambulans')
      .then(response => {
        this.ambulances = response.data.data;
        console.log(this.ambulances);
      })
      .catch(error => {
        console.error(error);
      });
  },
  computed: {
    filteredAmbulances() {
      // return this.ambulances.filter((ambulance) =>
        // ambulance.wilayah.includes(this.filter)
      // );
    },
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case "SIAP":
          return "bg-green-200 text-green-800 ";
        case "BEROPRASI":
          return "bg-purple-200 text-purple-800";
        case "STOP":
          return "bg-red-200 text-red-800";
        default:
          return "";
      }
    },
  },
};
</script>

<style scoped></style>
