<template>
  <div class="menu">
    <MenuLink v-for="link in menuLinks" :key="link.name"
      :name="link.name"
      :href="link.href"
    ></MenuLink>
  </div>
</template>

<script>
import MenuLink from './MenuLink.vue';

export default {
  components: {
    MenuLink,
  },
  data() {
    return {
      menuLinks: [
        {
          name: 'Guitars',
          href: '/guitars',
        },
        {
          name: 'Accessories',
          href: '/accesories',
        },
        {
          name: 'Storage',
          href: '/storage',
        },
        {
          name: 'Lessons',
          href: '/lessons',
        },
        {
          name: 'Repairs',
          href: '/repairs',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.navigation {
  &__menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1225px) {
      display: none;
  }
}
</style>
