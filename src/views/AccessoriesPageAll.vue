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
import accessories from '@/helpers/accessories';
import SectionWrapper from '@/components/UI/SectionWrapper.vue';
import AccessoryPreview from '@/components/main/AccessoryPreview.vue';

export default {
  components: {
    SectionWrapper,
    AccessoryPreview,
  },
  data() {
    return {
      accessories,
    };
  },
};
</script>

<style>

</style>
