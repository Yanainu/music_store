<template>
  <SectionWrapper>
    <template v-slot:headText>
      Guitars
    </template>
    <template v-slot:content>
      <GuitarPreview v-for="product in products" :key="product.img"
        :name="product.name"
        :price="product.price"
        :description="product.description"
        :colors="product.colors"
        :img="product.img"
        :id="product.id"
        theme="grey"
      ></GuitarPreview>
    </template>
  </SectionWrapper>
</template>

<script>
import products from '@/helpers/products.';
import SectionWrapper from '@/components/UI/SectionWrapper.vue';
import GuitarPreview from '@/components/main/GuitarPreview.vue';

export default {
  components: {
    SectionWrapper,
    GuitarPreview,
  },
  data() {
    return {
      products,
    };
  },
};
</script>

<style>

</style>
