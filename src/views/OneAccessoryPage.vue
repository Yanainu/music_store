<template>
  <BaseContainer>
    <div class="product-item">
      <!-- главный заголовок - полное название  -->
      <div class="product-item__header-container">
        <h3 class="product-item__header">
          {{ currentProductData.name }}
        </h3>
      </div>

      <!-- фото / всякие описания / кнопки - в корзину, в избранное -->
      <div class="product-item__content">

        <!-- флекс с фоткой и описаниями, без кнопок  -->
        <div class="product-item__main">
          <!-- фото  -->
          <div class="product-item__photo-container">
              <img class="product-item__photo"
              :src="currentProductData.img"
              alt="Product photo">
          </div>

          <!-- описания  -->
          <div class="product-item__description description">

            <div class="description__header-container">
              <p class="description__header">More about this item</p>
            </div>

            <div class="description__info-container info">
              <table class="info__table">
                <tr class="info__table-row">
                  <td class="info__point">Brand Name</td>
                  <td>FENDER</td>
                </tr>
                <tr class="info__table-row">
                  <td class="info__point">Price</td>
                  <td class="info__value">$500</td>
                </tr>
                <tr class="info__table-row">
                  <td class="info__point">Color</td>
                  <td class="info__value">black</td>
                </tr>
                <tr class="info__table-row">
                  <td class="info__point">Body Material</td>
                  <td class="info__value">Wood</td>
                </tr>
                <tr class="info__table-row">
                  <td class="info__point">String Material Type</td>
                  <td class="info__value">Nickel Steel</td>
                </tr>
                <tr class="info__table-row">
                  <td class="info__point">Hand Orientation</td>
                  <td class="info__value">Right</td>
                </tr>

                <tr class="info__table-row">
                  <td class="info__point">Color</td>
                  <td class="info__value">Black</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <!-- кнопки   -->
        <div class="product-item__buttons">
          <BaseButton
            size="large">
            <template v-slot:button>
              <img class="product-item__button-icon"
              src="/img/header__cart-icon.f2c550fc.svg" alt="cart icon">
              Add to cart
            </template>
          </BaseButton>

          <BaseButton
            size="large">
            <template v-slot:button>
              Add to favorite
            </template>
          </BaseButton>
        </div>
      </div>

    </div>
  </BaseContainer>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import { formatOneProductData, getDetailsById } from '@/helpers/utils';

export default {
  components: {
    BaseContainer,
    BaseButton,
  },
  data() {
    return {
      currentProductData: {},
    };
  },
  mounted() {
    getDetailsById(this.$route.params.id, 'accessories').then((result) => {
      this.currentProductData = formatOneProductData(result);
    });
  },
};
</script>

<style lang="postcss" scoped>
.product-item {
  margin: 80px 0;

  &__main {
    display: flex;
    justify-content: space-around;
  }

  &__photo-container {
    max-width: 45%;
  }
}
.product-item__header {
  font-size: 28px;
  line-height: 130%;
  color: var(--black);

  &-container {
    padding: 30px;
  }
}
.product-item__content {
  display: flex;
  justify-content: space-between;

  @media (max-width: 1225px) {
    flex-direction: column;
  }
}

.info {
  &__point {
    font-size: 18px;
    line-height: 130%;
    color: var(--black)
  }
  &__value {
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    color: var(--light-grey);
  }

  &__table-row {
    height: 40px;

    @media (max-width: 760px) {
      height: auto;
    }
  }
}
.description__header-container {
  padding: 20px 0;
}
.description__header {
  font-size: 26px;
  line-height: 130%;
  color: var(--black)
}

.product-item__buttons {
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: space-around;
  min-width: 25%;
}

.product-item__button-icon {
  margin: 0 5px;
}

</style>
