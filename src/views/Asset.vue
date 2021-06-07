<template>
   <div>
    <AssetDetail :marketInfo="getAssetMarketInfo" :basicInfo="getAssetBasicInfo"/>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import AssetDetail from '../components/AssetDetail.vue';

export default {
  components: {
    AssetDetail,
  },
  computed: mapGetters(['getAssetMarketInfo', 'getAssetBasicInfo']),
  methods: {
    ...mapActions(['getApiAssetMarketInfo', 'getApiAssetBasicInfo', 'getApiToken']),
  },
  async created() {
    await this.getApiToken();
    this.getApiAssetMarketInfo(this.$route.params.id);
    this.getApiAssetBasicInfo(this.$route.params.id);
  },
};
</script>
