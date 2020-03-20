import Vue from "vue";
import App from "./App.vue";
import router from "./router"
import HttpTool from "plugins/axios.js";
Vue.prototype.HttpTool = HttpTool;
Vue.config.productionTip = false
new Vue({
    el:"#app",
    router,
    template:'<App/>',
    components:{App}
});