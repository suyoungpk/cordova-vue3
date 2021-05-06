export default {
    data: function () {
        return {
            screenMode: ''
            //uAgent:''
        }
    },
    created: function () {
      //  this.setOs(); // 현재 기기 os 설정
        this.setScreenMode(); // 현재 스크린모드 셋팅
    },
    mounted(){
        window.addEventListener("resize",this.setScreenMode)//리사이징으로 모드 업데이트
    },
    methods: {
        // setOs:function(){
        //     this.uAgent = navigator.userAgent.toLowerCase();
        //     let iosPhones = new Array('iphone', 'ipod', 'ipad'), 
        //     androidPhones = new Array('android', 'blackberry', 'windows ce','nokia', 'webos', 'opera mini', 'sonyericsson', 'opera mobi', 'iemobile'); 
        //     for (let i = 0; i < iosPhones.length; i++)
        //         if (this.uAgent.indexOf(iosPhones[i]) != -1)  document.body.classList.add('platform-ios');
        //     for (let i = 0; i < androidPhones.length; i++)
        //         if (this.uAgent.indexOf(androidPhones[i]) != -1) document.body.classList.add('platform-android');
        //     if(!document.body.classList.contains('platform-android') && !document.body.classList.contains('platform-ios'))
        //         document.body.classList.add('platform-browser');
        // },
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