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
          <h1><a href="#/Text" >弹球小游戏和打字游戏</a></h1>
          <div class="ui label">demo</div>
          </header>
          <div class="content">
          <p style=" font-size:16px; text-indent: 2em;">
            <i class="fa  fa-wa fa-home"></i><strong>首先是弹球小游戏的界面:</strong></p>
            <p style="margin-top: 15px;">
              <img src="/img/demo/Pinball.png" alt class="maxW"></p><br/>
              <h1>页面的构造:</h1>
              <br/>
              <p>游戏界面由背景蓝色构建，白色画布上展现游戏内容，左上角的按钮介绍游戏规则<p> 
              <br/>
              <br/>
              <p><strong>游戏规则：</strong><br/><br/>进入页面后游戏会自动开始，小球开始运动，具体的规则写在左上角的按钮中。</p><br/>
              <p><strong>技术支持：</strong>游戏的完成基于HTML+CSS+JS搭建完成。</p><br/>
              <strong>代码逻辑：</strong><br/><br/>
              <p>&nbsp;&nbsp;1.构造一个画布，在画布上使用函数画出小球、砖块和接球板，规定颜色为＃0095dd或者为透明。</p><br/>
              <p>&nbsp;&nbsp;2.规定小球、砖块和接球板块道具，分别设置大小、速度、xy轴的长度和运行速度。设置积分器。<br/>
                <img src="/img/demo/game.png"><img src="/img/demo/game2.png"><img src="/img/demo/game3.png"></p><br/>
              <p>&nbsp;&nbsp;3.下一步规定小球和接球板的移动范围：小球的移动范围为画布内的任何地方，接球板的移动范围只能在底部规定高度的X轴范围内且在画布内。</p><br/>
              <p>&nbsp;&nbsp;4.使用for循环的，进行砖块的填充。</p><br/>
              <p>&nbsp;&nbsp;5.对小球和接球板进行碰撞处理，小球按照规定角度进行弹射处理，如果碰到障碍物墙壁和接球板则进行角度弹射，如果碰到砖块，砖块会变为不可见的颜色，并且积分+1，然后小球根据碰撞的角度进行弹射。</p><br/>
              <p>&nbsp;&nbsp;6.声明函数keyDown 和keyup 控制接球板的左右移动。</p><br/>
              <p>&nbsp;&nbsp;7.最后监听事件，键盘按下事件：keydown() 是在键盘按下就会触发，键盘弹起事件：keyup() 是在键盘松手就会触发。</p><br/>
              <p><strong>遇到的一些问题：</strong>
              <br/><br />
              一. 小球碰撞砖块后砖块的消失。解决思路：使用fillStyle= ball.visible ? '#0095dd' : 'transparent';的方法去判断砖块的颜色，然后执行fill()填充数组。
              <br /><br />
              二：小球和接球板方向的改变。解决思路：如果小球和接球板的方向是朝向x、y的正半轴的话则dx=x,dy=y,否则的话dx*=-1,dy*=-1(使小球和接球板的方向往相反的反向运动)。<br /> </p>
              <br/><br/><br/>
              <h2>接下来是打字游戏</h2><br/>
              <p>先上图：</p>
              <p style="margin-top: 15px;">
              <img src="/img/demo/speed.png" alt class="maxW"></p>
              <h1>页面的构造:</h1>
              <br/>
              <p>游戏界面有深蓝色构成，页面顶部可以调整游戏难度，中间则是输入打字的部分，并且有倒计时和计分器，左下角的按钮可以隐藏顶部改变难度的区域。<p> 
              <br/>
              <br/>
              <p><strong>游戏规则：</strong><br/><br/>进入页面后游戏会自动开始，倒计时十秒，如果单词输入正确，计时器会根据难度相应的增加秒数，计分器计算正确的数量，并在倒计时为0后，显示单词的正确数量。</p><br/>
              <p><strong>技术支持：</strong>游戏的完成基于HTML+CSS+JS搭建完成。</p><br/>
              <strong>实现逻辑:</strong>
              <p>&nbsp;&nbsp;1.构建一个单词数组。</p><br/>
              <p>&nbsp;&nbsp;2.创建倒计时、计分器、难度等函数。</p><br/>
              <p>&nbsp;&nbsp;3.使用Math.floor(Math.random() * words.length产生随机单词并显示在网页上。</p><br/>
              <p>&nbsp;&nbsp;4.判断输入的单词和显示的单词是否一致，如果一致则判断难度增加相应的time，并且更新单词，否则不会更新新的单词，也不会增加时间。<br/>
              <img src="/img/demo/game4.png"></p><br/>
              <p>&nbsp;&nbsp;5.最后监听事件：将函数绑定在'change'事件，规定当被选元素的 change 事件发生时运行函数。<br/>
              <img src="/img/demo/game5.png"></p><br/>
              <br/>
              <strong>具体的游戏逻辑，欢迎上Github了解</strong><i><a href="https://github.com/omheshigenwozou/game">源码</a></i>
          </div>
      </div> 
    </div>
  </div>
</el-row>
</template>

<script>
  export default {
  name:"Text"
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
