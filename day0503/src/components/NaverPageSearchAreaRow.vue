<script setup>
    //부모가 주는 데이터를 받아옴
defineProps({money:Object});
</script>

<template>
    <tr>
        <td><img :src="money.image" width="150px" height="170px" /></td>
        <td v-html="money.title"></td>
        <td>{{ money.lprice }}</td>
        <td><a :href="money.link">바로가기</a></td>
    </tr>
</template>

<style scoped>

</style>