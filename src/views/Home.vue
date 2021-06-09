<template>
  <div>
    <Header title="Criptomonedas disponibles"/>
    <Assets />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Assets from '../components/AssetsList.vue';

export default {
  name: 'Home',
  components: {
    Assets,
    Header,
  },
};
</script>

<style scoped>
  div {
    padding: 30px;
    padding-top: 100px;
  }
</style>
