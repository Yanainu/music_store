<template>
  <header class="header">
    <BaseContainer>
      <TheNavigation/>

      <div class="header__main-text-container">
          <h1 class="header__main-text">Fullfilling dreams with strings attached</h1>
      </div>

      <div class="header__wide-banner">
        <WideBanner/>
      </div>
    </BaseContainer>
  </header>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import TheNavigation from '@/components/header/TheNavigation.vue';
import WideBanner from '@/components/header/WideBanner.vue';

export default {
  components: {
    BaseContainer,
    TheNavigation,
    WideBanner,
  },
};
</script>

<style lang="postcss" scoped>
.header {
  background: url(@/assets/images/header__background.jpg) no-repeat top center;
  background-size: cover;
  height: 808px;
  padding-top: 56px;
  margin-bottom: 110px;

  &__main-text {
    font-weight: 700;
    font-size: 56px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #FFFFFF;

    &-container {
      padding: 178px 0;
      width: 579px;
    }
  }

  @media (max-width: 1225px) {
    background: url(@/assets/images/header__background-mobile.jpg) no-repeat top center;
    background-size: cover;

    &__main-text-container {
        width: 400px;
    }
  }

  @media (max-width: 760px) {
    height: 507px;

    &__main-text-container {
      margin: auto;
      padding: 100px 0;
      max-width: 269px;
    }

    &__main-text {
      font-size: 32px;
      text-align: center;
      margin: auto 10%;
      max-width: 269px;
    }
  }
}
/*только позиционирование*/
.header__wide-banner {
  position: absolute;
  top: 600px;
  width: 87%;

  @media (max-width: 760px) {
    top: 398px;
  }
}
</style>
