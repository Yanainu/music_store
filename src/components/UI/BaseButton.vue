<template>
  <button :class="`base-button base-button--${size}`">
      <slot name="button"></slot>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'large',
    },
  },
};
</script>

<style lang="postcss" scoped>
.base-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  color: #FFFFFF;
  background: var(--orange);
  border-radius: 32px;
  border: 0px;
  line-height: 130%;

  &--large {
    font-size: 18px;
    padding: 16px 24px;
  }
  &--medium {
    font-size: 14px;
    padding: 12px 16px;
  }
  &--small {
    font-size: 12px;
    padding: 8px 12px;
  }
}
</style>
