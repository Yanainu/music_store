<template>
  <SectionWrapper mode="articles">
    <template v-slot:headText>
      About one lesson
    </template>
    <template v-slot:content>
      <div class="article">
        <div class="article__pic-container">
          <img class="article__pic"
          :src="currentArticleData.imageUrl"
          alt="lesson photo">
        </div>

        <div class="article__description-container description">
          <h3 class="description__title">{{ currentArticleData.title }}</h3>
          <p class="description__subtitle">{{ currentArticleData.subhead }}</p>
          <p class="description__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis cumque neque, quos magni nam enim nihil inventore a.
            Dolore praesentium alias voluptatem iusto neque perspiciatis
            magni minus similique temporibus magnam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis cumque neque, quos magni nam enim nihil inventore a.
            Dolore praesentium alias voluptatem iusto neque perspiciatis
            magni minus similique temporibus magnam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis cumque neque, quos magni nam enim nihil inventore a.
            Dolore praesentium alias voluptatem iusto neque perspiciatis
            magni minus similique temporibus magnam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis cumque neque, quos magni nam enim nihil inventore a.
            Dolore praesentium alias voluptatem iusto neque perspiciatis
            magni minus similique temporibus magnam?
          </p>
          <p class="description__copyright">
            Author/date
          </p>
        </div>
      </div>
    </template>
  </SectionWrapper>
</template>

<script>
import SectionWrapper from '@/components/UI/SectionWrapper.vue';
import { formatOneLessonData, getDetailsById } from '@/helpers/utils';

export default {
  components: {
    SectionWrapper,
  },
  data() {
    return {
      currentArticleData: {},
    };
  },
  mounted() {
    getDetailsById(this.$route.params.id, 'articles').then((result) => {
      this.currentArticleData = formatOneLessonData(result);
    });
  },
};
</script>

<style lang="postcss" scoped>
.article {
  margin-bottom: 48px;
  margin-right: 32px;
  border-radius: 10px;

  &__pic-container {
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
  }
}
.description {
  &-container {
    border-radius: 0px 0px 10px 10px;
    padding: 32px;
  }
  &__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 130%;
    text-align: center;
    margin: 30px 0;
  }
  &__subtitle {
    padding-top: 4px;
    font-size: 28px;
    line-height: 130%;
    text-align: center;
  }
  &__text {
    margin: 30px 0;
    font-size: 22px;
    line-height: 130%;
    color: var(----light-grey);
    font-weight: 400;
  }
  &__copyright {
    font-size: 18px;
    line-height: 130%;
    color: var(----dark-grey);
    font-weight: 400;
  }
}
</style>
