/*
* 类型转换 - number,string,boolean
* 1.隐式类型转换的执行效率比较高
* 转换成字符串
* ‘’+ 任意类型 ->字符串类型（string）
* 转换成数字值
* + 任意类型 ->数字值类型(num)
* 转换成布尔值
* ！！+ 任意类型 ->布尔值类型（boolean）
*
* 2.显示类型的转换 - 代码可读性高
* 转换成字符串
* String(任意类型)
* toString()
* 转换成数字之值
* Number(任意类型)
* 方法
* parseInt()转换成整数
* parseFloat()转换成浮点型（小数）
* 转换成布尔值（boolean）
* Boolean(任意类型)
*
* */
  var num = 100
  var boo = true
  var str = '100.145'
  var str1 = 'this is a string'

  var result1 = '' +num
  var result2 = '' + boo
  //转换成字符串
  console.log(typeof result1)//string
  console.log(typeof result2)//string
  console.log(num); //100
  console.log(result1); //100

  /*
  * boolean类型转成number类型
  * true -> 1
  * false -> 0
  * string类型转换成number类型
  * 字符串内容是数字值 -- 转换成对应数字
  * 字符串内容是普通文本内容 -- 转换成 NaN
  *
  * */
  var result3 = + boo
  var result4 = + str
  var result5 = + str1
console.log(typeof result3);//number
console.log(result3); // 1
console.log(typeof result4);//number
console.log(result4);//100.145
console.log(typeof result5);//number
console.log(result5);//NaN

/*
* number类型转换成boolean类型
* 0和NaN转换成false
* string类型转成boolean类型
* 空字符串（‘’）转换成false
* */
var result6 = !!num
var result7 = !!str
console.log(typeof result6)//boolean
console.log(typeof result7);//boolean

/*
* boolean类型转换成number类型
* Number(boolean类型)-把boolean类型转换成number类型时 - 转换正确
* ParseInt()和ParseFloat()把boolean类型转换成number类型 - NaN
*
* string类型转换成number类型
* 如果当前字符串的内容为整数 ->parseFloat()得到的还是整数
* 当前内容字符串内容为小数 -> parseInt()得到的是整数（忽略小数）
*
* 检测同上  var result = parseFloat(str)
* console.log(typeof result)
* */


