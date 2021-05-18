function fibonacci(n){
    return n<=2 ?1 : fibonacci(n-1)+fibonacci(n-2);
}
//注意这个分线程不能操作dom，因为没有window对象。
var onmessage = function(event)
{//上面的语句是固定格式,注意不能用函数声明。通过event.data来获得发送来的数据。
    var number = event.data;
    console.log("分线程接收到主线程发送的数据");
    //计算斐波拉契
    var result = fibonacci(number);
    //向主线程发送数据
    postMessage(result);
    console.log("分线程向主线程返回数据："+ result);
}