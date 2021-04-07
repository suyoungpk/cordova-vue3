<template>
  <main>
   Landing
    <router-link to="/main">Go to Main</router-link>
  </main>
</template>

<script>

export default {
  name: 'Landing',
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
    }
  }
}
</script>
