<template>
    <footer class="footer">
      <base-container>
        <footer-info-desktop></footer-info-desktop>
        <footer-info-mobile></footer-info-mobile>
      </base-container>
    </footer>
</template>

<script>
import BaseContainer from './BaseContainer.vue';
import FooterInfoDesktop from '../footer/FooterInfoDesktop.vue';
import FooterInfoMobile from '../footer/FooterInfoMobile.vue';
export default {
  components: {
    BaseContainer,
    FooterInfoDesktop,
    FooterInfoMobile,
  }
}
</script>

<style lang="postcss" scoped>
.footer {
    background-color: var(--dark-grey);
}
</style>