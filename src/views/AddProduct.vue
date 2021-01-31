<template>
  <div>
    <div class="sell-list">
      <h2>Sell your thing here!</h2>
      <form class="form" action="/action_page.php" @submit.prevent="addProduct">
        <div class="pic-wrapper">
          <h3>Add pictures:</h3>
          <br />
          <div class="add-pic">
            <img src="../assets/addimage.png" id="img" /><br />
            <input
              v-model="pic"
              type="text"
              id="input-img"
              placeholder="Copy your url here.."
            />
          </div>
          <br />
        </div>
        <label for="name">Name:</label>
        <input
          v-model="name"
          id="name"
          type="text"
          placeholder="What do you want to sell?"
        /><br />
        <label id="desc-top" for="description">Description:</label>
        <!-- <textarea v-model="description" id="description" name="description" placeholder="Write about your thing here, their condition..."></textarea><br/> -->
        <input
          v-model="description"
          id="description"
          type="text"
          placeholder="Write about your thing here, their condition..."
        /><br />
        <label id="price" for="price">Price:</label><span id="dollar">$</span>
        <input v-model="price" class="price" /><br />
        <label for="seller">Seller:</label>
        <input
          v-model="seller"
          id="seller"
          type="text"
          placeholder="Write your name here..."
        /><br />
        <label for="address">City:</label>
        <input
          v-model="city"
          id="city"
          type="text"
          placeholder="Which city are you?"
        /><br />
        <label for="category">Category:</label>
        <select v-model="category" id="category" name="category">
          <option value="Fashion & Accessories">Fashion & Accessories</option>
          <option value="Electronic & Computer">Electronic & Computer</option>
          <option value="Film, Book & Musi">Film, Book & Music</option>
          <option value="Home & Garden">Home & Garden</option>
          <option value="Sport & Leisure">Sport & Leisure</option>
          <option value="Cars & Motors">Cars & Motors</option>
          <option value="Property">Property</option>
          <option value="Baby & Child">Baby & Child</option>
          <option value="Services">Services</option></select
        ><br />
        <button id="add">Add item</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      category: "",
      pic: "",
      name: "",
      description: "",
      price: "",
      seller: "",
      city: "",
    };
  },

  methods: {
    addProduct() {
      let newProduct = {
        category: this.category,
        name: this.name,
        price: this.price,
        pic: this.pic,
        description: this.description,
        seller: this.seller,
        city: this.city,
        time: Date.now(),
      };
      this.$store.commit("addProduct", newProduct);
      this.$router.push("/");
    },
  },
};
</script>


<style scoped>
h2 {
  text-align: center;
}

.sell-list {
  display: flex;
  flex-direction: column;
}

.form {
  margin: auto;
  display: inline-block;
  border: 2px solid palevioletred;
  padding: 2rem 2rem;
  border-radius: 5px;
}

h3 {
  font-weight: 400;
}

.pic-wrapper {
  display: flex;
}

.add-pic {
  box-sizing: content-box;
  width: 256px;
  height: 50px;
  padding-top: 10px;
  padding-bottom: 30px;
  border: 1px solid grey;
  border-radius: 2px;
  margin-left: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}

.add-pic img {
  width: 40px;
}

.form input, #description {
  border: 1px solid grey;
  border-radius: 2px;
}

#file-input {
  font-size: 0.8rem;
}

#name {
  margin-left: 3.4rem;
  margin-bottom: 1rem;
  width: 17.3rem;
}

#description {
  margin-left: 1rem;
  margin-bottom: 1rem;
  width: 17.4rem;
  height: 3rem;
  /* float: right; */
}

#seller {
  margin-left: 3.5rem;
  margin-bottom: 1rem;
  width: 9.5rem;
}

/* #price{
  margin-top: 2rem;
} */

#dollar {
  margin-left: 3.3rem;
  margin-bottom: 1rem;
}

.price {
  margin-bottom: 1rem;
  width: 9.4rem;
  /* float: right; */
}

#city {
  margin-left: 4.2rem;
  margin-bottom: 1rem;
  width: 9.5rem;
}

#category {
  margin-left: 1.9rem;
  margin-bottom: 1rem;
}

#add {
  margin-left: 20rem;
  background-color: palevioletred;
  border-color: palevioletred;
  border-radius: 2px;
}

#add:hover {
  transition: 0.3s;
  background-color: hsl(340, 57%, 64%, 50%);
}
</style>