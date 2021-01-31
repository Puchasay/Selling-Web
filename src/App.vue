<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>


<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>


<style>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style> 
