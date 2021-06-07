<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Navbar from './components/Nabvar.vue';

export default {
  name: 'app',
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(['getApiToken']),
  },
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
}

.btn {
  display: inline-block;
  background-color: #000;
  color: #F0B90B;
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
