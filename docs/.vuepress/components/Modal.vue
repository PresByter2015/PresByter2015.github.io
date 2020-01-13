<template>
  <div v-show="show" class="modal" @click.stop="close">
    <div class="box" @click.stop="close2">
      <p class="title">HTML</p>
      <div class="block html">
        <p class="code">{{ html }}</p>
      </div>
      <p class="title">CSS</p>
      <div class="block css">
        <p class="code">{{ css }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
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
      
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    close2(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
};
</script>

<style>
.css {
  height: 60%;
  overflow: hidden;
}
.html {
  height: 20%;
  overflow: hidden;
}
.modal {
  /* transition: 1s all; */
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  align-items: center;
  background-color: rgba(39, 41, 84, 0.8);
  z-index: 999;
  margin: auto;
  position: fixed;
  left: 0;
  top: 0;
}
.block {
  overflow-x: auto;
  overflow-y: auto;
  padding: 0.5em;
  background: #272954;
  color: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.title {
  color: #f8f8f8;
  text-align: left;
  width: 100%;
}
pre,
.code {
  font-family: "SFMono-Regular", "Menlo", "Monaco", "Consolas",
    "Liberation Mono", "Courier New", monospace;
  white-space: pre-wrap;
  font-size: 0.9em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin: 0;
  padding: 0;
  width: 100%;
}

.box {
  background: #353763;
  height: 80%;
}
@media (min-width: 1024px) {
  .box {
    max-width: 550px;
    padding: 2em;
  }
}
@media (min-width: 768px) {
  .box {
    max-width: 500px;
    padding: 1.5em;
  }
}
@media (min-width: 640px) {
  .box {
    max-width: 450px;
  }
}
</style>