<template>
  <!-- адаптивная версия -->
    <div class="mobile-info">
      <!-- my account block-->
      <VerticalMenu
        :links="links"
        title="My Account">
      </VerticalMenu>
      <!-- socials  -->
      <FooterSocials/>
    </div>
</template>

<script>
import FooterSocials from '@/components/footer/FooterSocials.vue';
import VerticalMenu from '@/components/footer/VerticalMenu.vue';

export default {
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    FooterSocials,
    VerticalMenu,
  },
  data() {
    return {
      socialLinks: [
        {
          href: '#',
          imgSrc: './img/footer__social_youtube-icon.svg',
          imgAlt: 'youtube link',
        },
        {
          href: '#',
          imgSrc: './img/footer__social_twi-icon.svg',
          imgAlt: 'twitter link',
        },
        {
          href: '#',
          imgSrc: './img/footer__social_inst-icon.svg',
          imgAlt: 'instagram link',
        },
        {
          href: '#',
          imgSrc: './img/footer__social_fb-icon.svg',
          imgAlt: 'facebook link',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
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
