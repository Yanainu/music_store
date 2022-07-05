<template>
    <div :class="`base-header base-header--${mode}`">
      <BaseContainer>
        <TheNavigation/>
      </BaseContainer>
    </div>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import TheNavigation from '@/components/header/TheNavigation.vue';

export default {
  components: {
    BaseContainer,
    TheNavigation,
  },
  props: {
    mode: {
      type: String,
      default: 'black',
    },
  },
};
</script>

<style lang="postcss" scoped>
.base-header {
  padding: 30px 0;

  &--black {
    background: black;
  }

  &--guitars {
    background: url(@/assets/images/otherpages/header.JPG) no-repeat top center;
    background-size: cover;
  }
  &--accessories {
    background: url('@/assets/images/otherpages/3.jpg') no-repeat top center;
    background-size: cover;
  }
  &--lessons {
    background: url('@/assets/images/otherpages/2.jpg') no-repeat top center;
    background-size: cover;
  }
  &--repairs {
    background: url('@/assets/images/otherpages/2.jpg') no-repeat top center;
    background-size: cover;
  }
}

</style>
