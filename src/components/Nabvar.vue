<template>
  <div  class="Navbar">
    <h1 @click="handleNavbarClick"> CriptoBase </h1>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    handleNavbarClick() {
      this.$router.push('/');
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
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;
    padding: 10px;
  }

  h1 {
    cursor:pointer;
    color: #F0B90B;
  }
</style>
