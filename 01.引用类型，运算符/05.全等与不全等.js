/*
* 全等与不全等 ：比较值还比较类型 ，结果严禁
* 全等- ===  两个比较的值还有类型都一样，返回true
* 不全等 ！==  当两边比较值或者类型有一个或者两个都不相等，返回true
* */
var num = 1
var num1 = 1
var str = '1'
var boo = true

console.log(num===num1)//true
console.log(num===str)//false 值相等但是一个是number类型一个是string类型
console.log(num == true) //false true返回值是1  两个值相等 但是类型不一样