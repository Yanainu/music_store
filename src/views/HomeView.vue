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
          theme="grey"
        ></SectionItems>
      </template>
    </SectionWrapper>

    <!-- popular finds section  -->
    <SectionWrapper
      theme="grey">
        <template v-slot:headText>
          Popular Finds
        </template>
        <template v-slot:content>
          <SectionItems
            :products="accessories"
            theme="white"
          ></SectionItems>
        </template>
    </SectionWrapper>

    <!-- articles section  -->
    <SectionWrapper
    mode="articles">
      <template v-slot:headText>
        Gear Heads
      </template>
      <template v-slot:content>
        <div class="articles-container">
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
import SectionWrapper from '@/components/UI/SectionWrapper.vue';
import TheHeader from '@/components/header/TheHeader.vue';
import SectionItems from '@/components/main/SectionItems.vue';
import SectionArticles from '@/components/main/SectionArticles.vue';
import TheFooter from '@/components/footer/TheFooter.vue';
import products from '@/helpers/products.';
import accessories from '@/helpers/accessories';
import articles from '@/helpers/articles';

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
      products: products.slice(0, 3),
      accessories: accessories.slice(0, 3),
      articles,
    };
  },
};
</script>

<style lang="postcss" scoped>

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
