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
                  <header>
                    <h1>记账本和卡片的使用</h1>
                    <div class="ui label">记账本</div>
                  </header>
                  <div class="content">
                    <p style=" font-size:16px; text-indent: 2em;">
                      <i class="fa fa-wa fa-home"></i>
                      <strong>首先记账本的页面:</strong>
                    </p>
                    <p style="margin-top: 15px;">
                      <iframe
                        :src="jilu"
                        ref="iframe"
                        scrolling="0"
                        style="width: 100%;height: 500px;"
                        frameborder="0"
                      ></iframe>
                    </p>
                    <h1>页面的构造:</h1>
                    <br />
                    <p>
                      这是一个方便快捷的记账本，你可以去记录每一分的收入和支出，简单明了，最上方给出了你的余额、收入和支出，而中间部分则显示了你的历史账单，
                      你可以在下面添加你收入和指出的事件名和金额。
                    </p>
                    <p>
                      <br />
                      <br />
                    </p>
                    <p>
                      <strong>快捷使用：</strong>
                      <br />
                      <br />只需要你动动小手，就能记录你的消费记录。
                    </p>
                    <br />
                    <p>
                      <strong>技术支持：</strong>记账本的完成基于HTML+CSS+JS搭建完成。
                    </p>
                    <br />
                    <strong>代码逻辑：</strong>
                    <br />
                    <br />
                    <p>&nbsp;&nbsp;1.使用Math.floor(Math.random() * 1000000000)的方法随机生成一个ID。</p>
                    <br />
                    <p>
                      &nbsp;&nbsp;2.创建函数判断事件和金额的输入，并传入ID中，记录该事件和金额的消费生成单条消费记录，提交后会呈现在页面上。
                      <br />
                      <img src="/img/demo/note.png" />
                    </p>
                    <br />
                    <p>
                      &nbsp;&nbsp;3.创建函数改变页面上balance、plus、minus每次记录消费之后的金额变化。
                      <img
                        src="/img/demo/note1.png"
                      />
                    </p>
                    <br />
                    <p>&nbsp;&nbsp;4.创建按钮，删除单条消费，用于更改因错误记录而提交的消费记录。</p>
                    <br />
                    <p>&nbsp;&nbsp;5.最后监听事件，将要的函数绑定在submit事件中，触发提交事件。</p>
                    <br />
                    <br />
                    <br />
                    <p>
                      <strong>遇到的一些问题：</strong>
                      <br />一.事件和金额输入的过程中,内容前和内容后有一些空格，消费记录里并不希望会有这些空格的存在。
                      <br />
                      <br />解决方法：使用trim()方法消除内容前后的空格。如果只希望消除内容前的空格可以使用trimStart()，相反消除内容后的空格则使用trimEnd()。
                      <br />
                      <br />二. 消费记录的保存问题， 如果刷新页面则之前输入的内容会全部消失。
                      <br />
                      <br />解决方法：使用localStorage.setItem(key,value)将value存储到key字段，刷新页面后使用localStorage.getItem(key)获取指定key本地存储的值。
                    </p>
                    <br />
                    <br />
                    <br />
                    <h2>接下来是卡片</h2>
                    <br />
                    <p>先上图：</p>
                    <p style="margin-top: 15px;">
                      <iframe
                        :src="kapian"
                        ref="iframe"
                        scrolling="0"
                        style="width: 100%;height: 500px;"
                        frameborder="0"
                      ></iframe>
                    </p>
                    <h1>页面的构造:</h1>
                    <br />
                    <p>首先头部添加卡片的按钮，下面有翻页的按钮，左下角是清除本页卡片的按钮。</p>
                    <p>
                      <br />
                      <br />
                    </p>
                    <p>
                      <strong>快捷使用：</strong>
                      <br />
                      <br />点击添加按钮，页面刷新，输入你所要记录问题和答案，点击Add Card添加内容。添加完成后可点击当前页面的问题翻转页面查看答案。
                    </p>
                    <br />
                    <p>
                      <strong>技术支持：</strong>项目的完成基于HTML+CSS+JS+jQuery搭建完成。
                    </p>
                    <br />
                    <strong>实现逻辑:</strong>
                    <p>&nbsp;&nbsp;1.创建所有卡片。</p>
                    <br />
                    <p>&nbsp;&nbsp;2.添加隐藏和显示的容器，切换正常页面和添加内容时的页面。</p>
                    <br />
                    <p>&nbsp;&nbsp;3.在DOM中创建一张卡片，建造函数显示卡数，将卡添加到本地储存，从本地获取到卡的内容。</p>
                    <br />
                    <p>
                      &nbsp;&nbsp;4.监听翻页按钮和清除卡片的按钮，全部使用click事件来进行。
                      <br />
                      <img src="/img/demo/note2.png" />
                    </p>
                    <br />
                    <br />
                    <p>
                      <strong>一些小问题：</strong>
                      <br />主页面和添加内容页面的切换。
                    </p>
                    <br />
                    <br />
                    <p>解决办法：使用add()和remove()元素来切换内容之间的转换。</p>
                    <br />
                    <br />
                    <strong>具体的游戏逻辑，欢迎上Github了解</strong>
                    <i>
                      <a href="https://github.com/omheshigenwozou/note">源码</a>
                    </i>
                  </div>
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
  name: "Note",
  data() {
    return {
      jilu: "./xiaofeijilu.html",
      kapian: "./chucun.html",
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

<style  scoped>
.main {
  box-sizing: border-box;
}
.main .item_left,
.item_right {
  flex: 1;
}
.main .item_center {
  flex: 2;
  /*border: 1px blue solid;*/
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
}
.main .item_center .prompt {
  margin-top: 40px;
  width: 96%;
  border: 1px #999 dashed;
  border-radius: 5px;
  color: #999;
  padding: 20px 5px;
}
.detailBox .content {
  font-size: 15px;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
  overflow-x: hidden;
}
.detailBox .content h1,
.detailBox .article-content h2,
.detailBox .article-content h3 {
  font-size: 200%;
  font-weight: bold;
}
img {
  max-width: 400px;
}
a {
  color: red;
}
</style>
