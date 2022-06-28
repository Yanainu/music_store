<template>
  <div class="menu__item">
      <a class="menu__link" :href="href">{{ name }}</a>
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
  }
}
</style>
