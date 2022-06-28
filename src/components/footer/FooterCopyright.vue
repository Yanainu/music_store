<template>
    <div class="footer__copyright">
        <!-- <BaseContainer> -->
          <p class="footer__copyright-text">©2021 Music Store</p>
        <!-- </BaseContainer> -->
    </div>
</template>

<script>
// import BaseContainer from '../UI/BaseContainer.vue';

export default {
  components: {
    // BaseContainer,
  },
};
</script>

<style lang="postcss" scoped>

/*copyright*/
.footer__copyright {
    padding: 8px 0;
    background-color: var(--black);

    &-text {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 12.8px;
      line-height: 140%;
      color: #FFFFFF;
    }
    @media (max-width: 760px) {
      &-text {
        text-align: center;
      }
    }
}
</style>
