<template>
  <div class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/addproduct">Add Product</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>


<style scoped>
.navbar {
  background-color: hsl(0, 0%, 50%, 30%);
}

a {
  color: palevioletred;
  margin-right: 1rem;
  border-color: palevioletred;
  font-size: 1.2rem;
}

a:hover {
  color: rgba(214, 14, 81);
  font-weight: 600;
}
</style>