<template>
  <div  class="loading-item">
    <div class="loading1" @click="show = !show"></div>
    <Modal :show="show" @close='show=false' :html='html1' :css='css1'></Modal>
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
      html1:
      `
<div class="loading1"></div>
      `,
      css1:
      `
div.loading1 {
  position: relative;
  width: 2em;
  height: 2em;
  border: 3px solid #1890ff;
  overflow: hidden;
  animation: spin 3s ease infinite;
}

div.loading1::before {
  content: '';
  position: absolute;
  /* top: -3px;
  left: -3px; */
  width: 2em;
  height: 2em;
  background-color: #40a9ff;
  transform-origin: center bottom;
  transform: scaleY(1);
  animation: fill 3s linear infinite;
}

@keyframes spin {
  50%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fill {
  25%,
  50% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
      `,
    };
  }
};
</script>

<style scoped>
div.loading1 {
  position: relative;
  width: 2em;
  height: 2em;
  border: 3px solid #1890ff;
  overflow: hidden;
  animation: spin 3s ease infinite;
}

div.loading1::before {
  content: '';
  position: absolute;
  /* top: -3px;
  left: -3px; */
  width: 2em;
  height: 2em;
  background-color: #40a9ff;
  transform-origin: center bottom;
  transform: scaleY(1);
  animation: fill 3s linear infinite;
}

@keyframes spin {
  50%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fill {
  25%,
  50% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}

</style>