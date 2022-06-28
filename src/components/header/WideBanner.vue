<template>
  <div class="wide-banner">
    <div class="wide-banner__text-container">
      <h2 class="wide-banner__main-text">FREE GUITAR LESSONS!</h2>
      <p class="wide-banner__description">
          Purchase any guitar over $499.99 and recieve a one-hour guitar lesson free.
      </p>
      <button class="wide-banner__button">LEARN MORE</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.wide-banner {
  background-color: var(--red);
  background: url(../../assets/images/banner-background.jpg);
  background-size: 100% 100%;
  border: 1px solid #000000;
  box-shadow: 0px 2px 4px rgba(6, 6, 8, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 49px 32px;

  &__text-container {
    max-width: 616px;
    color: #FFFFFF;
    text-align: center;
  }

  &__main-text {
    font-weight: 700;
    font-size: 46px;
    line-height: 120%;
    margin-bottom: 4px;
  }

  &__description {
    line-height: 149%;
    font-size: 24px;
    margin-bottom: 16px;
  }

  &__button {
    background-color: var(--orange);
    border-radius: 32px;
    border: none;
    padding: 8px 16px;

    color: #FFFFFF;
    line-height: 130%;
    font-size: 14px;
  }

  @media (max-width: 760px) {
    padding: 18px 0;

    &__main-text {
      font-size: 21px;
    }
    &__description {
      font-size: 10px;
    }
    &__button {
      font-size: 12px;
    }
    &__text-container {
      max-width: 216px;
    }
  }
}
</style>
