<template>
  <CreateForm
    :inputsList="inputsList"
    :formMode="'Article'"
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
        title: {
          name: 'title',
          type: 'text',
          id: 'title',
          labelText: 'Title',
          value: '',
        },
        subhead: {
          name: 'subhead',
          type: 'text',
          id: 'subhead',
          labelText: 'Subhead',
          value: '',
        },
        imageUrl: {
          name: 'imageUrl',
          type: 'file',
          id: 'imageUrl',
          labelText: 'Image',
          value: '',
        },
      },
    };
  },
};
</script>

<style>

</style>
