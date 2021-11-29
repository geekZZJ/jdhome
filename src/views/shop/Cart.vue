<link rel="stylesheet" href="../../style/variable.scss">
<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="" class="check__icon__img">
        <div class="check__icon__tag">{{total}}</div>
      </div>
      <div class="check__info">
        总结：<span class="check__info__price">&yen; {{price}}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

const useCartEffect = () => {
  const store = useStore()
  const cartList = store.state.cartList
  const total = computed(() => {
    return cartList.count
  })
  const price = computed(() => {
    return (cartList.count * 10).toFixed(2)
  })
  return { total, price }
}
export default {
  name: 'Cart',
  setup () {
    const { total, price } = useCartEffect()
    return { total, price }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variable";
.cart{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  .check{
    display: flex;
    height: .49rem;
    border-top: .01rem solid $content-bgColor;
    &__icon{
      width: .84rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &__img{
        width: .28rem;
        height: .26rem;
      }
      &__tag{
        position: absolute;
        width: .2rem;
        height: .2rem;
        line-height: .2rem;
        background-color: $highlight-fontColor;
        border-radius: 50%;
        font-size: .12rem;
        text-align: center;
        right: .2rem;
        top: .04rem;
        color: $bg-color;
        transform: scale(.5);
      }
    }
    &__info{
      flex: 1;
      color: $content-fontcolor;
      font-size: .12rem;
      display: flex;
      align-items: center;
      &__price{
        color: $highlight-fontColor;
        font-size: .18rem;
      }
    }
    &__btn{
      width: .98rem;
      background-color: #4fb0f9;
      color: $bg-color;
      font-size: .14rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
