<template>
  <BaseHeader mode="guitars">
  </BaseHeader>

  <RouterView/>

  <TheFooter/>
</template>

<script>
import BaseHeader from '@/components/UI/BaseHeader.vue';
import TheFooter from '@/components/footer/TheFooter.vue';

export default {
  components: {
    BaseHeader,
    TheFooter,
  },
};
</script>
