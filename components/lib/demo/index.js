/*
 * @Author: Qiao YuPei
 * @Date: 2022-03-02 13:57:19
 * @LastEditors: Qiao YuPei
 * @LastEditTime: 2022-03-02 14:00:50
 * @Description: file content
 */
import Demo from "../demo/src/main.vue";

Demo.install = function(Vue){
    Vue.component(Demo.name,Demo);
}

export default Demo;