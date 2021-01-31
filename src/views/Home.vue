<template>
  <div class="home">
    <h1>Welcome to Solder</h1>
    <p id="p">
      Sell and buy any items whenever and wherever you are. Get special discount
      for a new member, subscribe our newsletter and you will get 15% discount
      for all items you want to buy and sell.
    </p>
    <h2>Post your items now:</h2>
    <SellingList />

    <div>
      <h2 class="done-post">Done Posted Here:</h2>
      <PostingList />
    </div>
  </div>
</template>


<script>
import SellingList from "../components/SellingList";
import PostingList from "../components/PostingList";

export default {
  components: {
    SellingList,
    PostingList,
  },
};
</script>


<style>
body {
  background-image: url("../assets/flower1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
}

h1 {
  text-align: center;
}

#p {
  font-size: 1.2rem;
  width: 60%;
  text-align: center;
  margin: auto;
}

h2 {
  margin-top: 4rem;
  text-align: center;
}

.done-post {
  margin-top: 10rem;
}
</style>
