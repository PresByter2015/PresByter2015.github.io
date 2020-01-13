<template>
  <div class="color">
    <span style="color:#D0393F">
      This is OtherComponent component
    </span>
    <p>{{ 1 + 1 }}</p>
    <span v-for="i in 3">{{ i }} </span>
    <button id="btn" @click="btnClick">{{ buttonName }}</button>
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