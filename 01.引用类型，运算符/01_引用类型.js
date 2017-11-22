/*
*  Javascript 的数据类型
*  1.原始类型（基本值类型）5类
*   a.number 类型 - 定义 ：值是数字
*   b.string 类型 - 定义 ：值是字符串 添加单引号或者是双引号 一般单引号
*   c.boolean 类型 - 定义：值是 true/false
*   d.undefined 类型
*   e.null 类型
*
*   2.引用类型(对象值类型)  typeof 返回是一个对象
*   a.Number类型
*   var num = new Number()
*   b.String 类型
*   c.Boolean类型
*
* */
 var num1 = 100 // num
 var str1 = '100' // string
 var str2 = 'true'// string
 /*
 * 下面两种方式定义数字是一致的
 * 原始类型定义方式 - 字面量方式
 * 引用类型定义方式 - 创建对象方式
 * */
 var num1 = 100 //字面量定义方式
 var num2 = new Number(100) // 引用类型的定义方式
console.log(num1);//100
console.log(num2);//100

var str1 = 'this is a string '//string 的原始类型定义方式
 var str2 = new String('this is a string ')// 引用类型的定义方式

 var boo1 = true  // 原始定义方式
 var boo2 = new Boolean(true) //引用类型的定义方式
/*
* typeof 运算符 - 作用：判断原始类型的类型名称
* 用法 typeof  变量名
* 返回值  变量对应的类型名称
*
* instanceof 运算符 - 判断引用类型的类型名称
* 用法 ： 变量名 instanceof 类型名称
* 返回值 ： true 表示是所写类型名 false  表示不是检测类型名称
* */
console.log(typeof num1) //number
console.log(typeof str2) //object

console.log(num2 instanceof String) // false
