<template>
  <div class="toast">{{message}}</div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.35);
  padding: 0.1rem;
  border-radius: 0.05rem;
  color: #fff;
}
</style>>
