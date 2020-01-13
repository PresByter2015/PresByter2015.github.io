<template>
  <div class="loading-item">
    <div class="" @click="show = !show">
      <div class="solar-system">
        <div class="earth-orbit orbit">
          <div class="planet earth"></div>
          <div class="venus-orbit orbit">
            <div class="planet venus"></div>
            <div class="mercury-orbit orbit">
              <div class="planet mercury"></div>
              <div class="sun"></div>
            </div>
          </div>
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
  <div class="solar-system">
    <div class="earth-orbit orbit">
      <div class="planet earth"></div>
      <div class="venus-orbit orbit">
        <div class="planet venus"></div>
        <div class="mercury-orbit orbit">
          <div class="planet mercury"></div>
          <div class="sun"></div>
        </div>
      </div>
    </div>
  </div>


      `,
      css1: `
/* SOLAR SYSTEM */

.solar-system {
  /* width: 250px;
  height: 250px; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.orbit {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #000;
	border-radius: 50%;
}

.earth-orbit {
	width: 85px;
	height: 85px;
  -webkit-animation: spin 12s linear 0s infinite;
}

.venus-orbit {
	width: 55px;
	height: 55px;
  -webkit-animation: spin 7.4s linear 0s infinite;
}

.mercury-orbit {
	width: 30px;
	height: 30px;
  -webkit-animation: spin 3s linear 0s infinite;
}

.planet {
	position: absolute;
	top: -5px;
  width: 10px;
  height: 10px;
	border-radius: 50%;
  background-color: #3ff9dc;
}

.sun {
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: #ffab91;
}
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
}
      `
    };
  }
};
</script>

<style scoped>
/* SOLAR SYSTEM */

.solar-system {
  /* width: 250px;
  height: 250px; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.orbit {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #000;
	border-radius: 50%;
}

.earth-orbit {
	width: 85px;
	height: 85px;
  -webkit-animation: spin 12s linear 0s infinite;
}

.venus-orbit {
	width: 55px;
	height: 55px;
  -webkit-animation: spin 7.4s linear 0s infinite;
}

.mercury-orbit {
	width: 30px;
	height: 30px;
  -webkit-animation: spin 3s linear 0s infinite;
}

.planet {
	position: absolute;
	top: -5px;
  width: 10px;
  height: 10px;
	border-radius: 50%;
  background-color: #3ff9dc;
}

.sun {
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: #ffab91;
}
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
}
</style>