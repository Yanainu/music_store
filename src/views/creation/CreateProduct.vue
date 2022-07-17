<template>
  <CreateForm
    :inputsList="inputsList"
    :formMode="'Product'"
  ></CreateForm>
</template>

<script>

import CreateForm from '@/components/UI/CreateForm.vue';

export default {
  components: {
    CreateForm,
  },
  data() {
    return {
      inputsList: {
        name: {
          name: 'name',
          type: 'text',
          id: 'name',
          labelText: 'Product name',
          value: '',
        },
        price: {
          name: 'price',
          type: 'text',
          id: 'price',
          labelText: 'Price',
          value: '',
        },
        description: {
          name: 'description',
          type: 'text',
          id: 'price',
          labelText: 'Product description',
          value: '',
        },
        colors: {
          name: 'colors',
          type: 'number',
          id: 'colors',
          labelText: 'Colors',
          value: 0,
        },
        img: {
          name: 'img',
          type: 'file',
          id: 'img',
          labelText: 'Photo',
          value: '',
        },
      },
    };
  },
};
</script>

<style>

</style>
