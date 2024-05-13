<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
</script>

<template>
    <div>
        <h1>AComponent입니다.</h1>
        <h3>Acomponent store count : {{ store.count }}</h3>
        <button @click="store.increment()">Acomponent count증가</button>
    </div>
</template>

<style scoped>

</style>