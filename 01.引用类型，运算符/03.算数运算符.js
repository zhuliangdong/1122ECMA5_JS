/*
* 算数运算符
*+ - * / ->加减乘除
* % ->求余运算符
* */
 var result = 100/0
console.log(result)// Infinity 无穷大

var result1 = 10%2
console.log(result) // 0
var result2 = 10%3
console.log(result1) //1 得到的是余数

 /*
 * 自增，自减符 ： 每次增减或者减少1
 * 自增运算符 ：++
 * 前置自增运算 先增加，再返回
 * 后置自增运算符 先返回，后增加
 *
 * 自减运算符 ：--
 * 前置自减运算符：现减少，在返回
 * 后置自减符 先返回再减少
 * */
 var num  = 100
 console.log(num)//100
 console.log(num++)//100 先返回 在运算 下次num是101
 console.log(++num) //102先运算 在返回 再原来基础上 num 101 运算后 102 返回102
 console.log(num--)// 102 先返回再运算 返回102运算后num101
 console.log(--num)//100先运算后返回 num101运算后100 返回100