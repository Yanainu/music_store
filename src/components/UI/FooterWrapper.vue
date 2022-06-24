<template>
    <footer class="footer">
      <BaseContainer>
        <FooterInfo></FooterInfo>
        <FooterInfoMobile></FooterInfoMobile>
      </BaseContainer>
    </footer>
</template>

<script>
import BaseContainer from './BaseContainer.vue';
import FooterInfo from '../footer/FooterInfo.vue';
import FooterInfoMobile from '../footer/FooterInfoMobile.vue';

export default {
  components: {
    BaseContainer,
    FooterInfo,
    FooterInfoMobile,
  },
};
</script>

<style lang="postcss" scoped>
.footer {
    background-color: var(--dark-grey);
}
</style>
