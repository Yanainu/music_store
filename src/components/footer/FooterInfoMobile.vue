<template>
    <!-- адаптивная версия -->
        <div class="footer__mobile-info mobile-info">
          <!-- my account block      -->
          <FooterLinksBlock
            :blockObject="blockObject">
          </FooterLinksBlock>
          <!-- socials  -->
          <div class="footer-info__socials-container socials">
            <FooterSocialIcon v-for="socialLink in socialLinks" :key="socialLink.imgSrc"
              :link="socialLink.link"
              :imgSrc="socialLink.imgSrc"
              :imgAlt="socialLink.imgAlt">
            </FooterSocialIcon>
          </div>
        </div>
</template>

<script>
import FooterSocialIcon from './FooterSocialIcon.vue';
import FooterLinksBlock from './FooterLinksBlock.vue';

export default {
  props: ['blockObject'],
  components: {
    FooterSocialIcon,
    FooterLinksBlock,
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
