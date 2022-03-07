<!-- npm组件发布平台使用的描述是项目的.md文件 -->
# yup-ui 组件库

### 1.快速开始

```bash
npm i yup-ui
```

#### 2.引用组件库
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