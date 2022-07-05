<template>
  <ProductPreview v-for="product in products" :key="product.img"
    :name="product.name"
    :price="product.price"
    :description="product.description"
    :colors="product.colors"
    :img="product.img"
    :id="product.id"
    :theme="theme"
    :mode="mode"
  ></ProductPreview>
</template>

<script>
import ProductPreview from '@/components/main/ProductPreview.vue';

export default {
  components: {
    ProductPreview,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    theme: {
      type: String,
      default: 'white',
    },
    mode: {
      type: String,
      default: '',
    },
  },
};
</script>
