<template>
  <router-view></router-view>
</template>

<script>
export default {
  unmounted() {
    localStorage.removeItem('currentJwt');
  },
};
</script>

<style lang="postcss">
  @import '@/assets/styles/style.postcss';
</style>
