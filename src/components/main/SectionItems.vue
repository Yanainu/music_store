<template>
  <ProductItem v-for="product in products" :key="product.img"
    :name="product.name"
    :price="product.price"
    :description="product.description"
    :colors="product.colors"
    :img="product.img"
    :theme="cardsTheme"
  ></ProductItem>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    cardsTheme: {
      type: String,
      default: 'default',
    },
  },
};
</script>
