<template>
  <div :class="`article article--theme--${theme}`">
    <div class="article__pic-container" :style="imgStyle">
    </div>

    <div class="article__description-container">
      <h3 class="article__description-title">
        {{ title }}
      </h3>
      <p class="article__description-text">
        {{ subhead }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subhead: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: 'light',
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      imgStyle: {
        backgroundImage: `url(${this.imageUrl})`,
        backgroundSize: 'cover',
      },
    };
  },
};
</script>

<style lang="postcss" scoped>
.article {
  margin-bottom: 48px;
  margin-right: 32px;
  border-radius: 10px;

  &__pic-container {
    height: 487px;
    border-radius: 10px 10px 0 0;
  }

  &:nth-child(1),
  &:nth-child(2) {
    width: 48%;
  }
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    width: 31%;
  }
  &:nth-child(2),
  &:nth-child(5) {
    margin-right: 0;
  }

  &__description-container {
    border-radius: 0px 0px 10px 10px;
    padding: 32px;
  }
  &__description-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
  }
  &__description-text {
    padding-top: 4px;
    font-size: 18px;
    line-height: 130%;
  }

  &--theme {
    &--dark {
      .article__description-container {
        background-color: var(--black);
      }
      .article__description-title {
        color: #ffffff;
      }
      .article__description-text {
        color: #c4c4c4;
      }
    }
    &--light {
      .article__description-container {
        background-color: var(--white);
      }
      .article__description-title {
        color: #202020;
      }
      .article__description-text {
        color: #767676;
      }
    }
  }

  @media (max-width: 1225px) {
    &:nth-child(3) {
      display: none;
    }
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(5) {
      width: 47%;
  }

  @media (max-width: 760px) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      width: 100%;
      margin-right: 0;
    }
  }
}
}
</style>
