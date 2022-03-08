# 快速开始

#### 安装组件库

```bash
npm i yup-ui
```

#### 引用组件库
> 在main.js中引用组件库

```javascript
// 全部引入
import 'yup-ui/dist/css/index.css';
import YUI from 'yup-ui';
Vue.use(YUI);

//按需引用
import 'yup-ui/dist/css/demo.css';
import {Demo} from 'yup-ui';
Vue.use(Demo);
```