<template>
  <div :class="[asset.status === 'ACTIVE' ? 'active' : '', 'asset']">
    <div class="assetItem">
      <h3>{{ asset.name }}</h3>
      <h3>{{ asset.symbol }}</h3>
      <h3>{{ asset.id }}</h3>
    </div>
    <div>
      <Button @click="details(asset.id)" text= "Detalles" color="#12161C" />
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Asset',
  props: {
    asset: Object,
  },
  components: {
    Button,
  },
  methods: {
    details(assetId) {
      this.$router.push(assetId);
    },
  },
};
</script>

<style scoped>

.assetItem {
  width: 100%;
}

.asset {
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  background: #e2e1e1;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.asset.active {
  border-left: 5px solid #F0B90B;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
