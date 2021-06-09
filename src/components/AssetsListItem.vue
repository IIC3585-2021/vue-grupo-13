<template>
  <div :class="[asset.status === 'ACTIVE' ? 'active' : '', 'asset']">
    <div class="assetItem">
      <h3>{{ asset.name }}</h3>
      <h3>{{ asset.symbol }}</h3>
      <h3>{{ asset.id }}</h3>
    </div>
    <div class="ButtonsDiv">
      <Button @click="details(asset.id)" text= "Detalles" />
      <Button v-if="favouritesId.includes(asset.id)"
        @click="deleteFromFavourites(asset)"
        text= "Eliminar"/>
      <Button v-else @click="saveToFavourites(asset)"
        text= "Guardar"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Button from './Button.vue';

export default {
  name: 'Asset',
  props: {
    asset: Object,
  },
  components: {
    Button,
  },
  computed: {
    ...mapGetters(['getFavourites']),
    favouritesId() {
      return this.getFavourites.map((asset) => asset.id);
    },
  },
  methods: {
    ...mapActions(['pushToFavourites', 'popFromFavourites']),
    details(assetId) {
      this.$router.push(assetId);
    },
    saveToFavourites(asset) {
      this.pushToFavourites(asset);
    },
    deleteFromFavourites(asset) {
      this.popFromFavourites(asset);
    },
  },
};
</script>

<style scoped>

.assetItem {
  width: 100%;
}

.ButtonsDiv {
  flex-direction: row;
}

.asset {
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  background: #e2e1e1;
  margin: 5px;
  padding: 10px 20px;
}

.asset.active {
  border-left: 5px solid #F0B90B;
}

</style>
