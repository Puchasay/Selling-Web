<template>
  <div>
    <SellingCard
      v-for="(product, index) in products"
      :key="index"
      :product="product"
    />
  </div>
</template>


<script>
import SellingCard from "./SellingCard.vue";

export default {
  components: {
    SellingCard,
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>


