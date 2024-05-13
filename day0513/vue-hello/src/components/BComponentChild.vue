<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
</script>

<template>
    <div>
        <h1>BComponentChild입니다.</h1>
        <h3>BComponentChild store count : {{ store.count }}</h3>
        <button @click="store.increment()">BComponentChild count 증가</button>
    </div>
</template>

<style scoped>

</style>