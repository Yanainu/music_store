<template>
  <SectionWrapper  mode="articles">
    <template v-slot:headText>
      Lessons
    </template>
    <template v-slot:content>
      <div class="articles-container">
        <ArticlePreview v-for="article in articles" :key="article.img"
          :title="article.title"
          :subhead="article.subhead"
          :imageUrl="article.imageUrl"
          :id="article.id"
          :theme="article.theme"
        ></ArticlePreview>
      </div>
    </template>
  </SectionWrapper>
</template>

<script>
import SectionWrapper from '@/components/UI/SectionWrapper.vue';
import ArticlePreview from '@/components/main/ArticlePreview.vue';
import { getData, formatArticlesData } from '@/helpers/utils';

export default {
  components: {
    SectionWrapper,
    ArticlePreview,
  },
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    getData('http://localhost:1337/api/articles').then((result) => {
      this.articles = formatArticlesData(result);
    });
  },
};
</script>

<style>
.articles-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 32px;
  flex-grow: 1;

  @media (max-width: 760px) {
    flex-direction: column;
  }
}
</style>
