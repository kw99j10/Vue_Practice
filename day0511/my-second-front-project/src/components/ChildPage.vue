<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  children: Array
});
</script>

<template>
  <div>
    <div v-for="(child, index) in children" :key="index">
        <h3>자식 페이지입니다.</h3>
      <p>이름: {{ child.name }}</p>
      <p>나이: {{ child.age }}</p>
      <hr>
    </div>
  </div>
</template>

<style scoped>

</style>
