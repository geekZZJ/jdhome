<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img src="http://www.dell-lee.com/imgs/vue3/cart.png" alt="" class="check__icon__img">
        <div class="check__icon__tag">1</div>
      </div>
      <div class="check__info">
        总结：<span class="check__info__price">&yen;127</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style scoped lang="scss">
.cart{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: .5rem;
  background-color: green;
}
</style>
