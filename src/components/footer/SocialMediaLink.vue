<template>
  <div class="socials__link-container">
    <a class="socials__link" :href="href">
      <img class="socials__link-icon" :src="iconUrl" alt="icon">
    </a>
    </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#',
    },
    iconUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.socials__link-container {
    padding-left: 12px;
}
</style>
