<template>
    <!-- one card  -->
    <div class="section__item product-item" :class="itemAddClass">
        <!-- pic  -->
        <div class="product-item__photo-container"
        :class="photoContainerAddClass">
            <img class="product-item__photo" :src="img" alt="">
        </div>
        <!-- all text + price -->
        <div class="product-item__info product-info" :class="itemInfoAddClass">
            <!-- main info (name price) -->
            <div class="product-info__header">
                <p class="product-info__name">{{ name }}</p>
                <p class="product-info__price">{{ price }}</p>
            </div>
            <!-- main info(description) -->
            <div class="product-info__description-container">
                <p class="product-info__description">{{ description }}</p>
            </div>
            <!-- colors avaliable -->
            <div class="product-info__badge-container">
                <p class="product-info__badge">
                    <span class="product-info__badge-num">{{ colors }}</span> colors available
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['name', 'price', 'description', 'colors', 'id', 'img', 'type'],
  computed: {
    itemAddClass() {
      if (this.type === 'popular') {
        return 'popular-item';
      }
      return '';
    },
    photoContainerAddClass() {
      if (this.type === 'popular') {
        return 'popular-item__photo-container';
      }
      return '';
    },
    itemInfoAddClass() {
      if (this.type === 'popular') {
        return 'popular-item__info';
      }
      return '';
    },
  },
};
</script>

<style lang="postcss" scoped>
.product-item {
    margin-bottom: 32px;
    margin-right: 32px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 5px 20px rgb(0 0 0 / 15%);
    max-width: 400px;
    flex-grow: 1;

    &__photo-container {
        background: radial-gradient(98.56% 98.92% at 1.22% 1.08%, #FBFBFB 0%, #D3D3D3 100%);
        display: flex;
        justify-content: center;
        align-items: flex-end;
        border-radius: 15px 15px 0 0;
    }

    &__photo {
        max-height: 260px;
        max-width: 400px;
    }

    &:last-child {
        display: none;
    }

    &__info {
        padding: 16px 24px 24px 24px;
    }

    @media (max-width: 1225px) {
        width: 46%;
        max-width: 520px;
        flex-grow: 1;

        &:last-child {
            display: block;
        }
        &:nth-child(2),
        &:nth-child(4) {
            margin-right: 0;
        }
    }

    @media (max-width: 760px) {
        width: 100%;
        flex-grow: 1;
        margin-right: 0;
        max-width: 100%;
    }
}

.product-info {
    &__header {
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        line-height: 130%;
        color: var(--black)
    }
    &__description-container {
        padding: 6px 0;
        min-height: 42px;
    }

    &__description {
        font-weight: 500;
        font-size: 16px;
        line-height: 130%;
        color: var(--light-grey)
    }
    &__badge-container {
        border: 1px solid var(--white);
        border-radius: 20px;
        padding: 2px 6px;
        display: inline-block;
    }
    &__badge {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: var(--dark-grey)
    }
    &__badge-num {
        font-weight: 700;
    }
}

.popular-item__photo-container {
    background: white;
}
.popular-item  {
    background-color: white;
    border-radius: 10px;

    &__info {
        background-color: white;
        border-radius: 10px;
    }
}

</style>
