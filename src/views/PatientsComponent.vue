<template>
  <v-btn @click="showSuccessToast">Show Success Toast</v-btn>
  <v-btn @click="showErrorToast">Show Error Toast</v-btn>
</template>

<script>
export default {
  methods: {
    showSuccessToast() {
      this.$toast('Success! Operation completed.', 'success');
    },
    showErrorToast() {
      this.$toast('Error! Something went wrong.', 'error');
    }
  }
};
</script>
