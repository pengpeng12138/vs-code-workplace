var tabs = document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);

var lists = document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);

for(var i=0;i<tabs.length;i++){
    tabs[i].onclick = showlist;
}

function showlist(){
    for( var i=0;i<tabs.length; i++){
        if(tabs[i] === this){
            tabs[i].className = "active";
            lists[i].className = "active";
        }
        else{
            tabs[i].className = "";
            lists[i].className = "";
        }
    }
}


var seckillnav = document.getElementById("seckillnav");
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop;
    if (scroll>=283){
        seckillnav.className="seckill-nav seckill-navfixed";
    }else{
        seckillnav.className="seckill-nav";
    }
    console.log(scrollTop);
}