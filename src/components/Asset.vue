<template>
  <div :class="[asset.status === 'ACTIVE' ? 'active' : '', 'asset']">
    <div class="assetItem">
      <h3>{{ asset.name }}</h3>
      <h3>{{ asset.symbol }}</h3>
      <h3>{{ asset.id }}</h3>
    </div>
    <div>
      <Button text= "Detalles" color="green" />
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
};
</script>

<style scoped>

.assetItem {
  width: 100%;
}

.asset {
  display: flex;
  flex-direction: row;
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.asset.active {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
