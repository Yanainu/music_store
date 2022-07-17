<template>
  <div class="create-buttons">
    <div class="create-button" v-for="action in actions" :key="action.name">
      <router-link class="router-link" :to="{
        name: action.url,
        params: {
          creationType: action.creationType,
        },
        }">

          <BaseButton
            size="large">
            <template v-slot:button>
              {{ action.name }}
            </template>
          </BaseButton>

      </router-link>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';
import { CREATE_PRODUCT, CREATE_ARTICLE } from '@/router/router-names';

export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      actions: [
        {
          name: 'Create new product',
          creationType: 'product',
          url: CREATE_PRODUCT,
        },
        {
          name: 'Create new article',
          creationType: 'article',
          url: CREATE_ARTICLE,
        },
      ],
    };
  },
  createProductPage: CREATE_PRODUCT,
  createArticlePage: CREATE_ARTICLE,
};
</script>

<style lang="postcss" scoped>
.create-buttons {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.create-button {
  margin-bottom: 50px;
}
</style>
