<template>
  <div class="lessons-page__header">
    <BaseContainer>
      <TheNavigation/>
    </BaseContainer>
  </div>

  <SectionWrapper>
    <template v-slot:headText>
      Lessons
    </template>
    <template v-slot:content>
      <div class="gear-heads__articles-container">
        <SectionArticles
          :articles="articles"
        ></SectionArticles>
      </div>
    </template>
  </SectionWrapper>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import TheNavigation from '@/components/header/TheNavigation.vue';
import SectionWrapper from '@/components/UI/SectionWrapper.vue';
import SectionArticles from '@/components/main/SectionArticles.vue';

export default {
  components: {
    BaseContainer,
    TheNavigation,
    SectionWrapper,
    SectionArticles,
  },
  data() {
    return {
      articles: [
        {
          title: 'Article Title',
          subhead: 'Article Subhead',
          theme: 'dark',
          imageUrl: '../assets/images/main__gear-heads_photo1.jpg',
        },
        {
          title: 'Article Title',
          subhead: 'Article Subhead',
          theme: 'light',
          imageUrl: '../../assets/images/main__gear-heads_photo2.jpg',
        },
        {
          title: 'Article Title',
          subhead: 'Article Subhead',
          theme: 'dark',
          imageUrl: '../../assets/images/main__gear-heads_photo3.jpg',
        },
        {
          title: 'Article Title',
          subhead: 'Article Subhead',
          theme: 'light',
          imageUrl: '../../assets/images/main__gear-heads_photo4.jpg',
        },
        {
          title: 'Article Title',
          subhead: 'Article Subhead',
          theme: 'dark',
          imageUrl: '../../assets/images/main__gear-heads_photo5.jpg',
        },
      ],
    };
  },
};
</script>

<style>
.lessons-page__header {
  padding: 30px 0;
  background: url('@/assets/images/otherpages/2.jpg') no-repeat top center;
  background-size: cover;
}
</style>
