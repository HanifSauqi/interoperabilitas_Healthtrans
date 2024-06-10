<template>
  <div
    class="fixed z-10 w-full bg-white h-16 flex justify-between items-center px-4"
  >
    <div class="flex items-center justify-end space-x-4 w-full mr-4">
      <img
        class="w-10 h-10 rounded-full mr-2"
        src="\src\assets\profilePict.png"
        alt="Profile Picture"
      />
      <div>
        <p class="font-bold">Hanif</p>
        <p class="text-sm text-gray-500">Admin</p>
      </div>
      <div class="ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          class="w-6 h-6 fill-current text-gray-500"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          >
            <path d="m8.5 11l3.5 3.5l3.5-3.5" />
            <path
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  // Add your component logic here
};
</script>

<style scoped>
/* Add your component styles here */
</style>
