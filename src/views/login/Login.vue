<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input">
      <input type="text" class="wrapper__input__content" placeholder="请输入手机号" v-model="data.mobile">
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请输入密码" v-model="data.password">
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登录</div>
    <div class="wrapper__login-link" @click="handleReg">立即注册</div>
    <Toast v-if="data.showToast" :message="data.toastMsg"></Toast>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { post } from '@/utils/request'
import Toast from '@/components/Toast'

export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const data = reactive({
      mobile: '',
      password: '',
      showToast: false,
      toastMsg: ''
    })
    const router = useRouter()
    const showToast = () => {
      data.showToast = true
      data.toastMsg = '请求失败'
      setTimeout(() => {
        data.showToast = false
      }, 3000)
    }
    const handleLogin = async () => {
      try {
        const result = await post('/recommend/desc1')
        console.log(result)
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } catch (e) {
        showToast('请求失败')
        console.log(e)
      }
    }
    const handleReg = () => {
      router.push({ name: 'Reg' })
    }
    return { handleLogin, handleReg, data }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/variable";
.wrapper{
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img{
    width: .66rem;
    height: .66rem;
    display: block;
    margin: 0 auto .4rem auto;
  }
  &__input{
    box-sizing: border-box;
    padding: 0 .16rem;
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    background-color: #f9f9f9;
    border: .01rem solid rgba(0,0,0,.1);
    border-radius: .06rem;
    &__content{
      width: 100%;
      border: none;
      line-height: .48rem;
      background-color: transparent;
      font-size: .16rem;
      color: $content-notice-fontcolor;
      outline: none;
      padding: 0;
      &::placeholder{
        color: $content-notice-fontcolor;
      }
    }
  }
  &__login-button{
    background-color: #0091ff;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,.32);
    border-radius: .04rem;
    color: #fff;
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    font-size: .16rem;
    text-align: center;
  }
  &__login-link{
    font-size: .14rem;
    color: $content-notice-fontcolor;
    text-align: center;
  }
}
</style>
