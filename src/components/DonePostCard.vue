<template>
  <div>
    <div class="card-line">
      <span id="cat">Category: {{ donePostList.category }} </span>
      <div class="card-wrapper">
        <img id="img" v-bind:src="donePostList.pic" alt="image to sell" /><br />
        <span class="name"
          ><strong>{{ donePostList.name }}</strong></span
        ><br />
        <span class="price">$ {{ donePostList.price }}</span
        ><br />
        <span class="seller">Seller: {{ donePostList.seller }} </span>
        <span class="address">in {{ donePostList.city }}</span
        ><br />
        <span class="time"
          >Time: {{ new Date(donePostList.time).toLocaleString() }}</span
        ><br />
        <div class="desc-top">
          <span><strong>Description:</strong></span>
          <p class="desc">{{ donePostList.description }}</p>
        </div>
        <!-- Commit removeItem from store is here: -->
        <button @click="$store.commit('removeItemDone', donePostList)" id="delete">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["donePostList", "product"],
};
</script>


<style scoped>
* {
  border-radius: 5px;
}

.card-line {
  border: 2px solid #d87093;
  margin: auto;
  margin-bottom: 2rem;
  padding-top: 0.5rem;
  width: 50%;
}

#cat {
  margin-left: 1rem;
}

.triangle-up {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #d87093;
  float: right;
}

.triangle-down {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid #d87093;
  float: right;
}

.card-wrapper {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: center;
  padding-top: 1rem;
}

img {
  width: 200px;
  height: 100%;
  margin-bottom: 1.5rem;
}

.name {
  font-size: 1.25rem;
}

.price {
  font-size: 2rem;
}

.desc-top {
  margin-top: 2rem;
  margin-bottom: 3rem;
}

.desc {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin-top: 0.5rem;
}

#delete {
  background-color: palevioletred;
  border-color: palevioletred;
  border-radius: 2px;
}

#delete:hover {
  background-color: hsl(340, 57%, 64%, 50%);
  transition: 0.5s;
}

#post {
  margin-right: 2rem;
  background-color: palevioletred;
  border-color: palevioletred;
  border-radius: 2px;
}

#post:hover {
  background-color: hsl(340, 57%, 64%, 50%);
  transition: 0.5s;
}
</style>