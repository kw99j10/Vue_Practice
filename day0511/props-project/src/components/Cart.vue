<template>
<div class="cart">
    <p>총 가격: {{ total }}</p>
    <h2>장바구니</h2>
    <div v-if="cartItems.length === 0">장바구니가 비어 있습니다.</div>
    <div v-else>
    <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <li>
            {{ item.name }} - {{ item.price }}원
            <button @click="removeFromCart(index)">삭제</button>
        </li>
    </div>
    </div>
</div>
</template>

<script>
export default {
props: {
    cartItems: Array,
    total: Number,
},
methods: {
    removeFromCart(index) {
    this.$emit('remove-from-cart', index);
    },
},
};
</script>