import { reactive } from 'vue';
import ToastMessage from '@/components/ToastMessage.vue';

const toastState = reactive({
    toasts: []
});

const showToast = (message, type = 'error') => {
    const id = Date.now();
    toastState.toasts.push({ id, message, type });

    setTimeout(() => {
        const index = toastState.toasts.findIndex(toast => toast.id === id);
        if (index !== -1) {
            toastState.toasts.splice(index, 1);
        }
    }, 6000);
};

export default {
    install(app) {
        app.config.globalProperties.$toast = showToast;
        app.provide('toastState', toastState);
        app.component('ToastMessage', ToastMessage);
    }
};
