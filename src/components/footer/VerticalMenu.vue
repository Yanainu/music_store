<template>
  <div class="vertical-menu">
    <div class="vertical-menu__links-container">
      <h3 class="vertical-menu__link link-title">
        {{ title }}
      </h3>

      <a class="vertical-menu__link" :href="link.href"
        v-for="link in links" :key="link.title" >
          {{ link.title }}
      </a>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.vertical-menu {
  margin-right: 48px;

  &__links-container {
    display: flex;
    flex-direction: column;

    &::before {
      content: '';
      width: 58px;
      height: 3px;
      margin: 9px 0;
      background: #FFFFFF;
    }

    @media (max-width: 760px) {
      display: flex;
      flex-direction: column;
      text-align: center;

      &::before {
        content: "";
        width: 58px;
        height: 3px;
        margin: 9px auto;
        background: #ffffff;
      }
    }
  }
  /*link*/
  &__link {
    margin-bottom: 9px;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-decoration: none;
    color: #FFFFFF;

    @media (max-width: 760px) {
      margin-bottom: 9px;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      text-decoration: none;
      color: #ffffff;
    }
  }

  @media (max-width: 760px) {
    margin: auto;
  }
}

.link-title {
  font-weight: 700;

  @media (max-width: 760px) {
    font-weight: 700;
  }
}

</style>
