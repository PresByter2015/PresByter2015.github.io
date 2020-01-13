<template>
  <div class="loading-item">
    <div class="" @click="show = !show">
      <div class="box">
        <div class="coin"></div>
      </div>
    </div>
    <Modal :show="show" @close="show = false" :html="html1" :css="css1"></Modal>
  </div>
</template>

<script>
export default {
  props: {
    html: {
      type: String,
      default: ""
    },
    css: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      show: false,
      html1: `
<div class="box">
  <div class="coin"></div>
</div>

      `,
      css1: `
.box {
  perspective: 120px;
}

.coin {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 4px solid #3cefff;
  animation: spin 1.5s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotateY(540deg);
  }
}

      `
    };
  }
};
</script>

<style scoped>
.box {
  perspective: 120px;
  background-color: #fff;
}

.coin {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 4px solid #3cefff;
  animation: spin 1.5s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotateY(540deg);
  }
}
</style>