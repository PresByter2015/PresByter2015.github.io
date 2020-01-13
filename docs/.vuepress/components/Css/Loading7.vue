<template>
  <div class="loading-item">
    <div class="" @click="show = !show"></div>
    <div class="radar-spinner" @click="show = !show">
      <div class="circle">
        <div class="circle-inner-container">
          <div class="circle-inner"></div>
        </div>
      </div>

      <div class="circle">
        <div class="circle-inner-container">
          <div class="circle-inner"></div>
        </div>
      </div>

      <div class="circle">
        <div class="circle-inner-container">
          <div class="circle-inner"></div>
        </div>
      </div>

      <div class="circle">
        <div class="circle-inner-container">
          <div class="circle-inner"></div>
        </div>
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
<div class="radar-spinner" >
  <div class="circle">
    <div class="circle-inner-container">
      <div class="circle-inner"></div>
    </div>
  </div>

  <div class="circle">
    <div class="circle-inner-container">
      <div class="circle-inner"></div>
    </div>
  </div>

  <div class="circle">
    <div class="circle-inner-container">
      <div class="circle-inner"></div>
    </div>
  </div>

  <div class="circle">
    <div class="circle-inner-container">
      <div class="circle-inner"></div>
    </div>
  </div>
</div>
      `,
      css1: `
.radar-spinner, .radar-spinner * {
      box-sizing: border-box;
    }

    .radar-spinner {
      height: 60px;
      width: 60px;
      position: relative;
    }

    .radar-spinner .circle {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      animation: radar-spinner-animation 2s infinite;
    }

    .radar-spinner .circle:nth-child(1) {
      padding: calc(60px * 5 * 2 * 0 / 110);
      animation-delay: 300ms;
    }

    .radar-spinner .circle:nth-child(2) {
      padding: calc(60px * 5 * 2 * 1 / 110);
      animation-delay: 300ms;
    }

    .radar-spinner .circle:nth-child(3) {
      padding: calc(60px * 5 * 2 * 2 / 110);
      animation-delay: 300ms;
    }

    .radar-spinner .circle:nth-child(4) {
      padding: calc(60px * 5 * 2 * 3 / 110);
      animation-delay: 0ms;
    }

    .radar-spinner .circle-inner, .radar-spinner .circle-inner-container {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      border: calc(60px * 5 / 110) solid transparent;
    }

    .radar-spinner .circle-inner {
      border-left-color: #ff1d5e;
      border-right-color: #ff1d5e;
    }

    @keyframes radar-spinner-animation {
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
      `
    };
  }
};
</script>

<style scoped>
.radar-spinner,
.radar-spinner * {
  box-sizing: border-box;
}

.radar-spinner {
  height: 60px;
  width: 60px;
  position: relative;
}

.radar-spinner .circle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  animation: radar-spinner-animation 2s infinite;
}

.radar-spinner .circle:nth-child(1) {
  padding: calc(60px * 5 * 2 * 0 / 110);
  animation-delay: 300ms;
}

.radar-spinner .circle:nth-child(2) {
  padding: calc(60px * 5 * 2 * 1 / 110);
  animation-delay: 300ms;
}

.radar-spinner .circle:nth-child(3) {
  padding: calc(60px * 5 * 2 * 2 / 110);
  animation-delay: 300ms;
}

.radar-spinner .circle:nth-child(4) {
  padding: calc(60px * 5 * 2 * 3 / 110);
  animation-delay: 0ms;
}

.radar-spinner .circle-inner,
.radar-spinner .circle-inner-container {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: calc(60px * 5 / 110) solid transparent;
}

.radar-spinner .circle-inner {
  border-left-color: #ff1d5e;
  border-right-color: #ff1d5e;
}

@keyframes radar-spinner-animation {
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>