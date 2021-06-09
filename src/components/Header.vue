<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'default title',
    },
  },
};
</script>

<style scoped>

input {
  height: 20px;
  padding: 0.7rem;
  border-radius: 8px;
  border-color: #12161C;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
