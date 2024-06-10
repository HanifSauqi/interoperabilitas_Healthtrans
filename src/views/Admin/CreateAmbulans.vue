<template>
  <div class="w-full mx-auto">
    <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="wilayah">
          Wilayah
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="wilayah" type="text" v-model="form.wilayah" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="platNomor">
          Plat Nomor
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="platNomor" type="text" v-model="form.platNomor" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="nomorTelepon">
          Nomor Telepon
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nomorTelepon" type="text" v-model="form.nomorTelepon" required>
      </div>
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
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        wilayah: '',
        platNomor: '',
        nomorTelepon: '',
        status: ''
      }
    }
  },
  methods: {
    submitForm() {
      console.log(this.form);
      // You can perform your form submission logic here
    }
  }
}
</script>

<style scoped>
/* No changes here */
</style>