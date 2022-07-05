<template>
  <BaseHeader mode="lessons">
  </BaseHeader>

  <SectionWrapper
  mode="articles">
    <template v-slot:headText>
      Lessons
    </template>
    <template v-slot:content>
      <div class="articles-container">
        <SectionArticles
          :articles="articles"
        ></SectionArticles>
      </div>
    </template>
  </SectionWrapper>

  <TheFooter/>
</template>

<script>
import BaseHeader from '@/components/UI/BaseHeader.vue';
import SectionWrapper from '@/components/UI/SectionWrapper.vue';
import SectionArticles from '@/components/main/SectionArticles.vue';
import TheFooter from '@/components/footer/TheFooter.vue';
import articles from '@/helpers/articles';

export default {
  components: {
    SectionWrapper,
    SectionArticles,
    BaseHeader,
    TheFooter,
  },
  data() {
    return {
      articles,
    };
  },
};
</script>

<style lang="postcss">

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
