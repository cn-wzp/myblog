<template>
<el-row class="sharelistBox">
  <div class="main">
    <div class="item_left"></div>
    <div class="item_center">
      <!--公告-->
      <div class="prompt">
        <i class="fa fa-volume-up fa-fw"></i>&nbsp;&nbsp;欢迎来到我的博客~>ω
      </div>
      <div class="item tcommonBox el-col el-col-24">
        <header>
          <h1><a href="/#Text" target="_blank">语音识别和语音合成</a></h1>
          <div class="ui label">speech</div>
          </header>
          <div class="content">
              <h3>关于HTML5语音Web Speech API</h3><br/>
              <p>HTML5中和Web Speech相关的API实际上有两类，一类是“语音识别(Speech Recognition)”，
                  另外一个就是“语音合成(Speech Synthesis)”，这两个名词听上去很高大上，实际上指的分
                  别是“语音转文字”，和“文字变语音”。</p><br/>
                  <br/>
          <p style=" font-size:16px; text-indent: 2em;">
            <i class="fa  fa-wa fa-home"></i><strong>这是个小游戏:</strong></p>
            <p style="margin-top: 15px;">
               <iframe :src="speech" ref="iframe" scrolling="0" style="width: 100%;height: 500px;" frameborder="0"></iframe><br/>
              <h1>游戏介绍:</h1>
              <br/>
              <p>进入游戏页面后，会询问你是否允许使用麦克风，允许之后网页本身会随机产生一个1-100以内的数字，你只需输出你猜的数字，网页会自动识别你所说内容，并判断
                  你说的是否为数字，并给出提示，直到你猜中这个数字。<p> 
              <br/>
              <br/>
              <p><strong>游戏参与：</strong><br/><br/>你只需对着麦克风说出你猜的数字，就可以体验这个有趣的小游戏了。</p><br/>
              <p><strong>技术支持：</strong>游戏基于HTML5+CSS+JS+jQuery搭建完成。</p><br/>
              <strong>代码逻辑：</strong><br/><br/>
              <p>&nbsp;&nbsp;1.使用Web Speech API接口来获取你所说内容转成文文字，展示在页面上。</p><br/>
              <p>&nbsp;&nbsp;2.使用Math.random()方法随机生成数字。</p><br/>
              <p>&nbsp;&nbsp;3.创建函数判断语音转换成的内容，如果是数字则呈现数字，并由该数字和页面随机生成的数字比较给出提示，否则的话就提示这不是数字。
                <br/><img src="/img/demo/speech.png"></p><br/>
              <p>&nbsp;&nbsp;4.猜对数字后页面会提示你猜对了，监听整个页面如果出现这种情况则使用reload()方法刷新window.location重载页面。</p><br/>
              <p>&nbsp;&nbsp;5.监听语音的输入，如果停止了则使用start()方法重新开始。</p><br/>
               <p>&nbsp;&nbsp;5.使用result事件监听生成的数字，返回最后一个值。</p><br/>
              <br/>
              <br/>
              <p><strong>遇到的小问题：</strong><br/>
              一.游戏是因为随机生成的数字，开发的时候并不知道随机产生的数字是否在1-100以内。
              <br/><br/>
              解决方法：使用console.log("数字：", randomnumber);在后台打印出随机生成的数字。             
               <br/><br/>
              二. 语音转文字的时候并不知道你是所用设备支持的语音识别还是web自带的语音识别。
              <br/><br/>
              解决方法：用window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;的方法实现两个语音识别都可以使用。
              </p>             <br/><br/><br/>
              <h2>语音合成：</h2><br/>
              <p>先上图：</p>
              <p style="margin-top: 15px;">
              <iframe :src="read" ref="iframe" scrolling="0" style="width: 100%;height: 500px;" frameborder="0"></iframe>
              <h1>页面的布局:</h1>
              <br/>
              <p>头部是一个添加文字框的按钮。下面部分是一张张图片，并配上了一些文字。<p> 
              <br/>
              <br/>
              <p><strong>快捷使用：</strong><br/><br/>点击添加文字框按钮你可以在里面添加你想要语音合成的内容，还可以选择各国语言来进行朗读该内容。下面部分是一张张图片，点击该图片的区域，网页会自动朗读该图片上的文字内容</p><br/>
              <p><strong>技术支持：</strong>项目的完成基于HTML5+CSS+JS+jQuery搭建完成。</p><br/>
              <strong>实现逻辑:</strong>
              <p>&nbsp;&nbsp;1.声明一组图片并配上相应的文字。</p><br/>
              <p>&nbsp;&nbsp;2.创建函数使用forEach遍历将图片和内容添加到网页上，完成网页上所展示的文字图片。</p><br/>
              <p>&nbsp;&nbsp;3.使用 speechSynthesis.getVoices()返回SpeechSynthesisVoice代表当前设备上所有可用语音的对象列表。</p><br/>
              <p>&nbsp;&nbsp;4.使用createElement创建一个元素，将可用语音的对象列表的名字和语言返回传给一个变量，在网页显示该元素的内容。<br/>
              <p>&nbsp;&nbsp;5.文字转语音的监听使用click事件。<br/>
              <img src="/img/demo/speak1.png"></p><br/><br/>
              <p><strong>一些小问题：</strong><br/>
              一.从api接口内获取的语言信息，想要使用不同语言进行语音合成的切换。 </p><br/><br/>
              <p>解决办法：监听speechSynthesis接口，使用voiceschanged事件使网络语音API时的名单被触发SpeechSynthesisVoice，改变返回的对象SpeechSynthesis.getVoices()。</p><br/><br/>
              <p>二.点击按钮弹出文字框的操作</p><br/><br/>
              <p>解决办法：监听按钮进入和退出文字框内容的按钮，用classList返回该节点的元素，使用toggle()方法切换一个元素和remove()的方法移除这个文本框的元素和节点。</p>
              <strong>具体的游戏逻辑，欢迎上Github了解</strong><i><a href="https://github.com/omheshigenwozou/note">源码</a></i>
          </div>
      </div> 
    </div>
  </div>
</el-row>
</template>

<script>
    export default {
        name: "speech",
        data(){
            return{
              speech:'./caishuzi.html',
              read:"./langdu.html",

            }
        }
    }
</script>

<style  scoped>
  .main{
       box-sizing: border-box;
  }
  .main .item_left,.item_right{
    flex: 1;
  }
  .main .item_center{
    flex: 2;
    /*border: 1px blue solid;*/
    display: flex;
    flex-direction: column;
    /*justify-content: center;*/
    align-items: center;
    background:rgba(255,255,255,.8);;
  }
  .main .item_center .prompt{
    margin-top: 40px;
    width: 96%;
    border:1px #999 dashed;
    border-radius: 5px;
    color:#999;
    padding:20px 5px;
  }
.detailBox .content {
    font-size: 15px;
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    overflow-x: hidden;
}
.detailBox .content h1, .detailBox .article-content h2, .detailBox .article-content h3 {
    font-size: 200%;
    font-weight: bold;
}
img{
  max-width: 400px;
}
a{
  color: red;
}
</style>
