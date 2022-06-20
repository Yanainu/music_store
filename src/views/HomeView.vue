<template>
  <div></div>
</template>

<style lang="postcss">
.nav {
    display: flex;
    justify-content: space-between;

    &__logo-and-menu {
        display: flex;
        justify-content: space-between;
    }

    &__logo-container {
        padding-right: 24px;
    }

    &__button-container {
        padding: 8px;
    }

    &__buttons {
        display: flex;
    }

    &__button {
        padding: 8px;
        background: none;
        border: none;
        cursor: pointer;
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
