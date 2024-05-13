<script setup>
import { useCounterStore } from "@/stores/counter";
import AComponent from "@/components/AComponent.vue";
import BComponent from "@/components/BComponent.vue";
const store = useCounterStore();
console.log(store);
</script>

<template>
  <div>
    <h1>App입니다.</h1>
    <p>store count : {{ store.count }}</p>
    <p>store double count : {{store.doubleCount}}</p>
    <button @click="store.increment()">count 증가</button>
    <AComponent/>
    <BComponent/>
  </div>
</template>

<style scoped>
</style>
