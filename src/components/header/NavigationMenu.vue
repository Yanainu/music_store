<template>
    <div class="navigation__menu">
        <div class="menu">
            <NavigationMenuItem v-for="item in navMenuItems" :key="item.name"
                :name="item.name"
                :link="item.link"
            ></NavigationMenuItem>
        </div>
    </div>
</template>

<script>
import NavigationMenuItem from './NavigationMenuItem.vue';

export default {
  components: {
    NavigationMenuItem,
  },
  data() {
    return {
      navMenuItems: [
        {
          name: 'Guitars',
          link: '#',
        },
        {
          name: 'Accessories',
          link: '#',
        },
        {
          name: 'Storage',
          link: '#',
        },
        {
          name: 'Lessons',
          link: '#',
        },
        {
          name: 'Repairs',
          link: '#',
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
