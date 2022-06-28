<template>
    <!-- адаптивная версия -->
        <div class="footer__mobile-info mobile-info">
          <!-- my account block-->
          <VerticalMenu
            :links="links">
          </VerticalMenu>
          <!-- socials  -->
          <div class="footer-info__socials-container socials">
            <FooterSocials v-for="socialLink in socialLinks" :key="socialLink.imgSrc"
              :link="socialLink.link"
              :imgSrc="socialLink.imgSrc"
              :imgAlt="socialLink.imgAlt">
            </FooterSocials>
          </div>
        </div>
</template>

<script>
import FooterSocials from './FooterSocials.vue';
import VerticalMenu from './VerticalMenu.vue';

export default {
  props: ['blockObject'],
  components: {
    FooterSocials,
    VerticalMenu,
  },
  data() {
    return {
      socialLinks: [
        {
          link: '#',
          imgSrc: './img/footer__social_youtube-icon.svg',
          imgAlt: 'youtube link',
        },
        {
          link: '#',
          imgSrc: './img/footer__social_twi-icon.svg',
          imgAlt: 'twitter link',
        },
        {
          link: '#',
          imgSrc: './img/footer__social_inst-icon.svg',
          imgAlt: 'instagram link',
        },
        {
          link: '#',
          imgSrc: './img/footer__social_fb-icon.svg',
          imgAlt: 'facebook link',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.footer-info__socials-container {
    display: flex;
    justify-content: right;
    padding: 32px 0
}
.mobile-info {
  display: none;

  @media (max-width: 760px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 37px;
  }
}

</style>
