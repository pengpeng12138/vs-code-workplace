(function(){
  var msg = "adasd"
  function doSomething(){
    console.log("AAAA")
  }
  function doOtherthing(){
    console.log("aaa");
  }
  //匿名函数的暴露方式，把他添加到window属性
  window.myModule2 = {
    doSomething:doSomething,
    doOtherthing:doOtherthing
  }
})()
