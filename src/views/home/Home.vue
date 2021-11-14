<template>
  <div class="wrapper">
    <StaticPart></StaticPart>
    <Nearby></Nearby>
  </div>
  <Docker></Docker>
</template>

<script>
import StaticPart from './StaticPart'
import Nearby from './Nearby'
import Docker from './Docker'
export default {
  name: 'Home',
  components: { Docker, Nearby, StaticPart }
}
</script>

<style scoped lang="scss">
.wrapper{
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .2rem .18rem;
  overflow-y: auto;
}
</style>
