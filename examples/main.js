/*
 * @Author: Qiao YuPei
 * @Date: 2022-03-02 10:44:43
 * @LastEditors: Qiao YuPei
 * @LastEditTime: 2022-03-04 11:15:14
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import "../components/css/demo.scss"
import "../components/css/card.scss";
import Demo from "../components/lib/demo/index.js";
import Card from "../components/lib/card/index.js";

/* 整体导入 */
/* import YupUi from "../components/lib/index.js";
Vue.use(YupUi); */
Vue.use(Demo);
Vue.use(Card);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
