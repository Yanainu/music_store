<template>
  <section :class="`section section--theme--${theme}`">
    <BaseContainer>
      <div class="`section__head-text-container">
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
import BaseContainer from '@/components/UI/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  props: {
    headerText: {
      type: String,
      default: 'Products',
    },
    theme: {
      type: String,
      default: 'default',
    },
    mode: {
      type: String,
      default: 'default',
    },
  },
};
</script>

<style lang="postcss" scoped>
.section {
  padding: 88px 0 80px 0;

  &--theme {
    &--grey {
      background-color: #ECECEC;
    }
  }
  @media (max-width: 760px) {
    padding: 56px 0 40px 0;
  }

  &::before {
    content: '';
    width: 80px;
    height: 3px;
    background: #ab0433;
    margin: 0 auto;
    margin-bottom: 8px;
    display: block;

    @media (max-width: 1225px) {
      width: 28%;
    }

    @media (max-width: 760px) {
      width: 80px;
    }
  }
}
.section__head-text {
  margin: 8px 0 28px 0;
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  color: var(--dark-grey);
  text-align: center;

  @media (max-width: 760px) {
    font-size: 24px;
  }
}
.section__items-container {
  display: flex;
  flex-wrap: wrap;
  padding-top: 26px;
  padding: 0 5px;
  justify-content: space-between;

  @media (max-width: 760px) {
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 26px;
  }

}

</style>
