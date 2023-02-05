//  通过acsii码转换
var addStrings = function(num1, num2) {
    let ans = []
    // 由低位到高位加 不够🙅‍零  注意进位数不为零的情况
    let num1Index = num1.length-1, num2Index=num2.length-1,extra=0;
    while(num1Index >=0 || num2Index >=0 || extra != 0){
        let a = num1Index >=0 ? num1[num1Index]-'0' : 0;
        let b = num2Index >=0 ? num2[num2Index]-'0' : 0;
        let result = a+b+extra;
        ans.push(result%10)
        extra =Math.floor(result/10)
        num1Index--
        num2Index--
    }
    return ans.reverse().join("")
};