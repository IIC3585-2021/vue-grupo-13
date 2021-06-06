<template>
  <div class="container">
    <Header title="Criptomonedas disponibles"/>
    <Assets />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from './components/Header.vue';
import Assets from './components/Assets.vue';

export default {
  name: 'app',
  components: {
    Assets,
    Header,
  },
  computed: mapGetters(['getToken']),
  methods: {
    ...mapActions(['getApiToken']),
  },
  // data() {
  //   return {
  //     tasks: [],
  //   };
  // },
  created() {
    this.getApiToken();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  margin: auto;
  overflow: auto;
  min-height: 300px;
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
