<script setup>
import { useNaverStore } from "@/stores/naver";
import { storeToRefs } from "pinia";

const naverStore = useNaverStore();
const { keyword } = storeToRefs(naverStore);
const { search } = naverStore;
</script>

<template>
  <div>
    <h2>네이버 검색 화면</h2>
    <input type="text" v-model="keyword" @keydown.enter="search" />
    <button @click="search">검색</button>
  </div>
</template>

<style scoped></style>
