import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    donePostLists: [
      {
        name: 'Samsung TV',
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtiSXiAakFMMHR6kvTWKxOfg6Cfqbyrlqj_Q&usqp=CAU",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Iure tempore exercitationem qui debitis velit Lorem ipsum dolor sit amet consectetur adipisicing elit Iure tempore exercitationem qui debitis velit',
        price: 590,
        seller: 'Maia Munsson',
        city: 'New York',
        time: '2020-11-20 08:30',
        category: 'Electronic & Computer'
      },
      {
        name: 'Mountain Bike Santa Cruz',
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vcm_vyEi6pkiAXe_8UXxnKJKQwD-mM94UQ&usqp=CAU",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Iure tempore exercitationem qui debitis velit Lorem ipsum dolor sit amet consectetur adipisicing elit Iure tempore exercitationem qui debitis velit',
        price: 3600,
        seller: 'Dan Jakobbsson',
        city: 'Boston',
        time: '2021-01-01 17:30',
        category: 'Sport & Leisure'
      }
    ],

    products: [
      {
        name: 'Valentino Spike Bag',
        pic: "https://tse2.mm.bing.net/th?id=OIP.tBhc3PBzDaQVw3iGXaRc_QHaHZ&pid=Api&P=0&w=300&h=300",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Iure tempore exercitationem qui debitis velit Lorem ipsum dolor sit amet consectetur adipisicing elit Iure tempore exercitationem qui debitis velit',
        price: 2200,
        seller: 'Jenny Linsson',
        city: 'California',
        time: '2020-12-20 08:00',
        category: 'Fashion & Accessories'
      },
      {
        name: 'Gucci Loafer',
        pic: "https://tse3.mm.bing.net/th?id=OIP.xIomumgGXV8HohEXmKB6XQHaE8&pid=Api&P=0&w=225&h=151",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Iure tempore exercitationem qui debitis velit Lorem ipsum dolor sit amet consectetur adipisicing elit Iure tempore exercitationem qui debitis velit',
        price: 400,
        seller: 'Mary Thompsson',
        city: 'Texas',
        time: '2021-01-10 17:00',
        category: 'Fashion & Accessories'
      },
      {
        name: 'Iphone 11 Pro Max',
        pic: "https://tse3.mm.bing.net/th?id=OIP.h2SPe6Kx3QNclNqkZUvgxQHaFj&pid=Api&P=0&w=222&h=168",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Iure tempore exercitationem qui debitis velit Lorem ipsum dolor sit amet consectetur adipisicing elit Iure tempore exercitationem qui debitis velit',
        price: 1000,
        seller: 'Boy Davidsson',
        city: 'Idaho',
        time: '2020-11-15 13:00',
        category: 'Electronic & Computer'
      },
      {
        name: 'Harry Potter and The Chamber of Secrets',
        pic: "https://tse1.mm.bing.net/th?id=OIP.djZJ3rBNuG8ZNWeUtsKzJwHaFj&pid=Api&P=0&w=218&h=164",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Iure tempore exercitationem qui debitis velit Lorem ipsum dolor sit amet consectetur adipisicing elit Iure tempore exercitationem qui debitis velit',
        price: 17,
        seller: 'Charles Harisson',
        city: 'California',
        time: '2021-01-04 10:00',
        category: 'Film, Book & Music'
      }
    ]
  },

  mutations: {
    addProduct(state, itemName) {
      state.products.unshift(itemName)
    },

    removeItem(state, itemName) {
      let ind = state.products.indexOf(itemName);
      state.products.splice(ind, 1)
    },

    donePosted(state, itemName) {
      let ind = state.products.indexOf(itemName);
      let moveItem = state.products.splice(ind, 1); 
      state.donePostLists.unshift(moveItem[0]);  
    },

    removeItemDone(state, itemName) {
      let x = state.donePostLists.indexOf(itemName);
      state.donePostLists.splice(x, 1)
    },

    moveItemUp(state, itemName) {
      let m = state.products.indexOf(itemName);
      if (m === 0) {
        console.log("Cant move up more")
        return;
      }
      state.products.splice((m - 1), 2, state.products[m], state.products[m - 1]);
    },

    moveItemDown(state, itemName) {
      let p = state.products.indexOf(itemName);
      let q = p + 1;
      if (q < 0 || q == state.products.length) return;
      let r = [p, q].sort();
      state.products.splice(r[0], 2, state.products[r[1]], state.products[r[0]]);
    }
  }
})