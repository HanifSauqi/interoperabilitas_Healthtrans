<template>
  <aside
    id="default-sidebar"
    class="fixed z-20 left-0 w-240 h-screen bg-white flex flex-col justify-between"
    aria-label="Sidenav"
  >
    <div>
      <h1 class="text-2xl font-nunito text-center p-4">
        <span class="text-red-500 font-bold">Health</span>
        <span class="text-blue-500 font-bold">trans</span>
      </h1>

      <router-link
        to="/admin/ambulans"
        class="block mt-4 py-3 mx-6 rounded-lg flex items-center hover:bg-blue-500 hover:text-white hover:border-blue-500"
        active-class="bg-blue-500 text-white border-blue-500"
        :class="{ 'bg-white text-black': $route.path !== '/admin/ambulans' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
          class="fill-current h-6 w-6 mr-4 ml-2"
        >
          <path
            fill="currentColor"
            d="M80 120a8 8 0 0 1 8-8h16V96a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16H88a8 8 0 0 1-8-8m176 0v64a16 16 0 0 1-16 16h-17a32 32 0 0 1-62 0h-50a32 32 0 0 1-62 0H32a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h152a8 8 0 0 1 8 8v8h34.58a15.93 15.93 0 0 1 14.86 10.06l14 35A7.9 7.9 0 0 1 256 120m-64-32v24h44.18l-9.6-24ZM32 184h17a32 32 0 0 1 62 0h50a32.1 32.1 0 0 1 15-19.69V72H32Zm64 8a16 16 0 1 0-16 16a16 16 0 0 0 16-16m112 0a16 16 0 1 0-16 16a16 16 0 0 0 16-16m32-8v-56h-48v32a32.06 32.06 0 0 1 31 24Z"
          />
        </svg>
        Ambulans
      </router-link>

      <router-link
        to="/admin/pertolongan-pertama"
        class="block mt-4 py-3 mx-6 rounded-lg flex items-center hover:bg-blue-500 hover:text-white hover:border-blue-500"
        active-class="bg-blue-500 text-white border-blue-500"
        :class="{ 'bg-white text-black': $route.path !== '/admin/pertolongan-pertama' }"      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 1024 1024"
          class="fill-current h-6 w-6 mr-4 ml-2"
        >
          <path
            fill="currentColor"
            d="M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128"
          />
          <path
            fill="currentColor"
            d="M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0zM352 128v64h320v-64zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32"
          />
        </svg>
        P3K
      </router-link>
      
      <router-link
        to="/admin/rumah-sakit"
        class="block mt-4 py-3 mx-6 rounded-lg flex items-center hover:bg-blue-500 hover:text-white hover:border-blue-500"
        active-class="bg-blue-500 text-white border-blue-500"
        :class="{ 'bg-white text-black': $route.path !== '/admin/rumah-sakit' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
          class="fill-current h-6 w-6 mr-4 ml-2"
        >
          <path
            fill="currentColor"
            d="M80 120a8 8 0 0 1 8-8h16V96a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16H88a8 8 0 0 1-8-8m176 0v64a16 16 0 0 1-16 16h-17a32 32 0 0 1-62 0h-50a32 32 0 0 1-62 0H32a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h152a8 8 0 0 1 8 8v8h34.58a15.93 15.93 0 0 1 14.86 10.06l14 35A7.9 7.9 0 0 1 256 120m-64-32v24h44.18l-9.6-24ZM32 184h17a32 32 0 0 1 62 0h50a32.1 32.1 0 0 1 15-19.69V72H32Zm64 8a16 16 0 1 0-16 16a16 16 0 0 0 16-16m112 0a16 16 0 1 0-16 16a16 16 0 0 0 16-16m32-8v-56h-48v32a32.06 32.06 0 0 1 31 24Z"
          />
        </svg>
        Rumah Sakit
      </router-link>

      <router-link
        to="/admin/petugas"
        class="block mt-4 py-3 mx-6 rounded-lg flex items-center hover:bg-blue-500 hover:text-white hover:border-blue-500"
        active-class="bg-blue-500 text-white border-blue-500"
        :class="{ 'bg-white text-black': $route.path !== '/admin/petugas' }"      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 1024 1024"
          class="fill-current h-6 w-6 mr-4 ml-2"
        >
          <path
            fill="currentColor"
            d="M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128"
          />
          <path
            fill="currentColor"
            d="M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0zM352 128v64h320v-64zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32"
          />
        </svg>
        Petugas
      </router-link>

    </div>

    <div class="border-t border-gray-200 overflow-y-auto py-5">
      <router-link
        to="/admin/settings"
        class="block mt-4 py-3 mx-6 rounded-lg flex items-center hover:bg-blue-500 hover:text-white hover:border-blue-500"
        active-class="bg-blue-500 text-white border-blue-500"
        :class="{ 'bg-white text-black': $route.path !== '/admin/settings' }"      
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          class="fill-current h-6 w-6 mr-4 ml-2"
        >
          <g fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="3" />
            <path
              d="M13.765 2.152C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.617 1.617 0 0 1-.79 1.353a1.617 1.617 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.466.807-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555c.473.297.777.803.777 1.361c0 .558-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.617 1.617 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453c.466-.807.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.617 1.617 0 0 1 19.562 12c0-.558.304-1.064.777-1.36c.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 0 1-1.566-.008a1.617 1.617 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z"
            />
          </g>
        </svg>
        Settings
      </router-link>

      <router-link
        to="/login"
        @click="logout"
        class="block mt-4 py-3 mx-6 rounded-lg text-black bg-white hover:bg-blue-500 hover:text-white hover:border-blue-500 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
          class="fill-current h-6 w-6 mr-4 ml-2"
        >
          <path
            fill="currentColor"
            d="M120 128V48a8 8 0 0 1 16 0v80a8 8 0 0 1-16 0m60.37-78.7a8 8 0 0 0-8.74 13.4C194.74 77.77 208 101.57 208 128a80 80 0 0 1-160 0c0-26.43 13.26-50.23 36.37-65.3a8 8 0 0 0-8.74-13.4C47.9 67.38 32 96.06 32 128a96 96 0 0 0 192 0c0-31.94-15.9-60.62-43.63-78.7"
          />
        </svg>
        Logout
      </router-link>
    </div>
  </aside>
</template>
<script>
export default {
  methods: {
    logout() {
      // Clear localStorage
      localStorage.removeItem('userData');
      // Redirect to login page
      this.$router.push('/login'); // Replace with your login page route
    }
  }
};
</script>

<style scoped>
/* No changes here */
</style>