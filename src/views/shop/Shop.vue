<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe6f2;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe62d;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :nearbyList="data.item" :hideBorder="true"></ShopInfo>
  </div>
</template>

<script>
import ShopInfo from '@/components/ShopInfo'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const handleBackEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}
export default {
  name: 'Shop',
  components: { ShopInfo },
  setup () {
    const { handleBackClick } = handleBackEffect()
    const data = reactive({ item: [] })
    data.item = [
      {
        id: 1,
        title: '沃尔玛',
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      }
    ]

    return { data, handleBackClick }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variable";
.wrapper{
  padding: 0 .18rem;
  .search{
    margin: .2rem 0 .04rem 0;
    display: flex;
    &__back{
      width: .3rem;
      line-height: .32rem;
      font-size: .24rem;
      color: #b6b6b6;
    }
    &__content{
      flex: 1;
      background-color: $search-bgColor;
      border-radius: .16rem;
      display: flex;
      &__icon{
        width: .44rem;
        line-height: .32rem;
        text-align: center;
        color: $search-fontColor;
      }
      &__input{
        border: none;
        outline: none;
        background-color: transparent;
        width: 100%;
        padding-right: .2rem;
        color: $content-fontcolor;
        font-size: .14rem;
        &::placeholder{
          color: $content-fontcolor;
        }
      }
    }
  }
}
</style>
