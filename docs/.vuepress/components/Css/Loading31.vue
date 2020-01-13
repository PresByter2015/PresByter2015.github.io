<template>
  <div class="loading-item">
    <div class="" @click="show = !show">
      <svg viewBox="0 0 50 50">
        <circle class="ring" cx="25" cy="25" r="20"></circle>
        <circle class="ball" cx="25" cy="5" r="3.5"></circle>
      </svg>
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
<svg viewBox="0 0 50 50">
  <circle class="ring" cx="25" cy="25" r="20"></circle>
  <circle class="ball" cx="25" cy="5" r="3.5"></circle>
</svg>

      `,
      css1: `
svg {
  width: 3.75em;
  animation: 1.5s spin ease infinite;
}

.ring {
  fill: none;
  stroke: hsla(341, 97%, 59%, 0.3);
  stroke-width: 2;
}

.ball {
  fill: #fc2f70;
  stroke: none;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

      `
    };
  }
};
</script>

<style scoped>
svg {
  width: 3.75em;
  animation: 1.5s spin ease infinite;
}

.ring {
  fill: none;
  stroke: hsla(341, 97%, 59%, 0.3);
  stroke-width: 2;
}

.ball {
  fill: #fc2f70;
  stroke: none;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>