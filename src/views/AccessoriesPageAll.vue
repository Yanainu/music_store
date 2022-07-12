<template>
  <SectionWrapper>
    <template v-slot:headText>
      Accessories
    </template>
    <template v-slot:content>
      <AccessoryPreview v-for="accessory in accessories" :key="accessory.id"
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
</template>

<script>
import SectionWrapper from '@/components/UI/SectionWrapper.vue';
import AccessoryPreview from '@/components/main/AccessoryPreview.vue';
import { getData, formatProductsData } from '@/helpers/utils';

export default {
  components: {
    SectionWrapper,
    AccessoryPreview,
  },
  data() {
    return {
      accessories: [],
    };
  },
  mounted() {
    getData('http://localhost:1337/api/accessories').then((result) => {
      this.accessories = formatProductsData(result);
    });
  },
};
</script>

<style>

</style>
