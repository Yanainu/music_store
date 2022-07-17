<template>
  <TheHeader/>
  <main class="main">
    <!-- new products section  -->
    <SectionWrapper>
      <template v-slot:headText>
        New Products
      </template>
      <template v-slot:content>
        <GuitarPreview v-for="product in products" :key="product.id"
          :name="product.name"
          :price="product.price"
          :description="product.description"
          :colors="product.colors"
          :img="product.img"
          :id="product.id"
          theme="grey"
        ></GuitarPreview>
      </template>
    </SectionWrapper>

    <!-- popular finds section  -->
    <SectionWrapper
      theme="grey">
        <template v-slot:headText>
          Popular Finds
        </template>
        <template v-slot:content>
          <AccessoryPreview  v-for="accessory in accessories" :key="accessory.id"
            :name="accessory.name"
            :price="accessory.price"
            :description="accessory.description"
            :colors="accessory.colors"
            :img="accessory.img"
            :id="accessory.id"
            theme="white"
          ></AccessoryPreview>
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
  </main>

  <TheFooter/>
</template>

<script>
import SectionWrapper from '@/components/UI/SectionWrapper.vue';
import TheHeader from '@/components/header/TheHeader.vue';
import GuitarPreview from '@/components/main/GuitarPreview.vue';
import AccessoryPreview from '@/components/main/AccessoryPreview.vue';
import ArticlePreview from '@/components/main/ArticlePreview.vue';
import TheFooter from '@/components/footer/TheFooter.vue';
import { getData, formatProductsData, formatArticlesData } from '@/helpers/utils';

export default {
  components: {
    TheHeader,
    SectionWrapper,
    GuitarPreview,
    AccessoryPreview,
    ArticlePreview,
    TheFooter,
  },
  data() {
    return {
      products: [],
      accessories: [],
      articles: [],
    };
  },
  created() {
    getData('http://localhost:1337/api/guitars').then((result) => {
      this.products = formatProductsData(result).slice(0, 3);
    });
    getData('http://localhost:1337/api/accessories').then((result) => {
      this.accessories = formatProductsData(result).slice(0, 3);
    });
    getData('http://localhost:1337/api/articles').then((result) => {
      this.articles = formatArticlesData(result);
    });
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
