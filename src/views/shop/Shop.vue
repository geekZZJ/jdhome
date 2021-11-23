<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe6f2;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe62d;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :nearbyList="item" :hideBorder="true"></ShopInfo>
    <Content></Content>
  </div>
</template>

<script>
import ShopInfo from '@/components/ShopInfo'
import { useRouter, useRoute } from 'vue-router'
import { reactive, toRefs } from 'vue'
import Content from './Content'

const handleBackEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}

// 获取当前商铺信息
const useShopInfoEffect = () => {
  const data = reactive({ item: [] })
  const route = useRoute()
  // 获取到路由中的id
  // console.log('route', route.params.id)
  data.item = [
    {
      id: route.params.id,
      title: `沃尔玛${route.params.id}`,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      tags: ['月售1万+', '起送¥0', '基础运费¥5'],
      desc: 'VIP尊享满89元减4元运费券（每月3张）'
    }
  ]
  const { item } = toRefs(data)
  return { item }
}
export default {
  name: 'Shop',
  components: { Content, ShopInfo },
  setup () {
    const { handleBackClick } = handleBackEffect()
    const { item } = useShopInfoEffect()

    return { item, handleBackClick }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variable";
.wrapper {
  padding: 0 0.18rem;
  .search {
    margin: 0.2rem 0 0.04rem 0;
    display: flex;
    &__back {
      width: 0.3rem;
      line-height: 0.32rem;
      font-size: 0.24rem;
      color: #b6b6b6;
    }
    &__content {
      flex: 1;
      background-color: $search-bgColor;
      border-radius: 0.16rem;
      display: flex;
      &__icon {
        width: 0.44rem;
        line-height: 0.32rem;
        text-align: center;
        color: $search-fontColor;
      }
      &__input {
        border: none;
        outline: none;
        background-color: transparent;
        width: 100%;
        padding-right: 0.2rem;
        color: $content-fontcolor;
        font-size: 0.14rem;
        &::placeholder {
          color: $content-fontcolor;
        }
      }
    }
  }
}
</style>
