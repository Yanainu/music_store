<template>

  <footer class="footer">
    <h2>test</h2>
    <BaseContainer>
        <div class="footer-info">
          <div class="footer-info__vertical-menus">
            <VerticalMenu
              :links="footerLinks.account"
              title="My Account">
            </VerticalMenu>
            <VerticalMenu
              :links="footerLinks.store"
              title="Store">
            </VerticalMenu>
          </div>

          <!-- два столбика со ссылками  -->
          <div class="footer-info__logo-and-socials">
            <!-- logo  -->
            <div class="footer-info__logo-container ">
              <img class="footer-info__logo" src="../../assets/images/general__store-logo.svg"
              alt="store logo">
            </div>
            <!-- socials  -->
            <FooterSocials/>
          </div>
        </div>

      <FooterInfoMobile
        :links="footerLinks.account">
      </FooterInfoMobile>
    </BaseContainer>

    <div class="footer__copyright">
      <BaseContainer>
        <p class="footer__copyright-text">©2021 Music Store</p>
      </BaseContainer>
    </div>
  </footer>
</template>

<script>
import BaseContainer from '../UI/BaseContainer.vue';
import VerticalMenu from './VerticalMenu.vue';
import FooterSocials from './FooterSocials.vue';

export default {
  components: {
    BaseContainer,
    VerticalMenu,
    FooterSocials,
  },
};
</script>

<style lang="postcss" scoped>
.footer {
  background-color: var(--dark-grey);
}
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

h2 {
  font-size: 100px;
}
</style>
