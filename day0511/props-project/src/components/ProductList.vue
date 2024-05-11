<template>
<div class="product-list">
    <ProductListItem
    v-for="(product, index) in products"
    :key="index"
    :product="product"
    @add-to-cart="addToCart"
    />
</div>
</template>

<script>
import ProductListItem from './ProductListItem.vue';

export default {
components: {
    ProductListItem,
},
props: {
    products: Array,
},
methods: {
    addToCart(product) {
    this.$emit('add-to-cart', product);
    },
},
};
</script>
  