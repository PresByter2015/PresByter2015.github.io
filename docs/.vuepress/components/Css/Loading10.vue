<template>
  <div class="loading-item">
    <div class="" @click="show = !show"></div>
    <div class="trinity-rings-spinner" @click="show = !show">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
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
<div class="trinity-rings-spinner">
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
</div>
      `,
      css1: `
.trinity-rings-spinner, .trinity-rings-spinner * {
      box-sizing: border-box;
    }

    .trinity-rings-spinner {
      height: 66px;
      width: 66px;
      padding: 3px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      overflow: hidden;
      box-sizing: border-box;
    }
    .trinity-rings-spinner .circle {
      position:absolute;
      display:block;
      border-radius:50%;
      border: 3px solid #ff1d5e;
      opacity: 1;
    }

    .trinity-rings-spinner .circle:nth-child(1) {
      height: 60px;
      width: 60px;
      animation : trinity-rings-spinner-circle1-animation 1.5s infinite linear;
      border-width: 3px;
    }
    .trinity-rings-spinner .circle:nth-child(2) {
      height: calc(60px * 0.65);
      width: calc(60px * 0.65);
      animation : trinity-rings-spinner-circle2-animation 1.5s infinite linear;
      border-width: 2px;
    }
    .trinity-rings-spinner .circle:nth-child(3) {
      height: calc(60px * 0.1);
      width: calc(60px * 0.1);
      animation:trinity-rings-spinner-circle3-animation 1.5s infinite linear;
      border-width: 1px;
    }

    @keyframes trinity-rings-spinner-circle1-animation{
      0% {
        transform: rotateZ(20deg) rotateY(0deg);
      }
      100% {
        transform: rotateZ(100deg) rotateY(360deg);
      }
    }
    @keyframes trinity-rings-spinner-circle2-animation{
      0% {
        transform: rotateZ(100deg) rotateX(0deg);
      }
      100% {
        transform: rotateZ(0deg) rotateX(360deg);
      }
    }
    @keyframes trinity-rings-spinner-circle3-animation{
      0% {
        transform: rotateZ(100deg) rotateX(-360deg);
      }
      100% {
        transform: rotateZ(-360deg) rotateX(360deg);
      }
    }
      `
    };
  }
};
</script>

<style scoped>
.trinity-rings-spinner,
.trinity-rings-spinner * {
  box-sizing: border-box;
}

.trinity-rings-spinner {
  height: 66px;
  width: 66px;
  padding: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  box-sizing: border-box;
}
.trinity-rings-spinner .circle {
  position: absolute;
  display: block;
  border-radius: 50%;
  border: 3px solid #ff1d5e;
  opacity: 1;
}

.trinity-rings-spinner .circle:nth-child(1) {
  height: 60px;
  width: 60px;
  animation: trinity-rings-spinner-circle1-animation 1.5s infinite linear;
  border-width: 3px;
}
.trinity-rings-spinner .circle:nth-child(2) {
  height: calc(60px * 0.65);
  width: calc(60px * 0.65);
  animation: trinity-rings-spinner-circle2-animation 1.5s infinite linear;
  border-width: 2px;
}
.trinity-rings-spinner .circle:nth-child(3) {
  height: calc(60px * 0.1);
  width: calc(60px * 0.1);
  animation: trinity-rings-spinner-circle3-animation 1.5s infinite linear;
  border-width: 1px;
}

@keyframes trinity-rings-spinner-circle1-animation {
  0% {
    transform: rotateZ(20deg) rotateY(0deg);
  }
  100% {
    transform: rotateZ(100deg) rotateY(360deg);
  }
}
@keyframes trinity-rings-spinner-circle2-animation {
  0% {
    transform: rotateZ(100deg) rotateX(0deg);
  }
  100% {
    transform: rotateZ(0deg) rotateX(360deg);
  }
}
@keyframes trinity-rings-spinner-circle3-animation {
  0% {
    transform: rotateZ(100deg) rotateX(-360deg);
  }
  100% {
    transform: rotateZ(-360deg) rotateX(360deg);
  }
}
</style>