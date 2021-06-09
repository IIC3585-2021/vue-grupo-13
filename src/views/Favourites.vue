<template>
  <div class="Container">
    <div :key="asset" v-for="asset in getFavourites">
      <Asset :asset="asset"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Asset from '../components/AssetsListItem.vue';

export default {
  name: 'Assets',
  components: {
    Asset,
  },
  computed: mapGetters(['getFavourites']),
};
</script>

<style scoped>
  .Container {
    padding: 30px;
    padding-top: 110px;
  }
</style>
