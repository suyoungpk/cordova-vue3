<template>
  <main>
    main
    <router-link to="/login">Go to login</router-link>
    <button type="button" @click="goBack()">뒤로가기</button>
  </main>
</template>

<script>

export default {
  name: 'Main',
   components: {  },
  data () {
    return {
     screenMode: ''
    }
  },
  created () {
    const member = JSON.parse(sessionStorage.getItem('member'))
    if (member && member.memId) {
      // this.memNm = member.memNm
      // this.telNo = member.telNo
    }

    this.setScreenMode(); // 현재 스크린모드 셋팅

  },
  mounted(){
    window.addEventListener("resize",this.setScreenMode)//리사이징으로 모드 업데이트
  },
  methods: {
    
    setScreenMode:function(){
      var w = window.innerWidth;
      if(w>1024) this.screenMode = "pc";
      else if(w<=1024 && w>640)  this.screenMode = "tablet";
      else this.screenMode = "mobile";
    },
     goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>
