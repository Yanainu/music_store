<template>
  <!-- :to="`/guitars/${id}`" -->
  <router-link class="router-link" :to="{
    name: $options.detailGuitarPage,
    params: {
      // тут будет айди с бэка
      id: id,
      },
    }">

    <ProductPreview
      :name="name"
      :price="price"
      :description="description"
      :colors="colors"
      :img="img"
      :id="id"
      :theme="theme"
    ></ProductPreview>

  </router-link>
</template>

<script>
import ProductPreview from '@/components/main/ProductPreview.vue';
import { GUITARS_PAGE_DETAIL } from '@/router/router-names';

export default {
  components: {
    ProductPreview,
  },
  props: {
    theme: {
      type: String,
      default: 'white',
    },
    mode: {
      type: String,
      default: 'default',
    },
    name: {
      type: String,
      default: 'Product Name',
    },
    price: {
      type: String,
      default: 'Price',
    },
    description: {
      type: String,
      default: 'Product Description',
    },
    colors: {
      type: Number,
      default: 0,
    },
    img: {
      type: String,
      default: 'default',
    },
    id: {
      type: String,
      required: true,
    },
  },
  detailGuitarPage: GUITARS_PAGE_DETAIL,
};

</script>

<style lang="postcss" scoped>
.router-link {
  width: 30%;
  text-decoration: none;

  @media (max-width: 1225px) {
    justify-content: center;
    width: 47%;

    &:nth-child(3) {
      display: none;
    }
  }

  @media (max-width: 760px) {
    width: auto;

    &:nth-child(3) {
      display: block;
    }
  }
}
</style>
