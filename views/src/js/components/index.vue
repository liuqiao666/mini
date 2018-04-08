<template>
  <div>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  watch: {
  },
  methods: {
    changeFeedback(id) {
      let str = document.getElementById(id).className;
      let tag = str.substring(25,str.length);
      if(tag == "right") {
        document.getElementById(id).className = "glyphicon glyphicon-menu-down";
      }
      else {
        document.getElementById(id).className = "glyphicon glyphicon-menu-right";
      }
    }
  }
}
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>