<template>
  <ToastMessage />
  <mainPage msg="Main page"/>
</template>


<script>
import mainPage from './components/main.vue'
import ToastMessage from "@/components/ToastMessage.vue";
import { inject } from 'vue';

export default {
  components: {ToastMessage, mainPage},
  setup() {
    const toastState = inject('toastState')
    return { toastState }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
