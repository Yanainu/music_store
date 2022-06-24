<template>
<!-- all articles  -->
  <div class="gear-heads__articles-container">

    <ArticleCard v-for="article in articles" :key="article.id"
      :title="article.title"
      :subhead="article.subhead"
      :visualMode="article.visualMode"
      :picClassName="article.picClassName">
    </ArticleCard>

  </div>

</template>

<script>
import ArticleCard from './ArticleCard.vue';

export default {
  components: {
    ArticleCard,
  },
  data() {
    return {
      articles: [
        {
          title: 'Article Title',
          subhead: 'Article Subhead',
          id: '1',
          visualMode: 'dark',
          picClassName: 'article-pic1',
        },
        {
          title: 'Article Title',
          subhead: 'Article Subhead',
          id: '2',
          visualMode: 'light',
          picClassName: 'article-pic2',
        },
        {
          title: 'Article Title',
          subhead: 'Article Subhead',
          id: '3',
          visualMode: 'dark',
          picClassName: 'article-pic3',
        },
        {
          title: 'Article Title',
          subhead: 'Article Subhead',
          id: '1',
          visualMode: 'light',
          picClassName: 'article-pic4',
        },
        {
          title: 'Article Title',
          subhead: 'Article Subhead',
          id: '1',
          visualMode: 'dark',
          picClassName: 'article-pic5',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.gear-heads {
  &__articles-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 32px;
    flex-grow: 1;
  }
  /* &__articles {
    display: flex;
    justify-content: space-between;
    padding: 32px 0 48px 0;
  } */
}
/*описание articles общие классы*/

/*нижние articles*/

</style>
