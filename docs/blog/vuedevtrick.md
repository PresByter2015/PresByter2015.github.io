# Vue 开发 小技巧

## attrs和listeners
1. attrs :如果父传子有很多值，那么在子组件需要定义多个props来解决，attrs获取子传父中未在 props 定义的值
```html
// 父组件
<home title="这是标题" width="80" height="80" imgUrl="imgUrl"/>

// 子组件
mounted() {
  console.log(this.$attrs) //{title: "这是标题", width: "80", height: "80", imgUrl: "imgUrl"}
},

```
相对应的如果子组件定义了 props,打印的值就是剔除定义的属性

```html
props: {
  width: {
    type: String,
    default: ''
  }
},
mounted() {
  console.log(this.$attrs) //{title: "这是标题", height: "80", imgUrl: "imgUrl"}
},

```

2. listeners场景：子组件需要调用父组件的方法解决：

listeners" 传入内部组件——在创建更高层次的组件时非常有用

```html
// 父组件
<home @change="change"/>

// 子组件
mounted() {
  console.log(this.$listeners) //即可拿到 change 事件
}

```
如果是孙组件要访问父组件的属性和调用方法,直接一级一级传下去就可以

3. inheritAttrs

```html
// 父组件
<home title="这是标题" width="80" height="80" imgUrl="imgUrl"/>

// 子组件
mounted() {
  console.log(this.$attrs) //{title: "这是标题", width: "80", height: "80", imgUrl: "imgUrl"}
},

inheritAttrs默认值为true，true的意思是将父组件中除了props外的属性添加到子组件的根节点上(说明，即使设置为true，子组件仍然可以通过$attr获取到props意外的属性)
将inheritAttrs:false后,属性就不会显示在根节点上了

```
## parent和children

```html
//父组件
mounted(){
  console.log(this.$children) 
  //可以拿到 一级子组件的属性和方法
  //所以就可以直接改变 data,或者调用 methods 方法
}

//子组件
mounted(){
  console.log(this.$parent) //可以拿到 parent 的属性和方法
}

```
只能拿到一级父组件和子组件

## EventBus
1.就是声明一个全局Vue实例变量 EventBus , 把所有的通信数据，事件监听都存储到这个变量上; 2.类似于 Vuex。但这种方式只适用于极小的项目 3.原理就是利用on和emit 并实例化一个全局 vue 实现数据共享

```html
// 在 main.js
Vue.prototype.$eventBus=new Vue()

// 传值组件
this.$eventBus.$emit('eventTarget','这是eventTarget传过来的值')

// 接收组件
this.$eventBus.$on("eventTarget",v=>{
  console.log('eventTarget',v);//这是eventTarget传过来的值
})

```
##  Vue.observable
用法:让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象;
返回的对象可以直接用于渲染函数和计算属性内，并且会在发生改变时触发相应的更新;
也可以作为最小化的跨组件状态存储器，用于简单的场景。
通讯原理实质上是利用Vue.observable实现一个简易的 vuex

```html
// 文件路径 - /store/store.js
import Vue from 'vue'

export const store = Vue.observable({ count: 0 })
export const mutations = {
  setCount (count) {
    store.count = count
  }
}

//使用
<template>
    <div>
        <label for="bookNum">数 量</label>
            <button @click="setCount(count+1)">+</button>
            <span>{{count}}</span>
            <button @click="setCount(count-1)">-</button>
    </div>
</template>

<script>
import { store, mutations } from '../store/store' // Vue2.6新增API Observable

export default {
  name: 'Add',
  computed: {
    count () {
      return store.count
    }
  },
  methods: {
    setCount: mutations.setCount
  }
}
</script>

```

## install
场景:在 Vue.use()说到,执行该方法会触发 install 是开发vue的插件,这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象(可选)

```javascript
var MyPlugin = {};
  MyPlugin.install = function (Vue, options) {
    // 2. 添加全局资源,第二个参数传一个值默认是update对应的值
    Vue.directive('click', {
      bind(el, binding, vnode, oldVnode) {
        //做绑定的准备工作,添加时间监听
        console.log('指令my-directive的bind执行啦');
      },
      inserted: function(el){
      //获取绑定的元素
      console.log('指令my-directive的inserted执行啦');
      },
      update: function(){
      //根据获得的新值执行对应的更新
      //对于初始值也会调用一次
      console.log('指令my-directive的update执行啦');
      },
      componentUpdated: function(){
      console.log('指令my-directive的componentUpdated执行啦');
      },
      unbind: function(){
      //做清理操作
      //比如移除bind时绑定的事件监听器
      console.log('指令my-directive的unbind执行啦');
      }
    })

    // 3. 注入组件
    Vue.mixin({
      created: function () {
        console.log('注入组件的created被调用啦');
        console.log('options的值为',options)
      }
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      console.log('实例方法myMethod被调用啦');
    }
  }

  //调用MyPlugin
  Vue.use(MyPlugin,{someOption: true })

  //3.挂载
  new Vue({
    el: '#app'
  });

```
## v-pre
场景:vue 是响应式系统,但是有些静态的标签不需要多次编译,这样可以节省性能，跳过这个元素和它的子元素的编译过程。一些静态的内容不需要编辑加这个指令可以加快编辑

```html
<span v-pre>{{ this will not be compiled }}</span>   显示的是{{ this will not be compiled }}
<span v-pre>{{msg}}</span>     即使data里面定义了msg这里仍然是显示的{{msg}}

```
## Object.freeze
场景:一个长列表数据,一般不会更改,但是vue会做getter和setter的转换
用法:是ES5新增的特性，可以冻结一个对象，防止对象被修改
支持:vue 1.0.18+对其提供了支持，对于data或vuex里使用freeze冻结了的对象，vue不会做getter和setter的转换
注意:冻结只是冻结里面的单个属性,引用地址还是可以更改

```javascript
new Vue({
    data: {
        // vue不会对list里的object做getter、setter绑定
        list: Object.freeze([
            { value: 1 },
            { value: 2 }
        ])
    },
    mounted () {
        // 界面不会有响应,因为单个属性被冻结
        this.list[0].value = 100;

        // 下面两种做法，界面都会响应
        this.list = [
            { value: 100 },
            { value: 200 }
        ];
        this.list = Object.freeze([
            { value: 100 },
            { value: 200 }
        ]);
    }
})

```
## vue-loader 小技巧
### preserveWhitespace
场景:开发 vue 代码一般会有空格,这个时候打包压缩如果不去掉空格会加大包的体积 配置preserveWhitespace可以减小包的体积

```javascript
{
  vue: {
    preserveWhitespace: false
  }
}

```
### transformToRequire
场景:以前在写 Vue 的时候经常会写到这样的代码：把图片提前 require 传给一个变量再传给组件

```html
// page 代码
<template>
  <div>
    <avatar :img-src="imgSrc"></avatar>
  </div>
</template>
<script>
  export default {
    created () {
      this.imgSrc = require('./assets/default-avatar.png')
    }
  }
</script>

```
现在:通过配置 transformToRequire 后，就可以直接配置，这样vue-loader会把对应的属性自动 require 之后传给组件

```javascript
// vue-cli 2.x在vue-loader.conf.js 默认配置是
transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
}

// 配置文件,如果是vue-cli2.x 在vue-loader.conf.js里面修改
  avatar: ['default-src']

// vue-cli 3.x 在vue.config.js
// vue-cli 3.x 将transformToRequire属性换为了transformAssetUrls
module.exports = {
  pages,
  chainWebpack: config => {
    config
      .module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
      options.transformAssetUrls = {
        avatar: 'img-src',
      }
      return options;
      });
  }
}

// page 代码可以简化为
<template>
  <div>
    <avatar img-src="./assets/default-avatar.png"></avatar>
  </div>
</template>

```
## 为路径设置别名
1.场景:在开发过程中，我们经常需要引入各种文件，如图片、CSS、JS等，为了避免写很长的相对路径（../），我们可以为不同的目录配置一个别名

2.vue-cli 2.x 配置
```javascript
// 在 webpack.base.config.js中的 resolve 配置项，在其 alias 中增加别名
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },

```
3.vue-cli 3.x 配置

```javascript
// 在根目录下创建vue.config.js
var path = require('path')
function resolve (dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set(key, value) // key,value自行定义，比如.set('@@', resolve('src/components'))
  }
}

```
## img 加载失败
场景:有些时候后台返回图片地址不一定能打开,所以这个时候应该加一张默认图片

```javascript
// page 代码
<img :src="imgUrl" @error="handleError" alt="">
<script>
export default{
  data(){
    return{
      imgUrl:''
    }
  },
  methods:{
    handleError(e){
      e.target.src=reqiure('图片路径') //当然如果项目配置了transformToRequire,参考上面 27.2
    }
  }
}
</script>
```
## router-view key 属性解释
```html
<router-view :key='$route.fullPath'></router-view>
```
这里`router-view` 有一个key的属性，这个key的属性作用是：

1. 不设置 `router-view` 的 key 属性
由于 Vue 会复用相同组件, 即 `/page/1 => /page/2` 或者 `/page?id=1 => /page?id=2` 这类链接跳转时, 将不在执行`created`, `mounted`之类的钩子, 这时候你需要在路由组件中, 添加`beforeRouteUpdate`钩子来执行相关方法拉去数据

相关钩子加载顺序为: `beforeRouteUpdate`

2. 设置 `router-view` 的 key 属性值为 `$route.path`
从`/page/1 => /page/2`, 由于这两个路由的`$route.path`并不一样, 所以组件被强制不复用, 相关钩子加载顺序为:
`beforeRouteUpdate => created => mounted`

从`/page?id=1 => /page?id=2`, 由于这两个路由的`$route.path`一样, 所以和没设置 key 属性一样, 会复用组件, 相关钩子加载顺序为:
`beforeRouteUpdate`

3. 设置 `router-view` 的 key 属性值为 `$route.fullPath`
从`/page/1 => /page/2`, 由于这两个路由的`$route.fullPath`并不一样, 所以组件被强制不复用, 相关钩子加载顺序为:
`beforeRouteUpdate => created => mounted`

从`/page?id=1 => /page?id=2`, 由于这两个路由的`$route.fullPath`并不一样, 所以组件被强制不复用, 相关钩子加载顺序为:
`beforeRouteUpdate => created => mounted`

