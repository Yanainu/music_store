<template>
    <div class="gear-heads__article article">
      <div class="article__pic-container" :class="picClassName">
        <!-- тут внутри фоновая картинка  -->
      </div>
      <div class="article__description-container" :class="descriptionMode">
        <h3 class="article__description-title" :class="titleMode">
            {{ title }}
          </h3>
        <p class="article__description-text" :class="textMode">
            {{ subhead }}
          </p>
      </div>
    </div>
</template>

<script>
export default {
  props: ['title', 'subhead', 'visualMode', 'picClassName'],
  computed: {
    descriptionMode() {
      if (this.visualMode === 'dark') {
        return 'article__description-container_darkmode';
      }
      return 'article__description-container_lightmode';
    },
    titleMode() {
      if (this.visualMode === 'dark') {
        return 'article__description-title_darkmode';
      }
      return 'article__description-title_lightmode';
    },
    textMode() {
      if (this.visualMode === 'dark') {
        return 'article__description-text_darkmode';
      }
      return 'article__description-text_lightmode';
    },
  },
};

</script>

<style lang="postcss" scoped>
.article {
  &__pic-container {
    height: 487px;
    /* background-size: cover;  тут не сработало, назначено в каждой картинке*/
    border-radius: 10px 10px 0 0;
  }
  &-pic1 {
    background: url(../../assets/images/main__gear-heads_photo1.jpg) 0 0 no-repeat;
  }
  &-pic2 {
    background: url(../../assets/images/main__gear-heads_photo2.jpg) 0 0 no-repeat;
  }
  &-pic3 {
    background: url(../../assets/images/main__gear-heads_photo3.jpg) 0 0 no-repeat;
  }
  &-pic4 {
    background: url(../../assets/images/main__gear-heads_photo4.jpg) 0 0 no-repeat;
  }
  &-pic5 {
    background: url(../../assets/images/main__gear-heads_photo5.jpg) 0 0 no-repeat;
  }
  &-pic1,
  &-pic2,
  &-pic3,
  &-pic4,
  &-pic5 {
    background-size: cover;
  }
}

.gear-heads {
  &__articles-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 32px;
    flex-grow: 1;
  }
  &__articles {
    display: flex;
    justify-content: space-between;
    padding: 32px 0 48px 0;
  }
  &__article {
    margin-bottom: 48px;
    margin-right: 32px;
    border-radius: 10px;
  }
  &__article:nth-child(1),
  &__article:nth-child(2) {
    width: 48%;
  }
  &__article:nth-child(3),
  &__article:nth-child(4),
  &__article:nth-child(5) {
    width: 31%;
  }
  &__article:nth-child(2),
  &__article:nth-child(5) {
    margin-right: 0;
  }

  @media (max-width: 1225px) {
    &__article:nth-child(3) {
      display: none;
    }
    &__article:nth-child(1),
    &__article:nth-child(2),
    &__article:nth-child(4),
    &__article:nth-child(5) {
      width: 47%;
  }

  @media (max-width: 760px) {
    &__articles-container {
      flex-direction: column;
    }
    .gear-heads__article:nth-child(1),
    .gear-heads__article:nth-child(2),
    .gear-heads__article:nth-child(3),
    .gear-heads__article:nth-child(4),
    .gear-heads__article:nth-child(5) {
      width: 100%;
      margin-right: 0;
    }
  }
}
}
/*описание articles общие классы*/
.article {
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
  /*описание на темном фоне*/
  .article__description-container_darkmode {
    background-color: var(--black);
  }
  .article__description-title_darkmode {
    color: #ffffff;
  }
  .article__description-text_darkmode {
    color: #c4c4c4;
  }
  /*описание на светлом фоне*/
  .article__description-container_lightmode {
    background-color: var(--white);
  }
  .article__description-title_lightmode {
    color: #202020;
  }
  .article__description-text_lightmode {
    color: #767676;
  }
}

.bottom-articles {
  padding: 0;
}

</style>
