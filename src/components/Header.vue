<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text= "Buscar por id" color="#12161C" />
  </header>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'default title',
    },
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
