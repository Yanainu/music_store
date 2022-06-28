<template>
  <section :class="`section section--theme--${backTheme}`">
    <BaseContainer>
      <div class="section__head-text-container">
        <h2 class="section__head-text">
          <slot name="headText"></slot>
        </h2>
      </div>

      <div class="section__items-container">
        <slot name="content"></slot>
      </div>
    </BaseContainer>
  </section>
</template>

<script>
import BaseContainer from './BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  props: {
    headerText: {
      type: String,
      default: 'Products',
    },
    backTheme: {
      type: String,
      default: 'default',
    },
  },
};
</script>

<style lang="postcss" scoped>
.section {
  padding: 88px 0 80px 0;

  &__items-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 26px;
  }

  &--theme {
    &--grey {
      background-color: #ECECEC;
    }
  }

  &__head-text {
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
    color: var(--dark-grey);
    text-align: center;
  }

  &__head-text-container {
    padding: 8px 0 16px 0;

    &::before {
      content: '';
      width: 80px;
      height: 3px;
      background: #AB0433;
      margin: 0 auto;
      margin-bottom: 8px;
      display: block;

      @media (max-width: 1225px) {
        width: 28%;
      }
    }
  }

  @media (max-width: 760px) {
    padding: 56px 0 40px 0;

    &__items-container {
      flex-direction: column;
      padding-top: 26px;
    }

    &__head-text {
      font-size: 24px;

      &-container::before {
        width: 80px;
      }
    }
  }
}
</style>
