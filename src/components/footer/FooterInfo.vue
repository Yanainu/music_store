<template>
    <div class="footer-info">
      <!-- два столбика со ссылками  -->
      <div class="footer-info__vertical-menus">

        <VerticalMenu
          :links="footerLinks.account"
          title="My Account"
          >
        </VerticalMenu>

        <VerticalMenu
          :links="footerLinks.store"
          title="Store"
          >
        </VerticalMenu>
      </div>

      <div class="footer-info__logo-and-socials">
        <!-- logo  -->
        <div class="footer-info__logo-container ">
          <img class="footer-info__logo" src="../../assets/images/general__store-logo.svg"
            alt="store logo">
        </div>
        <FooterSocials/>
      </div>
    </div>

    <FooterInfoMobile
      :links="footerLinks.account">
    </FooterInfoMobile>
</template>

<script>
import VerticalMenu from './VerticalMenu.vue';
import FooterSocials from './FooterSocials.vue';
import FooterInfoMobile from './FooterInfoMobile.vue';

export default {
  components: {
    VerticalMenu,
    FooterSocials,
    FooterInfoMobile,
  },
  data() {
    return {
      footerLinks: {
        account: [
          {
            title: 'Overview',
            href: '/overview',
          },
          {
            title: 'Order History',
            href: '/order-history',
          },
          {
            title: 'Wishlist',
            href: '/wishlist',
          },
          {
            title: 'Account information',
            href: '/account-info',
          },
        ],
        store: [
          {
            title: 'Security Notice',
            href: '/security',
          },
          {
            title: 'Location & Hours',
            href: '/location-and-hours',
          },
          {
            title: 'Rentals',
            href: '/rentals',
          },
          {
            title: 'Privacy Notice',
            href: '/privacy',
          },
        ],
      },
    };
  },
};
</script>

<style lang="postcss" scoped>
.footer-info {
  display: flex;
  justify-content: space-between;
  padding: 52px 0;

  &__vertical-menus {
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

  @media (max-width: 760px) {
    display: none;
  }
}
</style>
