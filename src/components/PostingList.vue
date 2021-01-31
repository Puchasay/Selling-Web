<template>
  <div>
    <DonePostCard
      v-for="(donePostList, index) in donePostLists"
      :key="index"
      :donePostList="donePostList"
    />
  </div>
</template>


<script>

import DonePostCard from './DonePostCard.vue'

export default {
  components:{
    DonePostCard
  },

  computed:{
    donePostLists(){
      return this.$store.state.donePostLists;

    },
  }
}

</script>


