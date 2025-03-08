// components/ErrorToast.vue
<template>
  <div class="toast-container">
    <div  v-for="(toast, index) in toastState.toasts" :key="index" :class="['toast', toast.type]">
      <span>{{ toast.message }}</span>
      <button @click="removeToast(index)">✖</button>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['toastState'],
  methods: {
    removeToast(index) {
      this.toastState.toasts.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.toast-container {
  max-width: 30%;
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
}

.toast {
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.error {
  background-color: #ff4d4d;
}

.success {
  background-color: #4CAF50;
}

.toast button {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
</style>
