<script setup>
import SidebarComponent from "/src/components/User/SidebarComponent.vue";
import NavbarComponent from "/src/components/User/NavbarComponent.vue";
</script>

<template>
  <div class="flex flex-wrap">
    <SidebarComponent />
    <NavbarComponent />
    <div class="w-full min-h-screen ml-[240px] mt-16 p-10 m-1 bg-gray-100">
      <router-view></router-view>
    </div>
  </div>
</template>