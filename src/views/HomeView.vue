<template>
  <div>
    <!-- приблизительная структура страницы пока  -->
    <the-header></the-header>

    <main class="main">
      <base-container>
        <SectionWrapper>
          ПРИВЕТ
        </SectionWrapper>
      </base-container>
    </main>
  </div>
</template>

<script>
import SectionWrapper from '@/components/UI/SectionWrapper.vue';
import TheHeader from '../components/header/TheHeader.vue';
import BaseContainer from '../components/UI/BaseContainer.vue';
// import SectionItems from '../components/main/SectionItems.vue';

export default {
  components: {
    TheHeader,
    BaseContainer,
    SectionWrapper,
    // SectionItems,
  },
};
</script>

<style lang="postcss" scoped>
</style>
