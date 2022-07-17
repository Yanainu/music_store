<template>
  <BaseHeader/>
    <BaseContainer>
      <AuthentificationForm
        :inputsList="inputsList"
        :formMode="'Register'"
      >
      </AuthentificationForm>

    </BaseContainer>
  <TheFooter/>
</template>

<script>
import TheFooter from '@/components/footer/TheFooter.vue';
import BaseContainer from '@/components/UI/BaseContainer.vue';
import AuthentificationForm from '@/components/UI/AuthentificationForm.vue';
import BaseHeader from '@/components/UI/BaseHeader.vue';
import { LOGIN_PAGE } from '@/router/router-names';

export default {
  components: {
    TheFooter,
    BaseContainer,
    AuthentificationForm,
    BaseHeader,
  },
  data() {
    return {
      loginFormVisibility: false,
      inputsList: {
        username: {
          name: 'username',
          type: 'text',
          id: 'username',
          labelText: 'Username',
          value: '',
        },
        email: {
          name: 'email',
          type: 'email',
          id: 'email',
          labelText: 'Email',
          value: '',
        },
        password: {
          name: 'password',
          type: 'password',
          id: 'password',
          labelText: 'Password',
          value: '',
        },
      },
    };
  },
  loginPage: LOGIN_PAGE,

};
</script>

<style>
</style>
