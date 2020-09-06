<!-- 头部公用 -->
<template>
  <div class>
    <div class="headBack">
      <el-row class="container">
        <el-col :span="24">
          <!-- pc端导航 -->
          <div class="headBox">
            <el-menu class="el-menu-demo" mode="horizontal">
              <el-menu-item index="/Home"><router-link to="/Home">
                <i class="fa fa-wa fa-home" style="color:#fff"></i> 首页</router-link>
              </el-menu-item>
              <el-menu-item index="/Aboutme">
                <i class="fa fa-wa fa-vcard" style="color:#fff"></i> 关于
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="headImgBox" style="url(..//public/img/bg1.png)">
      <div class="scene">
        <div>
          <span id="luke"></span>
        </div>
      </div>
      <div class="h-information">
        <a href="#/Aboutme">
          <img src="..//..//public/img/tou1.jpg" />
        </a>
        <h2 class="h-description">
          <a
            href="#/Aboutme"
          >{{"Write the Code. Change the World."}}</a>
        </h2>
      </div>
    </div>
  </div>
</template>





<script>
import "../assets/css/sigmar.css"
export default {
  name: "Header",
  data() {
    return {};
  },
  watch: {},
  created() {},
};
</script>
<style>
/*********头部导航栏********/

/*头部导航栏盒子*/

.headBack {
  width: 100%;
  background: rgba(40, 42, 44, 0.6);
  /*margin-bottom:30px;*/
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 100;
  margin: 0;
}

.headBox li.is-active {
  /*background: #48456C;*/
  background: rgba(73, 69, 107, 0.7);
}

.el-menu {
    border-radius: 2px;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #eef1f6;
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: none !important;
}

.headBox .el-menu {
  background: transparent;
  border-bottom: none !important;
}

.headBox .el-menu-demo li.el-menu-item,
.headBox .el-menu--horizontal .el-submenu .el-submenu__title {
  height: 38px;
  line-height: 38px;
  border-bottom: none !important;
}

.headBox .el-submenu li.el-menu-item {
  height: 38px;
  line-height: 38px;
}

.headBox li .fa-wa {
  vertical-align: baseline;
}

.headBox ul li.el-menu-item,
.headBox ul li.el-menu-item.is-active,
.headBox ul li.el-menu-item:hover,
.headBox .el-submenu div.el-submenu__title,
.headBox .el-submenu__title i.el-submenu__icon-arrow {
  color: #fff;
}

.headBox .el-menu--horizontal .el-submenu > .el-menu {
  top: 38px;
  border: none;
  padding: 0;
}

.headBox > ul li.el-menu-item:hover,
.headBox > ul li.el-submenu:hover .el-submenu__title {
  background: #48456c;
  border-bottom: none;
}

.headBox > ul .el-submenu .el-menu,
.headBox > ul .el-submenu .el-menu .el-menu-item {
  background: #48456c;
}

.headBox > ul .el-submenu .el-menu .el-menu-item {
  min-width: 0;
}

.headBox > ul .el-submenu .el-menu .el-menu-item:hover {
  background: #64609e;
}

/*pc搜索框*/

.headBox .pcsearchbox {
  padding: 0;
  max-width: 170px;
  /*min-width: 30px;*/
  height: 100%;
  line-height: 38px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.headBox .pcsearchbox:hover .pcsearchinput {
  opacity: 1;
  /*transform: scaleX(1);*/
  visibility: visible;
}

.headBox .pcsearchbox i.pcsearchicon {
  color: #fff;
  padding-left: 10px;
}

.headBox .pcsearchbox .pcsearchinput {
  width: 180px;
  padding: 10px 20px 10px 20px;
  background: rgba(40, 42, 44, 0.6);
  border-radius: 0 0 2px 2px;
  position: absolute;
  right: 0;
  top: 38px;
  opacity: 0;
  visibility: hidden;
  /*transform: scaleX(0);*/
  transform-origin: right;
  transition: all 0.3s ease-out;
}

.headBox .pcsearchbox .hasSearched {
  opacity: 1;
  /*transform: scaleX(1);*/
  visibility: visible;
}

.headBox .pcsearchbox .el-input {
  width: 100%;
}

.headBox .el-input__inner {
  height: 30px;
  border: none;
  background: #fff;
  /*border: 1px solid #333;*/
  border-radius: 2px;
  padding-right: 10px;
}

.headBox .userInfo {
  height: 100%;
  line-height: 38px;
  position: absolute;
  right: 30px;
  top: 0;
  color: #fff;
}

.headBox .userInfo a {
  color: #fff;
  font-size: 13px;
  transition: all 0.2s ease-out;
}

.headBox .userInfo a:hover {
  color: #48456c;
}

.headBox .nologin {
  text-align: right;
}

.headBox .haslogin {
  text-align: right;
  position: relative;
  min-width: 80px;
  cursor: pointer;
}

.headBox .haslogin:hover ul {
  visibility: visible;
  opacity: 1;
}

.headBox .haslogin ul {
  background: rgba(40, 42, 44, 0.6);
  padding: 5px 10px;
  position: absolute;
  right: 0;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-out;
}

.headBox .haslogin ul li {
  border-bottom: 1px solid #48456c;
}

.headBox .haslogin ul li:last-child {
  border-bottom: 1px solid transparent;
}

/*头部背景图*/

.headImgBox {
  height: 530px;
  position: relative;
  width: 100%;
  background-image: url(..//..//public/img/bg1.png);
  background-size: cover;
  background-position: center 50%;
  background-repeat: no-repeat;
  margin-bottom: 90px;
}

.h-information {
  text-align: center;
  width: 70%;
  margin: auto;
  position: relative;
  top: 380px;
  padding: 40px 0;
  font-size: 16px;
  opacity: 0.98;
  background: rgba(177, 168, 236, 0.7);
  border-radius: 5px;
  z-index: 1;
  animation: b 1s ease-out;
  -webkit-animation: b 1s ease-out;
}

@-webkit-keyframes b {
  0% {
    -webkit-transform: translateY(90px);
    transform: translateY(90px);
  }
  80% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
  }
  90% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes b {
  0% {
    -webkit-transform: translateY(90px);
    transform: translateY(90px);
  }
  80% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
  }
  90% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

.h-information img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  object-fit: cover;
}

.h-information img:hover {
  transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
}

.h-information h2 {
  margin-top: 20px;
  font-size: 18px;
  font-weight: 700;
}
.h-information h2 a {
  background: linear-gradient(to right, #df2050, #48456d);
  -webkit-background-clip: text;
  color: transparent;
}
.headImgBox .scene {
  width: 100%;
  height: 300px;
  text-align: center;
  font-size: 100px;
  font-weight: 200;
  color: #fff;
  position: absolute;
  left: 0;
  top: 160px;
  font-family: "Sigmar One", Arial;
  text-shadow: 0 2px 2px #47456d;
}

.headImgBox .scene span {
  transform: matrix(1, 0, 0, 1, 0, 0);
  -webkit-transform: matrix(1, 0, 0, 1, 0, 0);
  text-shadow: 4px 2px 0 #ff3f29, 0px -2px 0 #00a715;
  color: #8c8894;
}

.saying:after {
  content: "|";
  font-family: Arial, sans-serif;
  font-size: 1em;
  /*line-height: 0;*/
  display: inline-block;
  vertical-align: baseline;
  opacity: 1;
  text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
  animation: caret 500ms infinite;
}

@keyframes caret {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
