# VuePress
## 个人的博客地址
[https://tomny2016.github.io/](https://tomny2016.github.io/)

## VuePress 文档地址
- [VuePress 0.x](https://vuepress.vuejs.org/zh/)
- [VuePress 1.x](https://v0.vuepress.vuejs.org/zh/guide/)

::: tip 写在前面
 新增文件、导航栏变化 可能不能及时热加载，这时候，重新编译一下即可。
:::

### 项目搭建
新建一个文件，使用VuePress
```bash
# 将 VuePress 作为一个本地依赖安装
yarn add -D vuepress # 或者：npm install -D vuepress

# 新建一个 docs 文件夹
mkdir docs
```
接着，在 package.json 里加会有一些脚本:
```json
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
```
然后就可以开始写作了:
```bash
yarn docs:dev # 或者：npm run docs:dev # 或者：npm run dev
```
要生成静态的 HTML 文件，运行：
```bash
yarn docs:build # 或者：npm run docs:build # 或者：npm run build
```
### 安装依赖
```bash
yarn
```

### 启动
```bash
yarn run dev
```

### 部署
```bash
yarn run build
```

### 指南
1. 生成的dist的文件夹的内容直接覆盖到Tomny2016.GitHub.io的文件夹下
```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     .
│     └─ components
│     └─ config.js
│     └─ dist
└─ package.json

```
2. 直接提交代码到仓库

```bash
git push origin master
```
## 在 Markdown 中 使用 Vue

[官方文档](https://v0.vuepress.vuejs.org/zh/guide/using-vue.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6)
1. 在.md文件内写入
```md
<ClientOnly>
  <OtherComponent/>
</ClientOnly>
```
2. 这里的`OtherComponent`必须放到`.vuepress/components`文件夹下。
```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     .
│     └─ components
└─ package.json
```
::: warning 重要
请确保一个自定义组件的名字包含连接符或者是 PascalCase，否则，它将会被视为一个内联元素，并被包裹在一个`<p>`标签中，这将会导致 HTML 渲染紊乱，因为 HTML 标准规定， `<p>`标签中不允许放置任何块级元素。
:::
这里也就是说里面的组件必须是`驼峰`命名或者是`e-button`这种连接符命名。

3. `OtherComponent.vue`的代码

<<<@/docs/.vuepress/components/OtherComponent.vue

**效果**
<ClientOnly>
  <OtherComponent/>
</ClientOnly>

## 导航栏
[官方文档](https://v0.vuepress.vuejs.org/zh/default-theme-config/#%E9%A6%96%E9%A1%B5)

#### 导航栏
```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}
```
#### 侧边栏
```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}
```

## 导入代码段
[官方文档](https://v0.vuepress.vuejs.org/zh/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E6%AE%B5)

注意这里和官方文档差不多
```
<<<@/docs/.vuepress/components/OtherComponent.vue
```
这里唯一要注意的是`0.x`版本`<<<`和`@`之间不能有空格，
这里唯一要注意的是`1.x`版本`<<<`和`@`之间可以有空格，

## 配置全局css
[Styling](https://vuepress.vuejs.org/zh/config/#styling)
###### index.styl
VuePress 提供了一种添加额外样式的简便方法。你可以创建一个 `.vuepress/styles/index.styl` 文件。这是一个 Stylus 文件，但你也可以使用正常的 CSS 语法。

```css
.content {
  font-size 30px
}
/* or */
.content {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
  background: #fff;
}
```