<template>
  <div class="menu__item">
      <a class="menu__link" href="#">{{ name }}</a>
  </div>
</template>

<script>
export default {
  props: ['name', 'link'],
};
</script>

<style lang="postcss" scoped>
.menu {
  &__item {
  margin-right: 24px;
  padding: 16px;
  }
  &__item:last-child {
      margin-right: 0;
  }
  &__link {
      text-decoration: none;
      color: #FCFCFC;
      font-size: 18px;
  }
}
</style>
