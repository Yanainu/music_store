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
          theme="dark"
        ></ArticlePreview>
      </div>
    </template>
  </SectionWrapper>
</template>

<script>
import SectionWrapper from '@/components/UI/SectionWrapper.vue';
import ArticlePreview from '@/components/main/ArticlePreview.vue';
// import SectionArticles from '@/components/main/SectionArticles.vue';
import articles from '@/helpers/articles';

export default {
  components: {
    SectionWrapper,
    ArticlePreview,
  },
  data() {
    return {
      articles,
    };
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
