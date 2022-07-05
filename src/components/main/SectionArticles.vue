<template>
  <ArticleCard v-for="article in articles" :key="article.img"
    :title="article.title"
    :subhead="article.subhead"
    :theme="article.theme"
    :imageUrl="article.imageUrl">
  </ArticleCard>
</template>

<script>
import ArticleCard from '@/components/main/ArticleCard.vue';

export default {
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ArticleCard,
  },
};
</script>
