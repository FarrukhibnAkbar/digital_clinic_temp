<template>
  <ToastMessage />
  <component :is="layout"/>
</template>


<script>
import ToastMessage from "@/components/ToastMessage.vue";
import authLayout from "@/layouts/AuthLayout.vue";
import mainLayout from "@/layouts/MainLayout.vue";
import { inject } from 'vue';
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: {ToastMessage},
  setup() {
    const layouts = { mainPage: mainLayout, authPage: authLayout }
    const route = useRoute();
    const layout = computed(() => layouts[route.meta.layout])
    const toastState = inject('toastState')
    return {toastState, layout}
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
