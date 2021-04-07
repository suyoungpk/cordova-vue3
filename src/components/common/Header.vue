<template>
  <!-- header -->
  <header>header</header>
  <!-- //header -->
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data () {
    return {
      setScreenMode:""
    }
  },
  created () {
    // const member = JSON.parse(sessionStorage.getItem('member'))
    // if (member && member.memId) {
    //   this.memNm = member.memNm
    //   this.telNo = member.telNo
    //   this.isLogin = true
    // }
  },
  mounted () {
    // window.addEventListener("resize",this.setScreenMode) // 리사이징으로 모드 업데이트
  },
  methods: {
    // setScreenMode: function () {
    //   var w = window.innerWidth
    //   if (w > 1024) this.screenMode = 'pc'
    //   else if (w <= 1024 && w > 640) this.screenMode = 'tablet'
    //   else this.screenMode = 'mobile'
    //   if (this.screenMode === 'pc' || this.screenMode === 'tablet') {
    //     // pc일 경우 리스트 그대로
    //     this.accordion[0] = true
    //     this.accordion[1] = true
    //   }
    // }
  }
}
</script>