import Vue from "vue";
import Vuex from "vuex";
let cartProducts = window.localStorage.getItem("cartProducts");
let cartCount = window.localStorage.getItem("cartCount");
Vue.use(Vuex);
// import axios from 'axios'

function saveCart(cartProducts, cartCount) {
  window.localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  window.localStorage.setItem("cartCount", cartCount);
}
const store = new Vuex.Store({
  state: {
    cartProducts: cartProducts ? JSON.parse(cartProducts) : [],

    cartCount: cartCount ? parseInt(cartCount) : 0,
      // cartProducts:[],
      // cartCount:0,
    birthdayCake: [
      {
        id: 1,
        name: "Birthday",
        price: 29,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        totalReviews: 230,
        details:
          "This cookie is the new york theme, liberty statue is on the cookie.",
        tag: "cake",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 2,
        name: "Birthday",
        price: 29,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        totalReviews: 230,
        details:
          "This cookie is the new york theme, liberty statue is on the cookie.",
        tag: "cake",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 3,
        name: "Birthday",
        price: 29,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        totalReviews: 230,
        details:
          "This cookie is the new york theme, liberty statue is on the cookie.",
        tag: "cake",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 4,
        name: "Birthday",
        price: 29,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        totalReviews: 230,
        details:
          "This cookie is the new york theme, liberty statue is on the cookie.",
        tag: "cake",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      }
    ],

    cityCake: [
      {
        id: 5,
        name: "I love New York",
        price: 29,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cake",
        totalReviews: 1,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 6,
        name: "I love New York",
        price: 29,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cake",
        totalReviews: 1,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 7,
        name: "I love New York",
        price: 29,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cake",
        totalReviews: 1,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 8,
        name: "I love New York",
        price: 29,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cake",
        totalReviews: 1,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      }
    ],
    chrismasCake: [
      {
        id: 9,
        name: "Merry Chrismas",
        price: 29,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cake",
        totalReviews: 1,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 10,
        name: "Merry Chrismas",
        price: 29,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cake",
        totalReviews: 1,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 11,
        name: "Merry Chrismas",
        price: 29,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cake",
        totalReviews: 1,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 12,
        name: "Merry Chrismas",
        price: 29,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cake",
        totalReviews: 1,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      }
    ],

    city: [
      {
        id: 13,
        name: "Liberty Statue",
        price: Math.round(3 * 0.8),
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,

        tag: "cookie 20% OFF",
        totalReviews: 0,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 14,
        name: "Eiffel Tower",
        price: Math.round(3 * 0.8),
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cookie 20% OFF",
        totalReviews: 0,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 15,
        name: "Golden State",
        price: Math.round(3 * 0.8),
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cookie 20% OFF",
        totalReviews: 0,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 16,
        name: "Emperor Building",
        price: Math.round(3 * 0.8),
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cookie 20% OFF",
        totalReviews: 0,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 17,
        name: "Water fall",
        price: Math.round(3 * 0.8),
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cookie 20% OFF",
        totalReviews: 0,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 18,
        name: "Skydiving",
        price: 3,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cookie",
        totalReviews: 0,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 19,
        name: "Neuschwanstein Castle",
        price: 3,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cookie",
        totalReviews: 0,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 20,
        name: "Louvre",
        price: 3,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cookie",
        totalReviews: 0,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      }
    ],
    birthday: [
      {
        id: 21,
        name: "Happy Birthday",
        price: 3,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cookie",
        totalReviews: 0,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 22,
        name: "Happy Birthday",
        price: 3,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cookie",
        totalReviews: 0,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 23,
        name: "Happy Birthday",
        price: 3,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cookie",
        totalReviews: 0,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 24,
        name: "Happy Birthday",
        price: 3,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cookie",
        totalReviews: 0,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      }
    ],
    chrismas: [
      {
        id: 25,
        name: "Chrismas",
        price: 3,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cookie",
        totalReviews: 0,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 26,
        name: "Chrismas",
        price: 3,
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cookie",
        totalReviews: 0,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 27,
        name: "Chrismas ",
        price: Math.round(3 * 0.9),
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cookie 10% OFF",
        totalReviews: 0,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      },
      {
        id: 28,
        name: "Chrismas ",
        price: Math.round(3 * 0.9),
        image: require("@/assets/img/cookie1.jpg"),
        count: 1,
        tag: "cookie 10% OFF",
        totalReviews: 0,
        details:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
        message: "",
        flavor: "",
        size: "",
        shape: "",
        color: ""
      }
    ],

    currentProduct: {},
    // loading:true,
    showPopupCart: false
  },
  mutations: {
    ADD_PRODUCT: (state, product) => {
      let found = state.cartProducts.find((item) => {
        return item.id === product.id && item.message === product.message;
      });

      if (found) {
        found.count++;
        found.totalPrice = found.count * found.price;
      } else {
        state.cartProducts.push(product);

        Vue.set(product, "count", 1);
        Vue.set(product, "totalPrice", product.price);
      }

      const bounce = document.getElementById("cartAnimate");

      bounce.classList.add("animated", "bounce");
      bounce.addEventListener("animationend", function() {
        bounce.classList.remove("animated", "bounce");
      });

      state.cartCount++;
      saveCart(state.cartProducts, state.cartCount);
    },

    removeAll: state => {
      state.cartProducts.splice(0);

      saveCart(state.cartProducts, state.cartCount);
    },
    // changeCount: (state,product,value) =>{
    //     this.state.newCount = value;
    //     Vue.set(product,'count',product.newCount)

    // },

    removeFromCart: (state, product) => {
      let index = state.cartProducts.indexOf(product);
      let found = state.cartProducts.find(item => item.id == product.id);
      if (found.count > 1) {
        found.count--;
        found.totalPrice = found.count * found.price;
      } else {
        state.cartProducts.splice(index, 1);
      }
      // const fadeOutLeft = document.getElementById('animatedRow');

      // fadeOutLeft.classList.add('animated','fadeOutLeft')
      // fadeOutLeft.addEventListener('animationend', function() { fadeOutLeft.classList.remove('animated','fadeOutLeft') })

      state.cartCount--;

      saveCart(state.cartProducts, state.cartCount);
    },
    clearProduct(state){
     state.cartProduct = [];
       state.cartCount = 0
    },

    updateMessage(state, message) {
      state.currentProduct.message = message;
      saveCart(state.cartProducts, state.cartCount);
    },
    updateFlavor(state, flavor) {
      state.currentProduct.flavor = flavor;
      saveCart(state.cartProducts, state.cartCount);
    },
    updateSize(state, size) {
      state.currentProduct.size = size;
      saveCart(state.cartProducts, state.cartCount);
    },
    updateShape(state, shape) {
      state.currentProduct.shape = shape;
      saveCart(state.cartProducts, state.cartCount);
    },
    updateColor(state, color) {
      state.currentProduct.color = color;
      saveCart(state.cartProducts, state.cartCount);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },

    SHOW_POPUP_CART: state => {
      state.showPopupCart = !state.showPopupCart;
    }
    // getProduct:(state,cartProducts) => {
    //   state.cartProducts = cartProducts
    // },
    // changeLoadingState(state, loading) {
    //   state.loading = loading
    // },
  },
  actions: {
    addProduct: (context, product) => {
      context.commit("ADD_PRODUCT", product);
    },
    // getProduct ({commit}) {
    //   axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).
    //   then(r => r.data)
    //     .then(cartProducts => {
    //     commit('getProduct', cartProducts)
    //     })
    // },

    currentProduct: (context, product) => {
      context.commit("CURRENT_PRODUCT", product);
    },

    showOrHiddenPopupCart: context => {
      context.commit("SHOW_POPUP_CART");
    }
  },
  getters: {
    getBirthdayCake: state => state.birthdayCake,
    getChrismasCake: state => state.chrismasCake,
    getCityCake: state => state.cityCake,
    getCity: state => state.city,
    getBirthday: state => state.birthday,
    getChrismas: state => state.chrismas,
    getAllCake: state =>
      state.birthdayCake.concat(state.chrismasCake, state.cityCake),
    getAllCookie: state => state.city.concat(state.birthday, state.chrismas),
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getPopupCart: state => state.showPopupCart,
    getMessage: state => state.cartProducts.message
  }
});

export default store;
