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
                </div>
                <div class="item tcommonBox el-col el-col-24">
                    <iframe :src="huilv" ref="iframe" scrolling="0" style="width: 100%;height: 500px;" frameborder="0"></iframe>
                    <iframe :src="boke" ref="iframe" scrolling="0" style="width: 100%;height: 500px;" frameborder="0"></iframe>
                    <iframe :src="caidan" ref="iframe" scrolling="0" style="width: 100%;height: 500px;" frameborder="0"></iframe>
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
  name: "Api",
  data() {
    //选项 / 数据
    return {
        huilv:"./huilv.html",
        boke:"./boke.html",
        caidan:"./caidan.html"
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