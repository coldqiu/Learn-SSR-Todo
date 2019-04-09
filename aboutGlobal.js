// Node.js 启动方式：一道关于全局变量的题目引发的思考
// 文章地址: https://xcoder.in/2015/11/27/a-js-problem-about-global-continued/
'use strict'
var a = 2;
function foo() {
  console.log(this.a);
}

foo();