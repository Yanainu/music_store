<template>
  <div class="menu__item" v-if="!userLoggedIn && !needLogin">
      <router-link
      :to="href"
      class="menu__link">
      {{ name }}
      </router-link>
  </div>

  <div class="menu__item" v-if="userLoggedIn">
    <router-link
    :to="href"
    class="menu__link">
    {{ name }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    needLogin: {
      type: Boolean,
      required: true,
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
};
</script>

<style lang="postcss" scoped>
.menu {
  &__item {
    margin-right: 14px;
    padding: 16px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
      text-decoration: none;
      color: #FCFCFC;
      font-size: 18px;
  }
}

.router-link-active {
    &::after {
      content: '';
      width: 100%;
      height: 4px;
      background: #ab0433;
      display: block;
    }
}
</style>
