<template>
  <BaseHeader mode="guitars">
  </BaseHeader>

  <router-view></router-view>

  <TheFooter/>
</template>

<script>
import BaseHeader from '@/components/UI/BaseHeader.vue';
import TheFooter from '@/components/footer/TheFooter.vue';
import products from '@/helpers/products.';

export default {
  components: {
    BaseHeader,
    TheFooter,
  },
  data() {
    return {
      products,
    };
  },
};
</script>
