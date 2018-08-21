// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import axios from 'axios'
axios.defaults.withCredentials = true;
import Vuex from 'vuex'
Vue.use(Vuex);
Vue.use(infiniteScroll);
Vue.use(VueLazyload,{
  loading:'static/loading-svg/loading-bars.svg',
  attempt:3,
});

Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    nickName:'',
    cartCount:0
  },
  mutations:{
    updateUserInfo(state,nickName){
      state.nickName = nickName;
    },
    updateCartCount(state,cartCount){
      if(cartCount == '0'){
        state.cartCount = 0;
      }else{
        state.cartCount += cartCount;
      }
    }
  }
});
new Vue({
  el: '#app',
  store,
  router,
  mounted(){
    this.checkLogin();
    this.getCartCount();
  },
  methods:{
    checkLogin(){
      axios.get("/users/checkLogin").then(res=> {
        var res = res.data;
        if (res.status == "0") {
          this.$store.commit("updateUserInfo", res.result);
        }else{
          if(this.$route.path!="/goodsList"){
            this.$router.push("/goodsList");
          }
        }
      });
    },
    getCartCount(){
      axios.get("/users/getCartCount").then(res=>{
        var res = res.data;
        if(res.status=="0"){
          if(res.result == '0'){
            this.$store.commit("updateCartCount",'0');
          }else{
            this.$store.commit("updateCartCount",res.result);
          }
        }
      });
    }
  },
  template: '<App/>',
  components: { App }
})
