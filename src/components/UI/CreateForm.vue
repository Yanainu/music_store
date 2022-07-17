<template>
  <div class="back-button">
    <BaseButton @click="goBack"
      size="large">
      <template v-slot:button>
        Go back
      </template>
    </BaseButton>
  </div>

  <div class="form-container">
    <form class="form" @submit.prevent="sendFormData(formMode, selectValue)" :action="backendUrl">

      <h2 class="form__header">{{ formMode }}</h2>

      <div class="form__data-container form-data" v-for="input in inputsList" :key="input.name">
        <label class="form-data__label" :for="input.name">
          {{ input.labelText }}
          <input v-model="input.value" class="form-data__input"
            :type="input.type"
            :name="input.name"
            :id="input.id"
            >
        </label>
      </div>

      <label v-if="formMode === 'Product'" class="form-data__label" for="collectionType">Choose type
        <select v-model="selectValue"
          class="form-data__input"
          name="collectionType"
          id="collectionType">
          <option class="form-data__input" value="guitars">Guitar</option>
          <option class="form-data__input" value="accessories">Accessory</option>
        </select>
      </label>

      <label v-if="formMode === 'Article'" class="form-data__label" for="colorTheme">Choose type
        <select v-model="selectValue"
          class="form-data__input"
          name="colorTheme"
          id="colorTheme">
          <option class="form-data__input" value="dark">Dark</option>
          <option class="form-data__input" value="light">Light</option>
        </select>
      </label>

      <div class="button-container">
        <BaseButton
          size="large">
          <template v-slot:button>
            Create
          </template>
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<script>
import { backendUrl } from '@/helpers/utils';
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  components: {
    BaseButton,
  },
  props: {
    inputsList: {
      type: Object,
      default: () => {},
    },
    formMode: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      backendUrl,
      selectValue: '',
    };
  },
  methods: {
    sendFormData(formMode, collectionName) {
      if (formMode === 'Product') {
        fetch(`${backendUrl}/api/${collectionName}`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              name: this.inputsList.name.value,
              price: this.inputsList.price.value,
              description: this.inputsList.description.value,
              colors: this.inputsList.colors.value,
              img: this.inputsList.img.value,
              collectionName: this.selectValue,
            },
          }),
        }).then((response) => {
          console.log(response);
          this.$router.push(`/${this.selectValue}`);
        });
      }

      if (formMode === 'Article') {
        fetch(`${backendUrl}/api/articles`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              title: this.inputsList.title.value,
              subhead: this.inputsList.subhead.value,
              imageUrl: this.inputsList.imageUrl.value,
              theme: this.selectValue,
            },
          }),
        }).then((response) => {
          console.log(response);
          this.$router.push('/lessons');
        });
      }
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="postcss">
.back-button {
  margin: 50px auto;
}
.form-container {
  padding: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  border: 1px solid var(--white);
  border-radius: 20px;
  padding: 30px;
  background: white;
  border-radius: 10px;

  &__header {
    margin: 8px 0 28px 0;
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
    color: var(--dark-grey);
    text-align: center;
  }

  &__data-container {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: var(--dark-grey);
  }
}
.form-data {
  &__label {
    display: flex;
    justify-content: space-between;
    padding: 20px;
        font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: var(--dark-grey);
  }
  &__input {
    border: 1px solid var(--white);
    border-radius: 20px;
    margin-left: 30px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: var(--dark-grey);
    padding: 5px 10px;
  }
}
.router-links-container {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.button-container {
  padding: 20px;
  display: flex;
  justify-content: center;
}
</style>
