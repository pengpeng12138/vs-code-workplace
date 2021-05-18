// var num=Number(prompt("输入第一个值"));
// var num2=Number(prompt("输入第二个值"));
// var result=num+num2;
// alert('您输入的值是'+result);

// function add(){
//     var z=0;
//     for(var i=0;i<arguments.length;i++){
//         z+=arguments[i];
//     }
//     return z;
// }

// var rs=add(1,2,3,2,2,);
// console.log("dasd"+rs);

// function add(){
//     console.log("add"+x);
//     x=100;
// }
// var x=1;
// add();
// console.log("全局"+x);

// console.log("y1"+y);
// add();
// console.log("y2"+y);
// function add(){
//     y=10;
// }

// function Person(pName,pSex,pAge){
//     this.name=pName;
//     this.sex=pSex;
//     this.age=pAge;

//     this.slogan=function(){
//         console.log("woshi"+this.name);
//     }
// }

// var Person1=new Person("a","meal",3);
// var Person2=new Person("b","meal",7);

// var time1=new Date();
// var t=0;
// for(i=0;i<1000000;i++){
//     t++;
// }
// var time2=new Date();
// var n=time2.getTime()-time1.getTime();

// for(var i=0;i<10;i++){
//     console.log(Math.random()*10+1)
// }
// var a=confirm("confirm弹窗");
// if(a){
//   location.replace("https://www.baidu.com/");
// }else
// location.reload;

// var num=0;
// function add(){
//     console.log("num="+ ++num);
// }
// var stl=setInterval(add,1000);
// function end(){
//     console.log("clear");
//     clearInterval(stl);
// }
// setTimeout(end,5000);


// var num=0;
// function add(){
//     console.log("点击了"+ ++num);
// }
// var div=document.getElementById("div");
// div.onclik=add;
// div.addEventListener("click".add);


// var n=document.getElementById("div1");
// console.log(n);
// n=document.getElementById("div2");
// console.log(n);

// var input1=document.getElementById("input1");
// input1.addEventListener("keydown",add);
// function add(event){
//     console.log(event)
// }

var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var head1=document.getElementsByTagName("head")[0];
var body1=document.getElementsByTagName("body")[0];
div1.addEventListener("click",add1);
div2.addEventListener("click",add2);
head1.addEventListener("click",add3);
body1.addEventListener("click",add4);
function add1(){
    console.log("1111");
}
function add2(){
    console.log("2222");
}
function add3(){
    console.log("3333");
}
function add4(){
    console.log("4444");
}