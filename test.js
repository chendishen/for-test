//QS：请去掉字符串前后空格
function splits(arr) {
    for (var i = 0; i < arr.length; i++) {
        // 判断前边首个不为空格的字符为i
        if (arr[i] != 0) {
            arr[i].index = i;
            //从0开始删除i个空格
            arr.splice(0, i);
            arr.reverse();
            //反转后的数组重新遍历进行上一步操作
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] != 0) {
                    arr[j].index = j;
                    //从0开始删除j个空格
                    arr.splice(0, j);
                    arr.reverse();
                    return arr;
                }
            }
        }
    }
}


var theArr = "    aa b  ";
// 将字符串转为数组
var arr = theArr.split('');

splits(arr);
//转回字符串
arr = arr.join('');

console.log(arr);

//这实现看起来代码量行数多，其实比较容易理解。就作者而言，虽知道正则写起来很快，但无奈正则实在不熟悉，就不用正则了。
//而且有些公司奇怪的需求只允许写函数实现，也有公司禁止面试时使用es6语法糖，见仁见智吧。
