<template>
  <div class="loading-item">
    <div class="" @click="show = !show"></div>
    <div class="pixel-spinner" @click="show = !show">
      <div class="pixel-spinner-inner"></div>
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
<div class="pixel-spinner">
  <div class="pixel-spinner-inner"></div>
</div>
      `,
      css1: `
.pixel-spinner, .pixel-spinner * {
      box-sizing: border-box;
    }

    .pixel-spinner {
      height: 70px;
      width: 70px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .pixel-spinner .pixel-spinner-inner {
      width: calc(70px / 7);
      height: calc(70px / 7);
      background-color: #ff1d5e;
      color: #ff1d5e;
      box-shadow: 15px 15px  0 0,
                  -15px -15px  0 0,
                  15px -15px  0 0,
                  -15px 15px  0 0,
                  0 15px  0 0,
                  15px 0  0 0,
                  -15px 0  0 0,
                  0 -15px 0 0;
      animation: pixel-spinner-animation 2000ms linear infinite;
    }

    @keyframes pixel-spinner-animation {
      50% {
        box-shadow: 20px 20px 0px 0px,
                    -20px -20px 0px 0px,
                    20px -20px 0px 0px,
                    -20px 20px 0px 0px,
                    0px 10px 0px 0px,
                    10px 0px 0px 0px,
                    -10px 0px 0px 0px,
                    0px -10px 0px 0px;
      }
      75% {
        box-shadow: 20px 20px 0px 0px,
                    -20px -20px 0px 0px,
                    20px -20px 0px 0px,
                    -20px 20px 0px 0px,
                    0px 10px 0px 0px,
                    10px 0px 0px 0px,
                    -10px 0px 0px 0px,
                    0px -10px 0px 0px;
      }
      100% {
        transform: rotate(360deg);
      }
    }
      `
    };
  }
};
</script>

<style scoped>
.pixel-spinner,
.pixel-spinner * {
  box-sizing: border-box;
}

.pixel-spinner {
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.pixel-spinner .pixel-spinner-inner {
  width: calc(70px / 7);
  height: calc(70px / 7);
  background-color: #ff1d5e;
  color: #ff1d5e;
  box-shadow: 15px 15px 0 0, -15px -15px 0 0, 15px -15px 0 0, -15px 15px 0 0,
    0 15px 0 0, 15px 0 0 0, -15px 0 0 0, 0 -15px 0 0;
  animation: pixel-spinner-animation 2000ms linear infinite;
}

@keyframes pixel-spinner-animation {
  50% {
    box-shadow: 20px 20px 0px 0px, -20px -20px 0px 0px, 20px -20px 0px 0px,
      -20px 20px 0px 0px, 0px 10px 0px 0px, 10px 0px 0px 0px, -10px 0px 0px 0px,
      0px -10px 0px 0px;
  }
  75% {
    box-shadow: 20px 20px 0px 0px, -20px -20px 0px 0px, 20px -20px 0px 0px,
      -20px 20px 0px 0px, 0px 10px 0px 0px, 10px 0px 0px 0px, -10px 0px 0px 0px,
      0px -10px 0px 0px;
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>