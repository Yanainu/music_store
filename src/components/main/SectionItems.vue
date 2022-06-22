<template>
    <section-wrapper>
        <template v-slot:section>
            <div class="section__items-container">
                <ul>
                    <li v-for="product in products" :key="product.id">
                        <product-item
                            :name="product.name"
                            :price="product.price"
                            :description="product.description"
                            :colors="product.colors"
                            :id="product.id"
                            :img="product.img"
                        ></product-item>
                    </li>
                </ul>
            </div>
        </template>
    </section-wrapper>
</template>

<script>
import ProductItem from './ProductItem.vue';
import SectionWrapper from '../UI/SectionWrapper.vue';

export default {
  components: {
    ProductItem,
    SectionWrapper,
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
          img: '../../assets/images/main__section_guitar1-back.png',
        },
        {
          name: 'Brand name',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: '../../assets/images/main__section_guitar2-back.png',
        },
        {
          name: 'Brand name',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: '../../assets/images/main__section_guitar3-back.png',
        },
        {
          name: 'Brand name',
          price: '$2,995',
          description: 'Product description here',
          colors: 0,
          id: Math.random(),
          img: '../../assets/images/main__section_guitar4-back.png',
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
