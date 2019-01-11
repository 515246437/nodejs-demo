1. 场景如下： 弹出一个推送的图片，图片要放在一个div里，div放在一个dialog组件里
   要求如下：
   （1）div的宽固定
   （2）div的大小在一定范围内随图片大小而自适应
   （3）图片来自于网络请求，是一个变量
   （3）图片不能失真，就是长和宽的比例不能变化
   （4) 若图片太长，如超过500px，则自动添加滚动条;否则，正常显示

  //说明及代码如下：
（1) 这里的百分之100表示图片的宽会占满.el-dialog__body的宽，但是最大宽度为max-width的宽度
（2）如果不设置图片的height，img标签会自动根据比例显示图片的高
（3）img标签 :src属性能接受一个变量 而src只能接受一个字符串
（4）若图片高度的值很大时，最多显示700px的内容，并显示滚动条
（5）这里max-height不能百分比的形式，否则高度为0,因为其父容器也没有设置高度，
   <el-dialog
      :close-on-click-modal = false
      :visible.sync="centerDialogVisible"
      width="50%" //整个屏幕的百分之50宽度
      :before-close="handleClose"
      center>
      <!-- <div v-bind:style="{backgroundImage: 'url(' + imageUrl + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain', width: '100%', height: '100%'}"></div> -->
      <div>
        <img :src="imageUrl" width="100%">
      </div>
	  </el-dialog>


  .el-dialog__header {
	 width: 0px;
	 height:0px;
	 padding: 0px
 }

 .el-dialog--center .el-dialog__body{
	 max-width: 100%;
	 max-height: 700px;
	 padding: 0px;
	 margin: 0px;
	 overflow-y: auto
 } 

 2. vue内联模板的写法： imageUrl为一个变量
  <div v-bind:style="{backgroundImage: 'url(' + imageUrl + ')', backgroundRepeat:'no-repeat',       backgroundPosition:'center center', backgroundSize: 'contain', width: '100%', height: '100%'}"></div>

   