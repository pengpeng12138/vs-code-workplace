function add(){
    var num=0;
    return function(){
        num++;
        console.log("counter="+num);
    }
}
var plus=add();
plus();
plus();

// 函数的立即执行
var plus=(function(){
    function add(){
        var num=0;
        return function(){
            num++;
            console.log("counter="+num);
        }
    }   
})();