<template>
 <li>
    {{ product.name }} - {{ product.price }}원
    <button @click="addToCart(product)">장바구니에 추가</button>
  </li>
</template>

<script>
export default {
props: {
  product: Object,
},
methods: {
  addToCart() {
    this.$emit('add-to-cart', this.product);
  },
},
};
</script>
