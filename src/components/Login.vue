<template>
<div class="wrapper">
  <section class="login">
     login
        <p> {{$t('greeting')}}</p>
     <button type="button" class="btn" @click="this.$router.push('/main')">메인으로가기</button>
     <button type="button" class="btn" @click="goSign()">가입하기</button>
  </section>
</div>
</template>

<script>
export default {
  name: 'Login',
  props:["id"],
  methods:{
     goSign () {
      this.$router.push('/signup');
    }
  }
}
</script>
