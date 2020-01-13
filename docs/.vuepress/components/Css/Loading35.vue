<template>
  <div class="loading-item" @click="show = !show">
    <div class="" @click="show = !show">
      <div class="l_main" @click="show = !show">
        <div class="l_square"><span></span><span></span><span></span></div>
        <div class="l_square"><span></span><span></span><span></span></div>
        <div class="l_square"><span></span><span></span><span></span></div>
        <div class="l_square"><span></span><span></span><span></span></div>
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
<div class="l_main">
		<div class="l_square"><span></span><span></span><span></span></div>
		<div class="l_square"><span></span><span></span><span></span></div>
		<div class="l_square"><span></span><span></span><span></span></div>
		<div class="l_square"><span></span><span></span><span></span></div>
	</div>

      `,
      css1: `
.l_main {
  
}
@media (max-width: 550px) {
  .loader {
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
  }
}
@media (max-width: 440px) {
  .loader {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
}
.l_square {
  position: relative;
}
.l_square:nth-child(1) {
  margin-left: 0px;
}
.l_square:nth-child(2) {
  margin-left: 12px;
}
.l_square:nth-child(3) {
  margin-left: 24px;
}
.l_square:nth-child(4) {
  margin-left: 36px;
}
.l_square span {
  position: absolute;
  top: 0px;
  left: 20px;
  height: 10px;
  width: 10px;
  border-radius: 2px;
  background-color: #fc2f70;
}
.l_square span:nth-child(1) {
  top: 0px;
}
.l_square span:nth-child(2) {
  top: 12px;
}
.l_square span:nth-child(3) {
  top: 24px;
}
.l_square:nth-child(1) span {
  -webkit-animation: animsquare1 2s infinite ease-in;
  animation: animsquare1 2s infinite ease-in;
}
.l_square:nth-child(2) span {
  -webkit-animation: animsquare2 2s infinite ease-in;
  animation: animsquare2 2s infinite ease-in;
}
.l_square:nth-child(3) span {
  -webkit-animation: animsquare3 2s infinite ease-in;
  animation: animsquare3 2s infinite ease-in;
}
.l_square:nth-child(4) span {
  -webkit-animation: animsquare4 2s infinite ease-in;
  animation: animsquare4 2s infinite ease-in;
}
.l_square span:nth-child(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.l_square span:nth-child(2) {
  -webkit-animation-delay: 0.15s;
  animation-delay: 0.15s;
}
.l_square span:nth-child(3) {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
@-webkit-keyframes animsquare1 {
  0%,
  5%,
  95%,
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  30%,
  70% {
    -webkit-transform: translate(-40px, 0px) rotate(-90deg);
    transform: translate(-40px, 0px) rotate(-90deg);
  }
}
@keyframes animsquare1 {
  0%,
  5%,
  95%,
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  30%,
  70% {
    -webkit-transform: translate(-40px, 0px) rotate(-90deg);
    transform: translate(-40px, 0px) rotate(-90deg);
  }
}
@-webkit-keyframes animsquare2 {
  0%,
  10%,
  90%,
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  35%,
  65% {
    -webkit-transform: translate(-40px, 0px) rotate(-90deg);
    transform: translate(-40px, 0px) rotate(-90deg);
  }
}
@keyframes animsquare2 {
  0%,
  10%,
  90%,
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  35%,
  65% {
    -webkit-transform: translate(-40px, 0px) rotate(-90deg);
    transform: translate(-40px, 0px) rotate(-90deg);
  }
}
@-webkit-keyframes animsquare3 {
  0%,
  15%,
  85%,
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  40%,
  60% {
    -webkit-transform: translate(-40px, 0px) rotate(-90deg);
    transform: translate(-40px, 0px) rotate(-90deg);
  }
}
@keyframes animsquare3 {
  0%,
  15%,
  85%,
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  40%,
  60% {
    -webkit-transform: translate(-40px, 0px) rotate(-90deg);
    transform: translate(-40px, 0px) rotate(-90deg);
  }
}
@-webkit-keyframes animsquare4 {
  0%,
  20%,
  80%,
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  45%,
  55% {
    -webkit-transform: translate(-40px, 0px) rotate(-90deg);
    transform: translate(-40px, 0px) rotate(-90deg);
  }
}
@keyframes animsquare4 {
  0%,
  20%,
  80%,
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  45%,
  55% {
    -webkit-transform: translate(-40px, 0px) rotate(-90deg);
    transform: translate(-40px, 0px) rotate(-90deg);
  }
}
      `
    };
  }
};
</script>

<style scoped>
.l_main {
  width: 66px;
  height: 66px;
}
@media (max-width: 550px) {
  .loader {
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
  }
}
@media (max-width: 440px) {
  .loader {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
}
.l_square {
  position: relative;
}
.l_square:nth-child(1) {
  margin-left: 0px;
}
.l_square:nth-child(2) {
  margin-left: 12px;
}
.l_square:nth-child(3) {
  margin-left: 24px;
}
.l_square:nth-child(4) {
  margin-left: 36px;
}
.l_square span {
  position: absolute;
  top: 0px;
  left: 20px;
  height: 10px;
  width: 10px;
  border-radius: 2px;
  background-color: #fc2f70;
}
.l_square span:nth-child(1) {
  top: 0px;
}
.l_square span:nth-child(2) {
  top: 12px;
}
.l_square span:nth-child(3) {
  top: 24px;
}
.l_square:nth-child(1) span {
  -webkit-animation: animsquare1 2s infinite ease-in;
  animation: animsquare1 2s infinite ease-in;
}
.l_square:nth-child(2) span {
  -webkit-animation: animsquare2 2s infinite ease-in;
  animation: animsquare2 2s infinite ease-in;
}
.l_square:nth-child(3) span {
  -webkit-animation: animsquare3 2s infinite ease-in;
  animation: animsquare3 2s infinite ease-in;
}
.l_square:nth-child(4) span {
  -webkit-animation: animsquare4 2s infinite ease-in;
  animation: animsquare4 2s infinite ease-in;
}
.l_square span:nth-child(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.l_square span:nth-child(2) {
  -webkit-animation-delay: 0.15s;
  animation-delay: 0.15s;
}
.l_square span:nth-child(3) {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
@-webkit-keyframes animsquare1 {
  0%,
  5%,
  95%,
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  30%,
  70% {
    -webkit-transform: translate(-40px, 0px) rotate(-90deg);
    transform: translate(-40px, 0px) rotate(-90deg);
  }
}
@keyframes animsquare1 {
  0%,
  5%,
  95%,
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  30%,
  70% {
    -webkit-transform: translate(-40px, 0px) rotate(-90deg);
    transform: translate(-40px, 0px) rotate(-90deg);
  }
}
@-webkit-keyframes animsquare2 {
  0%,
  10%,
  90%,
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  35%,
  65% {
    -webkit-transform: translate(-40px, 0px) rotate(-90deg);
    transform: translate(-40px, 0px) rotate(-90deg);
  }
}
@keyframes animsquare2 {
  0%,
  10%,
  90%,
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  35%,
  65% {
    -webkit-transform: translate(-40px, 0px) rotate(-90deg);
    transform: translate(-40px, 0px) rotate(-90deg);
  }
}
@-webkit-keyframes animsquare3 {
  0%,
  15%,
  85%,
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  40%,
  60% {
    -webkit-transform: translate(-40px, 0px) rotate(-90deg);
    transform: translate(-40px, 0px) rotate(-90deg);
  }
}
@keyframes animsquare3 {
  0%,
  15%,
  85%,
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  40%,
  60% {
    -webkit-transform: translate(-40px, 0px) rotate(-90deg);
    transform: translate(-40px, 0px) rotate(-90deg);
  }
}
@-webkit-keyframes animsquare4 {
  0%,
  20%,
  80%,
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  45%,
  55% {
    -webkit-transform: translate(-40px, 0px) rotate(-90deg);
    transform: translate(-40px, 0px) rotate(-90deg);
  }
}
@keyframes animsquare4 {
  0%,
  20%,
  80%,
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  45%,
  55% {
    -webkit-transform: translate(-40px, 0px) rotate(-90deg);
    transform: translate(-40px, 0px) rotate(-90deg);
  }
}
</style>