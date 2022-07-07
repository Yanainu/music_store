<template>
  <div class="menu__item">
      <router-link :to="href" :class="`menu__link menu__link--mode--${mode}`">
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
    mode: {
      type: String,
      default: 'default',
    },
  },
};
</script>

<style lang="postcss" scoped>
.menu {
  &__item {
    margin-right: 24px;
    padding: 16px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
      text-decoration: none;
      color: #FCFCFC;
      font-size: 18px;

      &--mode--dark {
        color: black;
      }
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
