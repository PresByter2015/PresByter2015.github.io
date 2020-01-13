<template>
  <div class="color">
    <Css-Button1></Css-Button1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonName: "点击按钮"
    };
  },
  methods: {
    btnClick(e) {
      console.log(e.target.innerText);
      alert(e.target.innerText);
    }
  },
  mounted() {}
};
</script>

<style>
.color {
  color: aqua;
}

</style>