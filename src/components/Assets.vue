<template>
  <div :key="asset" v-for="asset in getAssets">
    <Asset :asset="asset" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Asset from './Asset.vue';

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

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  /* max-width: 500px; */
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
