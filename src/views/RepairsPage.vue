<template>
  <div class="repairs-page">
    <BaseHeader/>
      <SectionWrapper>
        <template v-slot:headText>
          News
        </template>

        <template v-slot:content>

          <article class="article">
            <h1 class="article__header">News Title</h1>
            <div class="article__content">
              <img class="article__img"
              src="../../public/img/otherpages/article.jpg" alt="guitars photo">

              <div class="article__description description">
                <h2 class="description__main-header">Main text</h2>
                <h3 class="description__header">Description/smaller header</h3>
                <h4 class="description__header">Description/smaller header</h4>
                <h5 class="description__header">Description/smaller header</h5>
                <h6 class="description__timestamp">Timestamp</h6>
              </div>

            </div>

          </article>

          <div class="text-content">
            <p class="text-content__paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Magni voluptate repudiandae accusantium ea, corrupti numquam natus consequuntur eius,
              debitis iusto unde at molestias, vel veniam delectus.
              Fugit ab harum debitis!
            </p>
            <p class="text-content__paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Magni voluptate repudiandae accusantium ea, corrupti numquam natus consequuntur eius,
              debitis iusto unde at molestias, vel veniam delectus.
              Fugit ab harum debitis!
            </p>
          </div>

          <blockquote class="blockquote">
            <p>"With great power comes great responsibility"</p>
            <cite>Ben Parker</cite>
          </blockquote>

        </template>
      </SectionWrapper>
  </div>

  <TheFooter/>
</template>

<script>
import BaseHeader from '@/components/UI/BaseHeader.vue';
import SectionWrapper from '@/components/UI/SectionWrapper.vue';
import TheFooter from '@/components/footer/TheFooter.vue';

export default {
  components: {
    BaseHeader,
    SectionWrapper,
    TheFooter,
  },
  created() {
    console.log(this.$route);
  },
};
</script>

<style lang="postcss" scoped>

.article {
  width: 100%;
  margin: auto;

  &__header {
    margin: 8px 0 28px 0;
    font-weight: 700;
    font-size: 30px;
    line-height: 120%;
    color: var(--dark-grey);
    text-align: center;
  }

  &__content {
    display: flex;
    justify-content: center;

    @media (max-width: 1110px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__img {
    max-width: 50%;
    max-height: 300px;

    @media (max-width: 1110px) {
      max-width: 100%;
    }
  }

}
.description {
  padding: 30px;
  padding-top: 0;

  &__header {
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
    margin: 0;
  }

  &__main-header {
    font-weight: 700;
    font-size: 28px;
    line-height: 120%;
    margin-bottom: 30px;
  }

  &__timestamp {
    color: var(--light-grey);
    font-weight: 400;
    font-size: 22px;
  }
}

.text-content {
  padding: 50px 0;

  &__paragraph{
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    color: var(--light-grey);
  }
}

.blockquote {
    border-left: 6px solid var(--light-grey);
    font-size: 16px;
    font-style: italic;
    margin: 16px;
    padding: 16px 24px;
    position: relative;
}
.blockquote:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -6px;
    height: 40px;
    background-color: #fff;
    width: 6px;
    margin-top: -1em;
}
.blockquote:after {
    content: "”";
    position: absolute;
    top: 50%;
    left: -20px;
    color: var(--light-grey);
    font-size: 50px;
    font-family: Times, sans-serif;
    font-weight: bold;
    line-height: 30px;
}
.blockquote cite {
    color: var(--dark-grey);
    font-size: 15px;
    padding-top: 10px;
    display: block;
    text-align: right;
}
</style>
