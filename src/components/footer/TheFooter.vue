<template>
  <footer class="footer">
    <h2>lorem;lakjdf;alksdjf;aldkjf;alksdjf;alskjg;slfkhs;lkfdh;alfkg;alksdfja;djfa;kdjf;alksd</h2>
    <BaseContainer>
      <FooterInfo></FooterInfo>
    </BaseContainer>
    <FooterCopyright></FooterCopyright>
  </footer>
</template>

<script>
import BaseContainer from '../UI/BaseContainer.vue';
import FooterInfo from './FooterInfo.vue';
import FooterCopyright from './FooterCopyright.vue';

export default {
  components: {
    FooterInfo,
    FooterCopyright,
    BaseContainer,
  },
};
</script>

<style lang="postcss" scoped>
.footer {
  background-color: var(--dark-grey);
}
</style>
