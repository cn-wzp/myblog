<!-- 底部公用 -->
<template>
  <div class="footBack footBackQian">
    <div class="footer-img"></div>
    <div class="fcontainer">
      <p>
        博客已运行
      </p>
      <p>
        <span>Made with</span>
        <img class="fheart" src="..//..//public/img/heart02.png" />
        <span>by Aimee.</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    
    return {
      
    };
  },
  methods: {
 
    }
};
</script>

<style>
.footBack {
  color: #888;
  margin-top: -10px;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  width: 100%;
  min-height: 50px;
  margin-top: -25px;
  /*position: relative;*/
  position: absolute;
  /*min-height: 368px;*/
}
.footBack .fcontainer {
  width: 100%;
  background: #232323;
  /*top:294px;*/
  /*left:0;*/
  /*position: absolute;*/
  padding: 15px 10px 10px 10px;
  box-sizing: border-box;
  /*z-index: 1;*/
  width: 100% !important;
}
.footBack .footer-img {
  height: 368px;
  z-index: 1;
  position: relative;
  width: 100%;
  bottom: -74px;
  pointer-events: none;
  background:url(..//..//public/img/footer01.png) no-repeat 50%;
}
.footBackHui {
  /*min-height: 50px;*/
  margin-top: -50px;
  z-index: -1;
}
.footBackHui .footer-img {
  position: relative;
  width: 100%;
  bottom: 0;
  width: 100%;
  height: auto;
  bottom: -10px;
  /*z-index: 0;*/
}
.footBackHui .footer-img img {
  width: 100%;
  height: auto;
  margin: 0;
}
.footBack p {
  margin: 5px 0;
  z-index: 3;
}
/*心脏呼吸*/
.footBack .fheart {
  width: 25px;
  height: 25px;
  margin-top: -10px;
  top: 5px;
  position: relative;
  /*padding-top:0px;*/
  vertical-align: baseline;
  -webkit-animation: heartScale 1.33s ease-in-out infinite;
  animation: heartScale 1.33s ease-in-out infinite;
}
@keyframes heartScale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes heartScale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}

</style>
