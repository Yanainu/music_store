<template>
  <div class="guitars-page__header">
    <BaseContainer>
      <TheNavigation/>
    </BaseContainer>
  </div>

  <SectionWrapper>
    <template v-slot:headText>
      Guitars
    </template>
    <template v-slot:content>
      <SectionItems
        :products="products"
        cardsTheme="grey"
        mode="not-main-page"
      ></SectionItems>
    </template>
  </SectionWrapper>

  <!-- <TheFooter></TheFooter> -->
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import SectionWrapper from '@/components/UI/SectionWrapper.vue';
import SectionItems from '@/components/main/SectionItems.vue';
import TheNavigation from '@/components/header/TheNavigation.vue';
// import TheFooter from '@/components/footer/TheFooter.vue';

export default {
  components: {
    SectionWrapper,
    SectionItems,
    TheNavigation,
    BaseContainer,
    // TheFooter,
  },
  data() {
    return {
      products: [
        {
          name: 'Brand name 1',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: '/img/main__section_guitar1-back.png',
        },
        {
          name: 'Brand name 2',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__section_guitar2-back.png',
        },
        {
          name: 'Brand name 3',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__section_guitar3-back.png',
        },
        {
          name: 'Brand name 4',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__section_guitar4-back.png',
        },
        {
          name: 'Brand name 5',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__section_guitar4-back.png',
        },
        {
          name: 'Brand name 6',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__section_guitar4-back.png',
        },
        {
          name: 'Brand name 7',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__section_guitar4-back.png',
        },
        {
          name: 'Brand name 8',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__section_guitar4-back.png',
        },
        {
          name: 'Brand name 9',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__section_guitar4-back.png',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.guitars-page__header {
  padding: 30px 0;
  background: url(@/assets/images/otherpages/5.jpeg) no-repeat top center;
  background-size: cover;
}

</style>
