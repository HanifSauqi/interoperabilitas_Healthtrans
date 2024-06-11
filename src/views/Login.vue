<template>
  <div class="flex w-screen h-screen">
    <div class="w-[70%]">
      <img
        class="w-full h-full object-cover animate-pulse"
        src="\src\assets\image.png"
        alt="Background"
      />
    </div>
    <div class="w-[30%] bg-white flex flex-col items-center justify-center p-10">
      <h1 class="text-4xl mb-5 font-bold"><span class="text-blue-500">Log</span><span class="text-red-500">in</span></h1>
      <form @submit.prevent="submitForm" class="w-full">
        <div class="mb-4">
          <label class=" text-xl block text-gray-700 font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            v-model="email"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-xl font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            v-model="password"
          />
        </div>
        <div class="flex items-center justify-between">
          <router-link
            class="inline-block align-baseline font-bold text-xl text-red-500 hover:text-red-800"
            to="/ambulans"
          >
          <button
            class="bg-blue-500 hover:bg-blue-700 text-xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          </router-link>
          <router-link
            class="inline-block align-baseline font-bold text-xl text-red-500 hover:text-red-800"
            to="/register"
          >
          <a
            class="inline-block align-baseline font-bold text-xl text-red-500 hover:text-red-800"
            href="#"
          >
            Register
          </a>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
    },
  },
};
</script>