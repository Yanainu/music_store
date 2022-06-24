<template>
    <!-- список products - если секция products  -->
    <div v-if="sectionType === 'products'" class="section__items-container">
      <ProductItem v-for="product in products" :key="product.id"
        :name="product.name"
        :price="product.price"
        :description="product.description"
        :colors="product.colors"
        :id="product.id"
        :img="product.img"
        :type="this.sectionType"
      ></ProductItem>
    </div>
    <!-- список popular - если секция popular  -->
    <div v-if="sectionType === 'popular'" class="section__items-container">
      <ProductItem v-for="popularFind in popularFinds" :key="popularFind.id"
        :name="popularFind.name"
        :price="popularFind.price"
        :description="popularFind.description"
        :colors="popularFind.colors"
        :id="popularFind.id"
        :img="popularFind.img"
        :type="this.sectionType"
      ></ProductItem>
    </div>

</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  props: ['sectionType'],
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
    };
  },
};
</script>

<style lang="postcss" scoped>
.section__items-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 26px;

    @media (max-width: 760px) {
        flex-direction: column;
        padding-top: 26px;
    }
}

</style>
