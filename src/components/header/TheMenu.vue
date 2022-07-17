<template>
  <div class="menu">
    <MenuLink v-for="link in menuLinks" :key="link.name"
      :name="link.name"
      :href="link.href"
      :needLogin="link.needLogin"
    ></MenuLink>
  </div>
</template>

<script>
import MenuLink from '@/components/header/MenuLink.vue';

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
          needLogin: false,
        },
        {
          name: 'Accessories',
          href: '/accessories',
          needLogin: false,
        },
        {
          name: 'Lessons',
          href: '/lessons',
          needLogin: false,
        },
        {
          name: 'Repairs',
          href: '/repairs',
          needLogin: false,
        },
        {
          name: 'Create',
          href: '/create',
          needLogin: true,
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
