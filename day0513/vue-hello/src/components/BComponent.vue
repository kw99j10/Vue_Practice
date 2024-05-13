<script setup>
import { useCounterStore } from "@/stores/counter";
import BComponentChild from "@/components/BComponentChild.vue";
const store = useCounterStore();
</script>

<template>
    <div>
        <h1>BComponent입니다.</h1>
        <h3>Bcomponent store count : {{ store.count }}</h3>
        <BComponentChild/>
    </div>
</template>

<style scoped>

</style>