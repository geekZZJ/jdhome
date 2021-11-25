<template>
  <div class="content">
    <div class="category">
      <div :class="{'category__item':true,'category__item--active':currentTab===item.type}" v-for="item in categories" :key="item.type" @click="handleTabClick(item.type)">{{item.name}}</div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item.id">
        <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
        <div class="product__item__detail">
          <div class="product__item__detail__title">{{item.title}}</div>
          <div class="product__item__detail__sales">月售{{item.sales}}件</div>
          <div class="product__item__detail__price">
            <span class="product__item__detail__yen">&yen;</span>
            <span>{{item.price}}</span>
            <span class="product__item__detail__origin">&yen;{{item.origin}}</span>
          </div>
        </div>
        <div class="product__item__num">
          <span class="product__item__num__minus">-</span>
          <span>0</span>
          <span class="product__item__num__plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const categories = [
  {
    name: '全部商品',
    type: 'all'
  },
  {
    name: '秒杀',
    type: 'second'
  }, {
    name: '新鲜水果',
    type: 'fruit'
  }, {
    name: '休闲食品',
    type: 'food'
  }, {
    name: '时令蔬菜',
    type: 'vegetables'
  }, {
    name: '肉蛋家禽',
    type: 'egg'
  }
]

// 和tab切换相关的逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].type)
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }
  return { currentTab, handleTabClick }
}

// 列表内容相关的逻辑
const useCurrentListEffect = (currentTab) => {
  const content = reactive({
    list: []
  })
  const route = useRoute()
  console.log(route.params.id)
  watchEffect(() => {
    console.log(currentTab.value)
    content.list = [
      {
        id: 1,
        title: '番茄250g/份',
        sales: 10,
        price: '33.6',
        origin: '66.6'
      },
      {
        id: 2,
        title: '茄子250g/份',
        sales: 11,
        price: '33.6',
        origin: '66.6'
      },
      {
        id: 3,
        title: '香肠250g/份',
        sales: 12,
        price: '33.6',
        origin: '66.6'
      }
    ]
  })
  const { list } = toRefs(content)
  return { list }
}

export default {
  name: 'Content',
  setup () {
    const { currentTab, handleTabClick } = useTabEffect()
    const { list } = useCurrentListEffect(currentTab)
    return { list, currentTab, categories, handleTabClick }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variable";
@import "../../style/mixins";
.content{
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.54rem;
  bottom: .5rem;
  .category{
    width: .76rem;
    background-color: $search-bgColor;
    height: 100%;
    overflow-y: scroll;
    &__item{
      line-height: .4rem;
      text-align: center;
      font-size: .14rem;
      color: $content-fontcolor;
      &--active{
        background-color: $bg-color;
      }
    }
  }
  .product{
    flex: 1;
    overflow-y: scroll;
    &__item{
      position: relative;
      display: flex;
      padding: .12rem 0;
      margin: 0 .16rem;
      border-bottom: .01rem solid $content-bgColor;
      &__img{
        width: .68rem;
        height: .68rem;
        margin-right: .16rem;
      }
      &__detail{
        overflow: hidden;
        &__title{
          @include ellipsis();
          line-height: .2rem;
          font-size: .14rem;
          color: $content-fontcolor;
          font-weight: bold;
        }
        &__sales{
          margin: .06rem 0;
          line-height: .16rem;
          font-size: .12rem;
          color: $content-fontcolor;
        }
        &__price{
          line-height: .2rem;
          font-size: .14rem;
          color: $highlight-fontColor;
        }
        &__yen{
          font-size: .12rem;
        }
        &__origin{
          font-size: .12rem;
          color: $light-fontColor;
          text-decoration: line-through;
          margin-left: .06rem;
        }
      }
      &__num{
        position: absolute;
        right: 0;
        bottom: .12rem;
        &__minus,&__plus{
          width: .2rem;
          height: .2rem;
          display: inline-block;
          border-radius: 50%;
          font-size: .2rem;
          text-align: center;
          line-height: .16rem;
        }
        &__minus{
          border: .01rem solid $medium-fontColor;
          color: $medium-fontColor;
          margin-right: .05rem;
        }
        &__plus{
          background-color: $btn-bgColor;
          color: $bg-color;
          margin-left: .05rem;
        }
      }
    }
  }
}
</style>
