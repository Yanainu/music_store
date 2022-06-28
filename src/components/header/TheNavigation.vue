<template>
  <nav class="navigation">
    <!-- logo&menu -->
    <div class="navigation__main">

      <div class="navigation__logo-container">
          <img class="navigation__logo"
              src="../../assets/images/general__store-logo.svg"
              alt="store logo">
      </div>
      <div class="navigation__menu">
        <TheMenu/>
      </div>
    </div>
    <!-- auth&cart  -->
    <div class="navigation__buttons">
      <button class="navigation__button">
        <img class="navigation__button-icon"
          src="../../assets/images/header__cart-icon.svg"
          alt="cart icon">
      </button>

      <button class="navigation__button">
        <img class="navigation__button-icon"
          src="../../assets/images/header__user-icon.svg"
          alt="authorize icon">
      </button>

      <button class="navigation__button burger">
        <img src="../../assets/images/burger-menu-icon.svg" alt="burger menu">
      </button>
    </div>
  </nav>
</template>

<script>
import TheMenu from './TheMenu.vue';

export default {
  components: {
    TheMenu,
  },
};
</script>

<style lang="postcss" scoped>
.navigation {
    display: flex;
    justify-content: space-between;

    &__main {
        display: flex;
        justify-content: space-between;
    }

    &__logo-container {
        padding-right: 24px;
    }

    &__buttons {
        display: flex;
    }

    &__button {
        padding: 8px;
        background: none;
        border: none;
        cursor: pointer;

        &-container {
        padding: 8px;
    }
    }

    @media (max-width: 1225px) {
        &__button {
            display: none;
        }
    }

    @media (max-width: 760px) {
        &__logo {
            width: 153.2px;
            height: 24px;
        }
    }
}
.burger {
    display: none;

    @media (max-width: 1225px) {
        display: block;
    }
}
</style>
