$(function () {
  //监听游戏规则的点击
  $('.rules').click(function () {
    $('.rule').stop().fadeIn(100);
  })
  //监听关闭按钮的点击
  $('.close').click(function () {
    $('.rule').stop().fadeOut(100);
  })

  //监听开始游戏按钮的点击
  $('.start').click(function () {
    $(this).stop().fadeOut(100);
    //调用处理进度条的方法
    progressHandler();

    //灰太狼出现的方法
    startWolfAnimation();
  })

  //监听reStart
  $('.reStart').click(function(){
    $('.mask').stop().fadeOut(100);
    progressHandler();
    startWolfAnimation();
  })
//进度条的方法
  function progressHandler() {
    $('.progress').css('width',180);
    //开启定时器处理进度条
    var timer = setInterval(function(){
      //拿到进度条当前的宽度
      var progressWidth = $('.progress').width();
      //减少当前的宽度
      progressWidth -= 5;
      //重新给进度条赋值宽度
      $('.progress').css('width',progressWidth);
      //监听进度条是否走完
      if(progressWidth <=0){
        //关闭定时器
        clearInterval(timer);
        //显示重新开始界面
        $('.mask').stop().fadeIn(100);
        stopWolfAnimation();
      } 
    },500)
    
  }
  function stopWolfAnimation(){
    $('.wolfImage').remove();
    clearInterval(wolfTimer);
   
  }

  var wolfTimer;
  function startWolfAnimation(){
   
    //定义两个数组保存灰太狼和小灰灰的图片
    var wolf_1=['./images/h0.png','./images/h1.png','./images/h2.png','./images/h3.png','./images/h4.png','./images/h5.png','./images/h6.png','./images/h7.png','./images/h8.png','./images/h9.png'];
    var wolf_2=['./images/x0.png','./images/x1.png','./images/x2.png','./images/x3.png','./images/x4.png','./images/x5.png','./images/x6.png','./images/x7.png','./images/x8.png','./images/x9.png'];
 // 2.定义一个数组保存所有可能出现的位置
    var arrPos = [
  {left:"100px",top:"115px"},
  {left:"20px",top:"160px"},
  {left:"190px",top:"142px"},
  {left:"105px",top:"193px"},
  {left:"19px",top:"221px"},
  {left:"202px",top:"212px"},
  {left:"120px",top:"275px"},
  {left:"30px",top:"295px"},
  {left:"209px",top:"297px"}
];
   //创建一个图片
   var $wolfImage = $("<img src='' class='wolfImage'>")
   //随机获取图片的位置
   var postIndex = Math.round(Math.random()*8);
   //设置图片显示位置
   $wolfImage.css({
     position:'absolute',
     left:arrPos[postIndex].left,
     top:arrPos[postIndex].top
   })
   //设置图片类型
   var wolfType = Math.round(Math.random()) == 0 ? wolf_1 : wolf_2;
   
   //设置图片内容
    wolfIndex = 0;
    wolfIndexEnd = 5;
    wolfTimer = setInterval(function(){
    wolfIndex++;
   $wolfImage.attr("src",wolfType[wolfIndex]);
   if(wolfIndex > wolfIndexEnd){
    $wolfImage.remove();
    clearInterval(wolfTimer);
    startWolfAnimation();
   }
   },200)
   //将图片添加到界面上
   $('.container').append($wolfImage);

   //调用处理游戏规则的方法
  gameRules($wolfImage);

  }

  function gameRules($wolfImage){
    $wolfImage.one('click',function(){
      //修改索引值
      wolfIndex = 5;
      wolfIndexEnd = 9;
      //拿到当前点击图片的地址
      var $src = $(this).attr('src');
      console.log($src);
      //判断是不是灰太狼 indexof 返回位置或者负一
      var flag =$src.indexOf('h') >= 0;
      console.log(flag)
      if(flag){
        // +10
        $(".score").text(parseInt($(".score").text()) + 10);
    }else{
        // -10
        $(".score").text(parseInt($(".score").text()) - 10);
    }
    })
  }
  





})