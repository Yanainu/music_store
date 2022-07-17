<template>
  <nav class="navigation">
    <!-- logo&menu -->
    <div class="navigation__main">

      <div class="navigation__logo-container">
        <router-link to="/">
          <img class="navigation__logo"
              src="@/assets/images/general__store-logo.svg"
              alt="store logo">
        </router-link>
      </div>
      <div class="navigation__menu">
        <TheMenu/>
      </div>
    </div>
    <!-- auth&cart  -->
    <div class="navigation__buttons">
      <button class="navigation__button">
        <img class="navigation__button-icon"
          src="@/assets/images/header__cart-icon.svg"
          alt="cart icon">
      </button>

      <router-link class="router-link" :to="{
          name: $options.loginPage,
        }">
        <button v-if="!userLoggedIn" class="navigation__button">
          <img class="navigation__button-icon"
            src="@/assets/images/header__user-icon.svg"
            alt="authorize icon">
        </button>
      </router-link>

      <button class="navigation__button" v-if="userLoggedIn" @click="logout">
        Logout
      </button>

      <button class="navigation__button burger">
        <img src="@/assets/images/burger-menu-icon.svg" alt="burger menu">
      </button>
    </div>
  </nav>
</template>

<script>
import TheMenu from '@/components/header/TheMenu.vue';
import { LOGIN_PAGE } from '@/router/router-names';

export default {
  components: {
    TheMenu,
  },
  methods: {
    logout() {
      localStorage.removeItem('currentJwt');
      this.$router.go('/');
    },
  },
  data() {
    return {
      userLoggedIn: null,
    };
  },
  mounted() {
    if (localStorage.currentJwt) {
      this.userLoggedIn = true;
    }
  },
  loginPage: LOGIN_PAGE,
};
</script>

<style lang="postcss" scoped>
img {
  max-width: none;
}
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
        padding: 12px;
        background: none;
        border: none;
        cursor: pointer;
        color: #FCFCFC;
        font-size: 18px;

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
.label {
  color: white;
}
</style>
