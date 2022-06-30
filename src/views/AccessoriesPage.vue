<template>
  <div class="acc-page__header">
    <BaseContainer>
      <TheNavigation/>
    </BaseContainer>
  </div>

  <SectionWrapper>
    <template v-slot:headText>
      Accessories
    </template>
    <template v-slot:content>
      <SectionItems
        :products="accessories"
        mode="not-main-page"
      ></SectionItems>
    </template>
  </SectionWrapper>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import TheNavigation from '@/components/header/TheNavigation.vue';
import SectionWrapper from '@/components/UI/SectionWrapper.vue';
import SectionItems from '@/components/main/SectionItems.vue';

export default {
  components: {
    BaseContainer,
    TheNavigation,
    SectionWrapper,
    SectionItems,
  },
  data() {
    return {
      accessories: [
        {
          name: 'Brand name1',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__popular-finds_item1-back.png',
        },
        {
          name: 'Brand name2',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__popular-finds_item2-back.png',
        },
        {
          name: 'Brand name3',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__popular-finds_item3-back.png',
        },
        {
          name: 'Brand name4',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__popular-finds_item4-back.png',
        },
        {
          name: 'Brand name5',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__popular-finds_item4-back.png',
        },
        {
          name: 'Brand name6',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__popular-finds_item4-back.png',
        },
        {
          name: 'Brand name7',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__popular-finds_item4-back.png',
        },
        {
          name: 'Brand name8',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__popular-finds_item4-back.png',
        },
        {
          name: 'Brand name9',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__popular-finds_item4-back.png',
        },
      ],
    };
  },
};
</script>

<style>
.acc-page__header {
  padding: 30px 0;
  background: url('@/assets/images/otherpages/3.jpg') no-repeat top center;
  background-size: cover;
}
</style>
