/*
 * @Author: Qiao YuPei
 * @Date: 2022-03-03 10:33:21
 * @LastEditors: Qiao YuPei
 * @LastEditTime: 2022-03-03 10:39:14
 * @Description: file content
 */
import Demo from "./demo";
import Card from "./card";

const components = {
    Demo,
    Card
};

const install = function (Vue) {
    if (install.installed) return;//避免重复注册
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key]);
    });
}


const API = {
    install
};

export default API;