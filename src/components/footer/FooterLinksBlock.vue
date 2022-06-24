<template>
    <div class="left-blocks__block block">
      <div class="block__navigation-container">
        <h3 class="block__navigation-link block__navigation-link_title">{{ blockObject.title }}</h3>
        <a class="block__navigation-link" href="#">{{ blockObject.link1 }}</a>
        <a class="block__navigation-link" href="#">{{ blockObject.link2 }}</a>
        <a class="block__navigation-link" href="#">{{ blockObject.link3 }}</a>
        <a class="block__navigation-link" href="#">{{ blockObject.link4 }}</a>
      </div>
    </div>
</template>

<script>
export default {
  props: ['blockObject', 'mode'],
  computed: {

  },
};
</script>

<style lang="postcss" scoped>
.left-blocks__block {
    margin-right: 48px;

    @media (max-width: 760px) {
      margin: auto;
    }
}

.block__navigation {
  &-container {
      display: flex;
      flex-direction: column;
  }
  &-link {
      margin-bottom: 9px;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      text-decoration: none;
      color: #FFFFFF;
  }
  &-link_title {
      font-weight: 700;
  }

  &-container::before {
      content: '';
      width: 58px;
      height: 3px;
      margin: 9px 0;
      background: #FFFFFF;
  }

  @media (max-width: 760px) {
    &-container {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    &-link {
      margin-bottom: 9px;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      text-decoration: none;
      color: #ffffff;
    }
    &-link_title {
      font-weight: 700;
    }

    &-container::before {
      content: "";
      width: 58px;
      height: 3px;
      margin: 9px auto;
      background: #ffffff;
    }
  }
}
</style>
