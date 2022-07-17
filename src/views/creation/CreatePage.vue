<template>
  <BaseHeader/>
      <BaseContainer>

      <RouterView/>

    </BaseContainer>
  <TheFooter/>
</template>

<script>
import BaseHeader from '@/components/UI/BaseHeader.vue';
import TheFooter from '@/components/footer/TheFooter.vue';
import BaseContainer from '@/components/UI/BaseContainer.vue';

export default {
  components: {
    BaseHeader,
    TheFooter,
    BaseContainer,
  },
};
</script>
