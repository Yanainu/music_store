<template>
  <TheHeader/>

  <main class="main">
    <!-- new products section  -->
    <SectionWrapper>
      <template v-slot:headText>
        New Products
      </template>
      <template v-slot:content>
        <SectionItems
          :products="products"
          cardsTheme="grey"
        ></SectionItems>
      </template>
    </SectionWrapper>

    <!-- popular finds section  -->
    <SectionWrapper
      backTheme="grey">
        <template v-slot:headText>
          Popular Finds
        </template>
        <template v-slot:content>
          <SectionItems
            :products="popularFinds"
            cardsTheme="white"
          ></SectionItems>
        </template>
    </SectionWrapper>

    <!-- articles section  -->
    <SectionWrapper>
      <template v-slot:headText>
        Gear Heads
      </template>
      <template v-slot:content>
        <div class="gear-heads__articles-container">
          <SectionArticles
            :articles="articles"
          ></SectionArticles>
        </div>
      </template>
    </SectionWrapper>
  </main>

  <TheFooter/>
</template>

<script>
import SectionWrapper from '../components/UI/SectionWrapper.vue';
import TheHeader from '../components/header/TheHeader.vue';
import SectionItems from '../components/main/SectionItems.vue';
import SectionArticles from '../components/main/SectionArticles.vue';
import TheFooter from '../components/footer/TheFooter.vue';

export default {
  components: {
    TheHeader,
    SectionWrapper,
    SectionItems,
    SectionArticles,
    TheFooter,
  },
  data() {
    return {
      products: [
        {
          name: 'Brand name',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: '/img/main__section_guitar1-back.png',
        },
        {
          name: 'Brand name',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__section_guitar2-back.png',
        },
        {
          name: 'Brand name',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__section_guitar3-back.png',
        },
        {
          name: 'Brand name',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__section_guitar4-back.png',
        },
      ],
      popularFinds: [
        {
          name: 'Brand name',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__popular-finds_item1-back.png',
        },
        {
          name: 'Brand name',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__popular-finds_item2-back.png',
        },
        {
          name: 'Brand name',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__popular-finds_item3-back.png',
        },
        {
          name: 'Brand name',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: './img/main__popular-finds_item4-back.png',
        },
      ],
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

<style lang="postcss">
body {
  margin: 0 auto;

  --red: #ab0433;
  --orange: #ff753a;
  --black: #252525;
  --dark-grey: #505050;
  --light-grey: #767676;
  --white: #eaeaea;
  --white-gradient: linear-gradient(134.57deg, #ffffff 0%, #d3d3d3 100%);

  font-family: "Work Sans", sans-serif;
  font-weight: 600;
}
h1,
h2,
h3,
p {
  margin: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
images {
  max-width: 100%;
}
.gear-heads__articles-container {
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
