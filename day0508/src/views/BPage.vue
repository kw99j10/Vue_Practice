!<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const myClick = (type) => {
    alert(type + '선택됨!');

    if (type == 'blog') {
        router.push({name: type});
    }else if (type == 'shop') {
        router.push({name: type});
    }else if (type == 'weather') {
        router.push({name: type});
    }
}
</script>

<template>
    <div>
        <h1>B page 입니다!</h1>
        <button @click="myClick('blog')">블로그</button>
        <button @click="myClick('shop')">쇼핑</button>
        <button @click="myClick('weather')">날씨</button>
        <div class="b">
        <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
*{
  width: 100%;
  height: 100%;
  background-color: aliceblue;
}

.b{
    width:500px;
    height:300px;
    background-color: blueviolet;
}
</style>