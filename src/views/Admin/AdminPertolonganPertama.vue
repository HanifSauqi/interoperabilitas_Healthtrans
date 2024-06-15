<template>
  <div class="relative w-full flex flex-col items-start justify-start gap-10">
    <!-- Container for positioning the button -->
    <div class="top-4 right-4 flex justify-between w-full">
      <h1 class="text-3xl font-bold">Pertolongan Pertama</h1>
      <router-link to="/admin/create-pertolongan-pertama">
        <button
          @click="addItem"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Tambah
        </button>
      </router-link>
    </div>
    <div class="w-full flex flex-col items-start justify-start gap-10">
      <div
        class="w-full flex flex-row items-start justify-start gap-10 text-base text-gray-200"
      >
        <div class="bg-white w-full">
          <table class="table-fixed w-full divide-y divide-gray-200 rounded-lg">
            <thead class="bg-gray-50">
              <tr>
                <th
                  class="pl-8 px-6 py-3 text-left text-xs font-bold text-black uppercase w-1/6"
                >
                  ID
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-bold text-black uppercase w-1/6"
                >
                  Foto
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-bold text-black uppercase w-1/6"
                >
                  Judul
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-bold text-black uppercase w-1/3"
                >
                  Deskripsi
                </th>
                <th
                  class="px-6 py-3 text-left text-xs font-bold text-black uppercase w-1/6"
                >
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 text-black">
              <tr v-for="item in items" :key="item.id">
                <td class="pl-8 px-6 py-4 whitespace-nowrap">{{ item.id }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <img
                    :src="`http://127.0.0.1:8000${item.gambar}`"
                    alt="Foto"
                    class="w-16 h-16 object-cover"
                  />
                </td>
                <td class="px-6 py-4 whitespace-nowrap">{{ item.judul }}</td>
                <td class="px-6 py-4 whitespace-normal">
                  {{ item.deskripsi }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <router-link :to="'/admin/edit-pertolongan-pertama/' + item.id" class="text-blue-600 hover:text-blue-900">
                  <button
                    @click="editItem(item)"
                    class="text-blue-600 hover:text-blue-900 mr-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 inline-block"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.293 12.293a1 1 0 0 0 1.414 1.414l12-12a1 1 0 0 0 0-1.414l-1.5-1.5a1 1 0 0 0-1.414 0l-12 12a1 1 0 0 0 1.414 1.414l1.5-1.5a1 1 0 0 0 0-1.414L2.293 12.293z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M7.5 17H4a2 2 0 0 1-2-2v-3.5a.5.5 0 0 1 1 0V15a1 1 0 0 0 1 1h3.5a.5.5 0 0 1 0 1z"
                      />
                    </svg>
                  </button>
                  </router-link>
                  <button
                    @click="confirmDeleteItem(item.id)"
                    class="text-red-600 hover:text-red-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 inline-block"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.828 10l-4.414 4.414a1.5 1.5 0 1 0 2.122 2.122L10 12.122l4.414 4.414a1.5 1.5 0 1 0 2.122-2.122L12.122 10l4.414-4.414a1.5 1.5 0 1 0-2.122-2.122L10 7.878 5.586 3.464a1.5 1.5 0 1 0-2.122 2.122L7.878 10z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetchItems() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/pertolongan-pertama');
        this.items = response.data.data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    addItem() {
      console.log("Add new item");
    },
    editItem(item) {
      console.log("Edit item:", item);
    },
    async deleteItem(id) {
      console.log("Delete item with ID:", id);
      try {
        await axios.delete(`http://127.0.0.1:8000/api/pertolongan-pertama/${id}`)
        this.items = this.items.filter((item) => item.id !== id);
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    },
    confirmDeleteItem(id) {
      if (confirm('Are you sure you want to delete this item?')) {
        this.deleteItem(id);
      }
    }
  },
  mounted() {
    this.fetchItems();
  }
};
</script>

<style scoped>
/* No changes here */
</style>
