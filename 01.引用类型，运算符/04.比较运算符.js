/*
* 比较运算符
* 数字值的比较 注意>= 和<=包含相等的情况
* 字符串的比较 a到z的顺序由小到大
* 布尔值的比较 true为1 false为0
*  == ，！=，>,<.>=,<=运算比较都是比较值而不是类型
* */
var num1 = 10
var num2 =40
console.log(num1 = num2)//false
console.log(num1 > num2)//false
console.log(num1 != num2)//true

var str1 = 'this is a string'
var str2 ='hello'
console.log(str1 == str2) //false
//两个字符串内容一致 则是true 不一致false

var num = 1
var boo = true
var str = '1'
console.log(num==boo) //true boolean值是true 则是1
console.log(boo==str)//true
console.log(num == str)//true
//上面充分说明 == ，！=比较的都是值而不是类型