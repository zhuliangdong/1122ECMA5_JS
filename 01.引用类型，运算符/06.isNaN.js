/*
* number类型的特数值-NaN（不是数字值）
* NaN自身都不相等，所以无法运用比较符比较
* 怎样判断一个数是不是NaN
* 方法：isNaN(),返回值是true，则证明当前的数不是一个数字值
* isNaN(boolean) 返回值是false 布尔值true返回数字值1 false返回0 所以布尔值是数字
*
* */
console.log(NaN==NaN)//false NaN自身都不相等
console.log(NaN!=NaN)//true

console.log(NaN === NaN)//false
console.log(NaN !== NaN)//true

console.log(isNaN(NaN))//true
var str = 'this is a string'
console.log(isNaN(str))//true 字符串不是数字值 返回true
var num = 100
console.log(isNaN(num))//false 数字不是数字值 返回false
var boo = true
console.log(isNaN(boo));//false 布尔值的返回值 true是1 false是0 所以如果布尔值不是数字 返回false

