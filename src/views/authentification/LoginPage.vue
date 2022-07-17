<template>
  <BaseHeader/>
    <BaseContainer>
      <AuthentificationForm
        :inputsList="inputsList"
        :formMode="'Login'"
      ></AuthentificationForm>

    </BaseContainer>

  <TheFooter/>
</template>

<script>
import TheFooter from '@/components/footer/TheFooter.vue';
import BaseContainer from '@/components/UI/BaseContainer.vue';
import AuthentificationForm from '@/components/UI/AuthentificationForm.vue';
import BaseHeader from '@/components/UI/BaseHeader.vue';
import { REGISTER_PAGE } from '@/router/router-names';

export default {
  components: {
    TheFooter,
    BaseContainer,
    BaseHeader,
    AuthentificationForm,
  },
  data() {
    return {
      inputsList: {
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
  registerPage: REGISTER_PAGE,
};
</script>

<style>

</style>
