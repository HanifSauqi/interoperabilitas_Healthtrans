<template>
  <div class="h-[863px] w-[1144px] flex flex-col items-start justify-start gap-[41px]">
    <div class="w-[1144px] h-[225px] flex flex-col items-start justify-start gap-[20px]">
      <div class="w-[321px] h-11 flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border">
        <b class="h-11 w-[600px] relative tracking-[-0.11px] font-bold inline-block z-[1] text-[30px]">Pertolongan Pertama</b>
      </div>
      <div class="w-[1144px] h-[161px] flex flex-row items-start justify-start gap-[26px] text-base text-gray-200">
        <!-- Dynamically generated boxes -->
        <div v-for="item in items" :key="item.id" @click="selectItem(item)"
             class="h-[163px] w-[264px] shadow-[6px_6px_54px_rgba(0,_0,_0,_0.05)] rounded-sm bg-white box-border flex flex-col items-start justify-start pt-4 px-4 pb-5 gap-[10px] z-[1] border-[2px] border-solid border-cornflowerblue cursor-pointer">
          <b class="w-[138px] h-[22px] relative font-semibold inline-block mix-blend-normal z-[1] text-black">{{ item.judul }}</b>
          <div class="w-[220px] h-[93px] flex flex-row items-start justify-start py-0 pr-0 pl-4 box-border">
            <img :src="`http://127.0.0.1:8000${item.gambar}`" class="h-[93px] w-[204px] relative rounded-3xs object-cover z-[2]" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
    <!-- MAIN CONTENT -->
    <div class="w-[1144px] h-[597px] shadow-[6px_6px_54px_rgba(0,_0,_0,_0.05)] rounded-sm bg-white flex flex-col items-start justify-start pt-[25px] px-7 pb-[34px] box-border gap-[19px] z-[1] text-black">
      <h1 class="m-0 w-[763px] h-11 relative text-inherit font-bold font-inherit inline-block shrink-0 z-[2] text-[28px]">{{ selectedItem.judul }}</h1>
      <div class="w-[1078px] h-[475px] flex flex-row items-start justify-start gap-[37px] text-justify text-base">
        <img :src="`http://127.0.0.1:8000${selectedItem.gambar}`" class="h-[475px] w-[736px] relative rounded-3xs object-cover z-[2]" loading="lazy" />
        <div class="h-[426px] w-[305px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
          <div class="w-[305px] h-[423px] relative inline-block z-[2]">{{ selectedItem.deskripsi }}</div>
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
      selectedItem: {
        judul: '',
        deskripsi: '',
        gambar: ''
      }
    };
  },
  methods: {
    fetchItems() {
      axios.get('http://127.0.0.1:8000/api/pertolongan-pertama')
        .then(response => {
          this.items = response.data.data;
          console.log(this.items);
          if (this.items.length > 0) {
            this.selectedItem = this.items[0]; // Select the first item by default
          }
        })
        .catch(error => console.error('Error fetching data:', error));
    },
    selectItem(item) {
      this.selectedItem = item;
    }
  },
  mounted() {
    this.fetchItems();
  }
};
</script>

<style scoped>
/* CSS Anda di sini */
</style>
