盒子模型的组成：
1. 外边距（margin）
2. 边框（border）
3. 内边距（padding）
4. 内容（content）
在写width和height的时，其实只是content的大小，并不是整个元素的大小
任何元素应该都被看成是盒子模型，而不只是中间的content部分


相关例子：
1. 定位问题
  position一共有五个值：
  *static： 不写posoition属性的时候默认是这个，这时候top/left/right/bottom都无效
  *fixed： 相对于浏览器窗口是固定的
  *relative： 相对正常位置的偏移，使用top/left/right/bottom;但是虽然移动了，其原本所占空间不会变
  *absolute： 相对于最近的已定位父元素;若父元素没有设置，则会找父的父元素，直到找到设有定位的父级元素位置
  Demo： test-2

2. margin的外边距合并问题
   Demo： test-3

3. div及其内容均上下左右居中
   Demo： test-4

4. p标签和span标签
   Demo： test-5










