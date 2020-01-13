<template>
  <div class="loading-item">
    <div class="" @click="show = !show">
      <div class="loading33"></div>

    </div>
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
<div></div>

      `,
      css1:
      `
div {
  border: 3px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: #3cefff;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

      `,
    };
  }
};
</script>

<style scoped>
div.loading33 {
  border: 3px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: #3cefff;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

</style>