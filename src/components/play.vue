<template>
  <div>
    <wbc-nav></wbc-nav>
    <div class="container">
      <el-row :gutter="30" style="margin-left: -15px; margin-right: -15px;">
        <el-col
          :sm="24"
          :md="16"
          style="padding-left: 15px;padding-right: 15px;transition: all 0.5s ease-out 0s;margin-bottom: 30px;"
        >
          <el-row class="sharelistBox">
            <div class="main">
              <div class="item_left"></div>
              <div class="item_center">
                <div class="prompt">
                  <i class="fa fa-volume-up fa-fw"></i>&nbsp;&nbsp;欢迎来到我的博客~>ω
                </div></div>
                <div class="item tcommonBox el-col el-col-24">
                    <header>
                    <h1>
                      web页面播放、音频
                    </h1>
                    <div class="ui label">demo</div>
                  </header>
                  <div class="content">
                    <p style=" font-size:16px; text-indent: 2em;">
                      <i class="fa fa-wa fa-home"></i>
                      <strong>web音频播放器的构成:</strong>
                    </p><br/><br/>
                    <iframe :src="music" ref="iframe" scrolling="0" style="width: 100%;height: 500px;" frameborder="0"></iframe><br/><br/>
                    <br/>
                    <strong>web视频播放器的构成:</strong>
                    <br/><br/>
                    <iframe :src="video" ref="iframe" scrolling="0" style="width: 100%;height: 600px;" frameborder="0"></iframe><br/><br/>
                    <br/>
                    <strong>具体的游戏逻辑，欢迎上Github了解</strong>
                    <i>
                      <a href="https://github.com/omheshigenwozou/play">源码</a>
                    </i>
                </div>
              </div>
            </div>
          </el-row>
        </el-col>
        <el-col :sm="24" :md="8">
          <wbc-rightlist></wbc-rightlist>
        </el-col>
      </el-row>
    </div>
    <wbc-footer></wbc-footer>
  </div>
</template>
<script>
import header from "../components/header.vue";
import temRightlist from "../components/temRightlist.vue";
import footer from "../components/footer.vue";
export default {
  name: "play",
  data() {
    //选项 / 数据
    return {
        music:"./music play.html",
        video:"./video.html"
    };
  },
  methods: {
    //事件处理器
  },
  components: {
    //定义组件
    "wbc-nav": header,
    "wbc-rightlist": temRightlist,
    "wbc-footer": footer,
  },
  created() {},
};
</script>