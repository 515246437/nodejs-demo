盒子模型的组成：
1. 外边距（margin）
2. 边框（border）
3. 内边距（padding）
4. 内容（content）
在写width和height的时，其实只是content的大小，并不是整个元素的大小


相关例子：
1. margin的外边距合并问题
   Demo： test-3

2. div及其内容均上下左右居中
   Demo： test-4






1. 内容： position: absolute
说明： 
（1）只有在当前元素设置为absolution时，top/bottom/left/right属性才有效
（2）要像当前的元素基于父元素的absolution属性有效，父元素必须设置为absolution或relative;
    若父元素没有设置，则会找父的父元素，直到找到设有定位的父级元素位置
 Demo： test-2

 2. 内容： position: relative
说明： 
（1）只有在当前元素设置为absolution时，top/bottom/left/right属性才有效
（2）要像当前的元素基于父元素的absolution属性有效，父元素必须设置为absolution或relative;
    若父元素没有设置，则会找父的父元素，直到找到设有定位的父级元素位置
 Demo： test-2

