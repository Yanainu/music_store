<template>
    <div class="footer__all-info footer-info">
      <!-- два столбика со ссылками  -->
      <div class="footer-info__left-blocks left-blocks">
        <!-- my account столбик  -->
        <FooterLinksBlock
          :blockObject="linkBlocks[0]">
        </FooterLinksBlock>
        <!-- store столбик -->
        <FooterLinksBlock
          :blockObject="linkBlocks[1]">
        </FooterLinksBlock>
      </div>

      <div class="footer-info__logo-and-socials">
        <!-- logo  -->
        <div class="footer-info__logo-container ">
          <img class="footer-info__logo" src="../../assets/images/general__store-logo.svg"
            alt="store logo">
        </div>
        <FooterSocials></FooterSocials>
      </div>
    </div>

    <FooterInfoMobile
      :blockObject="linkBlocks[0]">
    </FooterInfoMobile>
</template>

<script>
import FooterLinksBlock from './FooterLinksBlock.vue';
import FooterSocials from './FooterSocialIcon.vue';
import FooterInfoMobile from './FooterInfoMobile.vue';

export default {
  components: {
    FooterLinksBlock,
    FooterSocials,
    FooterInfoMobile,
  },
  data() {
    return {
      linkBlocks: [
        {
          title: 'My Account',
          link1: 'Overview',
          link2: 'Order History',
          link3: 'Wishlist',
          link4: 'Account information',
        },
        {
          title: 'Store',
          link1: 'Security Notice',
          link2: 'Location & Hours',
          link3: 'Rentals',
          link4: 'Privacy Notice',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.footer__all-info {
    display: flex;
    justify-content: space-between;
    padding: 52px 0;

    @media (max-width: 760px) {
      display: none;
    }
}
.footer-info {
  &__left-blocks {
    display: flex;
  }
  &__logo-and-socials {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  &__logo-container {
      padding: 27px 0;
  }
}
</style>
