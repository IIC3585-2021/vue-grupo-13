<template>
  <div :key="asset" v-for="asset in getAssets">
    <Asset :asset="asset" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Asset from './AssetsListItem.vue';

export default {
  name: 'Assets',
  components: {
    Asset,
  },
  computed: mapGetters(['getAssets']),
  methods: {
    ...mapActions(['getApiAssets']),
  },
  created() {
    this.getApiAssets();
  },
};
</script>
