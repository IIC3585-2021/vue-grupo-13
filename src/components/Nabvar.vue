<template>
  <div  class="Navbar">
    <h1 @click="handleHomeClick"> CriptoBase </h1>
    <h2 @click="handleSavedAssetsClick"> Favoritos </h2>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    handleHomeClick() {
      this.$router.push('/');
    },
    handleSavedAssetsClick() {
      this.$router.push('/favourites');
    },
  },
};
</script>

<style scoped>
  .Navbar {
    background: #12161C;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: row;
    height: 75px;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    padding: 10px;
  }

  h1 {
    margin-top: 0.6rem;
    cursor:pointer;
    color: #F0B90B;
  }

  h2 {
    margin-top: 1rem;
    margin-right: 2rem;
    cursor:pointer;
    color: #F0B90B;
  }
</style>
