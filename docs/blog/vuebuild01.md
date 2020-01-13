# 从零搭建vue 项目（一）

首先4个官方文档

1. [Vue](https://cn.vuejs.org/)
1. [Vue CLI](https://cli.vuejs.org/zh/)
1. [Vue Router](https://router.vuejs.org/zh/)
1. [Vuex](https://vuex.vuejs.org/zh/)
## 创建vuedemo的项目
```bash
npx @vue/cli create vuedemo

```
![image.png](https://cdn.nlark.com/yuque/0/2019/png/152341/1570864625300-ae9761ce-ec8a-48f1-b04c-a1076085c15a.png#align=left&display=inline&height=247&name=image.png&originHeight=247&originWidth=518&search=&size=9572&status=done&width=518)

![image.png](https://cdn.nlark.com/yuque/0/2019/png/152341/1570864676886-97079b30-a648-4256-b7ec-06ecca360137.png#align=left&display=inline&height=107&name=image.png&originHeight=107&originWidth=430&search=&size=3820&status=done&width=430)
```bash
cd vuedemo

yarn run serve  or npm run serve
```
![image.png](https://cdn.nlark.com/yuque/0/2019/png/152341/1570864716964-bd9f9a26-713c-470f-b9a7-c36780983085.png#align=left&display=inline&height=213&name=image.png&originHeight=213&originWidth=448&search=&size=12321&status=done&width=448)
![image.png](https://cdn.nlark.com/yuque/0/2019/png/152341/1570864755364-76f141f4-a231-45d9-9ac6-4b0afe90a249.png#align=left&display=inline&height=346&name=image.png&originHeight=346&originWidth=543&search=&size=22680&status=done&width=543)
## 项目结构
#### 项目中的vue各个版本号
```json
"dependencies": {
    "@vue/cli-plugin-babel": "^3.12.0",
    "@vue/cli-plugin-eslint": "^3.12.0",
    "@vue/cli-service": "^3.12.0",
    "vue": "^2.6.10",
    "vue-router": "^3.1.3",
    "vuex": "^3.1.1"
  },
```
#### 项目结构
```
├── vue.config.js      		# vue-cli 配置文件
├── public					# 根html 存放目录
.
└── src
    ├── index.html
    ├── main.js
    ├── App.vue  			 # 根vue
    ├── api					 # 请求api文件
    │   └── ... 			 # 抽取出API请求
    ├── components  		 # 公共组件
    │   ├── App.vue
    │   └── ...
    └── pages 				  # 页面合集
    │   ├── A          		  # A 页面
    │   │   └── index.vue     # A 页面导出页面
    │   └── B				  # B 页面
    │   │   └── index.vue     # B 页面导出页面
    │   └── ...
    └── router 				  # 存放路由
    │   ├── index.js          # 我们组装模块并导出 router 的地方
    │   └── routers.js        # router 导出的数据合集
    └── store
        ├── index.js          # 我们组装模块并导出 store 的地方
        ├── actions.js        # 根级别的 action
        ├── mutations.js      # 根级别的 mutation
        └── modules
            ├── cart.js       # 购物车模块
            └── products.js   # 产品模块
```

## 安装vue-router
官方文档[https://router.vuejs.org/zh/installation.html](https://router.vuejs.org/zh/installation.html)

```bash
yarn add vue-router
```
官方文档上，给出了一个 demo
[https://router.vuejs.org/zh/guide/#html](https://router.vuejs.org/zh/guide/#html)
这里，我按照自己项目的结构进行设置。

1. 首先新建 pages、router 文件夹
1. 建立对应的文件内容
1. 在 main.js 引入 router
1. 在 App.vue 设置路由匹配到的组件，即<router-view></router-view>
1. 查看效果


1. 设置如下的文件

![image.png](https://cdn.nlark.com/yuque/0/2019/png/152341/1570867075019-bc91f1bd-1d61-46f8-937d-4a8002087a65.png#align=left&display=inline&height=379&name=image.png&originHeight=379&originWidth=320&search=&size=22089&status=done&width=320)

2. 在router文件夹内设置

```javascript
//  router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
//   mode: 'history'
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) { // 如果未匹配到路由
    next({ path: '/404' })
  } else {
    next() // 如果匹配到正确跳转
  }
})

export default router
```

```javascript
// router/routers.js
export default [
  {path: '/', component: () => import ('../components/HelloWorld.vue')},
  {path: '/demo1', component: () => import ('../pages/demo1/index.vue')},
  {path: '/demo2', component: () => import ('../pages/demo2/index.vue')},
  {path: '/404', component: () => import ('../pages/unfound/index.vue')},
];

```

3. 在 main.js 引入 router

```javascript
// main.js
import Vue from 'vue'
import App from './App.vue'
+ import router from './router'

Vue.config.productionTip = false

new Vue({
+  router,
  render: h => h(App),
}).$mount('#app')

```

4. 在 App.vue 设置路由匹配到的组件，即<router-view></router-view>

```html
<!-- App.vue -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to MyVue" /> -->
    <router-link to="/">Go to 首页</router-link>
    <router-link to="/demo1">Go to demo1</router-link>
    <router-link to="/demo2">Go to demo2</router-link>
    <router-view></router-view>
  </div>
</template>

```

5. 效果

![image.png](https://cdn.nlark.com/yuque/0/2019/png/152341/1570867795712-11f67213-6983-4c3b-9f4b-5a10e5b190d7.png#align=left&display=inline&height=472&name=image.png&originHeight=472&originWidth=527&search=&size=30837&status=done&width=527)
**这里注意：**
如果使用官方 demo 的引入组件，来测试路由的话，会出现以下问题。

```javascript
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
```
会报错，如下
```
 You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.

```
![image.png](https://cdn.nlark.com/yuque/0/2019/png/152341/1570850432921-619571cf-6a82-43fc-86ac-a952a704d907.png#align=left&display=inline&height=156&name=image.png&originHeight=156&originWidth=713&search=&size=15885&status=done&width=713)
这里 需要在vue.config.js 设置如下内容，即可
```javascript
// vue.config.js
module.exports = {
  // 选项...
  runtimeCompiler: true, //加入内容
};

```

再重新编译一下，就好了
[https://cli.vuejs.org/zh/config/#runtimecompiler](https://cli.vuejs.org/zh/config/#runtimecompiler)
详细原因，见 官方文档
[https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6](https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6)

## 安装 vuex
[https://vuex.vuejs.org/zh/](https://vuex.vuejs.org/zh/)
```bash
yarn add vuex
```
store 可以有两种写法，这里会一一分别列出。
**第一种写法**
```javascript
// app.js
export default {
  state: {
    count: 0,
  },
  getters: {},
  mutations: {
    ADD (state, data) {
      state.count = data;
    },
    DEC (state, data) {
      state.count = data;
    },
  },
  actions: {
    add ({commit, state}, data) {
      commit ('ADD', state.count + data);
    },
    dec ({commit, state}, data) {
      commit ('DEC', state.count - data);
    },
  },
};

```
**第二种写法**

```javascript
// app2.js

// initial state
const state = {
    count2: 2,
};

// getters
const getters = {};

// actions
const actions = {
  add2 ({commit, state}, data) {
    commit ('ADD2', state.count2 + data);
  },
  dec2 ({commit, state}, data) {
    commit ('DEC2', state.count2 - data);
  },
};

// mutations
const mutations = {
  ADD2 (state, data) {
    state.count2 = data;
  },
  DEC2 (state, data) {
    state.count2 = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

```
在 demo1 使用

```html
<template>
  <div>
    <h1>demo1</h1>
    <p>app-count：{{ count }}</p>
    <p>app2-count2：{{ count2 }}</p>
    <button @click="add(1)">count 加1</button>
    <button @click="add2(1)">count2 加1</button>
    

    <button @click="dec(1)">count 减1</button>
    <button @click="dec2(1)">count2 减1</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      count: state => state.app.count,
      count2: state => state.app2.count2
    })
  },
  methods: {
    ...mapActions(["add", "dec"]),
    ...mapActions({
      add2: "app2/add2",
      dec2: "app2/dec2"
    })
  },
  created() {
    this.$nextTick(() => {
    });
  }
};
</script>

<style>
</style>
```

导出store
```javascript
// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import app2 from './modules/app2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  //   插件位置
  plugins: [],
  modules: {
    app,
    app2,
  }
})

```

在main.js 引入store
```javascript
import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

```

效果完成
![image.png](https://cdn.nlark.com/yuque/0/2019/png/152341/1570870411519-d9ca5a10-1303-4ffc-8fdc-c6f788adb1e1.png#align=left&display=inline&height=602&name=image.png&originHeight=602&originWidth=522&search=&size=35789&status=done&width=522)


#### 代码地址
[代码地址](https://github.com/Tomny2016/vue-simple-project)