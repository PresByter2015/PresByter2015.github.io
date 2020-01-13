<template>
  <div class="loading-item">
    <div class="" @click="show = !show"></div>
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

      `,
      css1:
      `

      `,
    };
  }
};
</script>

<style scoped>

</style>