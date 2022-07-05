<template>
    <SectionWrapper>
    <template v-slot:headText>
      Guitars
    </template>
    <template v-slot:content>
      <SectionItems
        :products="products"
        theme="grey"
      ></SectionItems>
    </template>
  </SectionWrapper>
</template>

<script>
import products from '@/helpers/products.';
import SectionWrapper from '@/components/UI/SectionWrapper.vue';
import SectionItems from '@/components/main/SectionItems.vue';

export default {
  components: {
    SectionWrapper,
    SectionItems,
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
