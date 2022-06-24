<template>
    <!-- socials  -->
    <!-- <div class="footer-info__socials-container socials"> -->
      <div class="socials__link-container">
        <a class="socials__link" :href="link">
          <img class="socials__link-icon"
          :src="imgSrc" :alt="imgAlt">
        </a>
      </div>
    <!-- </div> -->
</template>

<script>
export default {
  props: ['link', 'imgSrc', 'imgAlt'],
};
</script>

<style lang="postcss" scoped>

.socials__link-container {
    padding-left: 12px;
}

</style>
