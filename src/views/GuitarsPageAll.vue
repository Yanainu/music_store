<template>
  <SectionWrapper>
    <template v-slot:headText>
      Guitars
    </template>
    <template v-slot:content>
      <GuitarPreview v-for="product in products" :key="product.id"
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
import { getData, formatProductsData } from '@/helpers/utils';
import SectionWrapper from '@/components/UI/SectionWrapper.vue';
import GuitarPreview from '@/components/main/GuitarPreview.vue';

export default {
  components: {
    SectionWrapper,
    GuitarPreview,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    getData('http://localhost:1337/api/guitars').then((result) => {
      this.products = formatProductsData(result);
    });
  },
};
</script>

<style>

</style>
