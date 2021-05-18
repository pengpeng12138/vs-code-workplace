function myModule(){
    //私有数据
    var msg = "wwwda";
    //操作数据的函数
    function doSomething(){
        console.log("doSomething()"+msg.toUpperCase());
    }
    function doOtherthing(){
        console.log("doOtherthing()"+msg.toLowerCase());
    }
    //向外暴露对象
    return {
        doSomething:doSomething,
        doOtherthing:doOtherthing
    }
}