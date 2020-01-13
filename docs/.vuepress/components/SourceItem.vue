<template>
  <div class="category-item">
    <div class="container">
      <div class="item-logo">
        <a :href="href" :title='title' target="_blank" rel="noopener noreferrer">
          <img :src="logo" :alt="title" srcset="" />
        </a>
      </div>
      <div class="item-desc">
        <p class="item-desc-title">
          <a :href="href" target="_blank" rel="noopener noreferrer">{{title}}</a>
        </p>
        <p class="item-desc-sub" :title='desc'>{{desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    logo:{
      type:String,
      default:'https://avatars1.githubusercontent.com/u/23261889?s=460&v=4'
    },
    href:{
      type:String,
      default:'https://tomny2016.github.io/'
    },
    title:{
      type:String,
      default:'待补充'
    },
    desc:{
      type:String,
      default:'正在积极收集中...'
    }
  },
};
</script>
<style scoped>
.item-logo img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
  background: #fff;
}
.item-logo {
  float: left;
  width: 60px;
  height: 60px;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid #eee;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  overflow: hidden;
}
.item-desc .item-desc-title {
  white-space: nowrap;
  color: #323232;
  font-size: 16px;
}
.item-desc .item-desc-sub {
  height: 32px;
  line-height: 16px;
  color: #9e9e9e;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  cursor: text;
}
.item-desc {
  margin-left: 70px;
  color: #9e9e9e;
}
.container {
  overflow: hidden;
  margin-right: 10px;
  padding: 10px;
  /* height: 100%; */
  background-color: #f3f3f3;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}
.category-item {
  width: 25%;
  float: left;
  margin-bottom: 10px;
  position: relative;
  height: 90px;
}
a {
  padding: 0;
  margin: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  color: #2d8cf0;
  background: 0 0;
  text-decoration: none;
  outline: 0;
  cursor: pointer;
  -webkit-transition: color 0.2s ease;
  transition: color 0.2s ease;
}
a:active, a:hover {
    outline: 0;
    text-decoration: none;
}
p {
  margin: 0;
  padding: 0;
}
</style>>
