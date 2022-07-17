<template>
  <div class="form-container">
    <form class="form" @submit.prevent="sendFormData(formMode)" :action="backendUrl">

      <h2 class="form__header">{{ formMode }}</h2>
      <!-- выбор формы  -->
      <div class="router-links-container">
        <!-- переход на логин-->
        <div class="router-link-container">
          <router-link class="router-link" :to="{
            name: $options.loginPage,
            }">Login
          </router-link>
        </div>

        <!-- переход на регистрацию-->
        <div class="router-link-container">
          <router-link class="router-link" :to="{
            name: $options.registerPage,
            }">Register
          </router-link>
        </div>
      </div>

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

      <div class="button-container">
        <BaseButton
          size="large">
          <template v-slot:button>
            {{ formMode }}
          </template>
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<script>
import { backendUrl } from '@/helpers/utils';
import { REGISTER_PAGE, LOGIN_PAGE, HOME_PAGE } from '@/router/router-names';
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
    };
  },
  methods: {
    sendFormData(formMode) {
      if (formMode === 'Login') {
        fetch(`${backendUrl}/api/auth/local`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            identifier: this.inputsList.email.value,
            password: this.inputsList.password.value,
          }),
        }).then((response) => {
          response.json().then((data) => {
            localStorage.setItem('currentJwt', data.jwt);
            this.$router.push('/');
          });
        });
      }

      if (formMode === 'Register') {
        fetch(`${backendUrl}/api/auth/local/register`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.inputsList.username.value,
            email: this.inputsList.email.value,
            password: this.inputsList.password.value,
          }),
        }).then(() => {
          this.$router.push('/');
        });
      }
    },
  },
  registerPage: REGISTER_PAGE,
  loginPage: LOGIN_PAGE,
  homePage: HOME_PAGE,
};
</script>

<style lang="postcss">
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
  }
  &__input {
    border: 1px solid var(--white);
    border-radius: 20px;
    margin-left: 30px;
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
.router-link:active {
  color: red;
}
</style>
