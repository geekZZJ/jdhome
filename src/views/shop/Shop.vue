<template>
  <div class="wrapper">
    <ShopInfo :nearbyList="items" :hideBorder="true"></ShopInfo>
  </div>
</template>

<script>
import ShopInfo from '@/components/ShopInfo'
export default {
  name: 'Shop',
  components: { ShopInfo },
  setup () {
    const items = [
      {
        title: '沃尔玛',
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      }
    ]
    return { items }
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  padding: 0 .18rem;
}
</style>
