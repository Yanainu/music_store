<template>
    <div class="socials">
      <SocialMediaLink
        v-for="social in socials" :key="social.href"
        :href="social.href"
        :iconUrl="social.iconUrl"
      ></SocialMediaLink>
    </div>
</template>

<script>
import SocialMediaLink from './SocialMediaLink.vue';

export default {
  components: {
    SocialMediaLink,
  },
  data() {
    return {
      socials: [
        {
          href: 'https://www.youtube.com/',
          iconUrl: '/img/footer__social_youtube-icon.svg',
        },
        {
          href: 'https://www.twitter.com/',
          iconUrl: '/img/footer__social_twi-icon.svg',
        },
        {
          href: 'https://www.instagram.com/',
          iconUrl: '/img/footer__social_inst-icon.svg',
        },
        {
          href: 'https://www.facebook.com/',
          iconUrl: '/img/footer__social_fb-icon.svg',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.socials {
    display: flex;
    justify-content: right;
    padding: 32px 0
}
</style>
