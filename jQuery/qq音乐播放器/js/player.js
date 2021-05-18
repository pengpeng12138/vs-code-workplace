(function(window){
    function Player($audio){
        return new Player.prototype.init($audio);
    }


    Player.prototype = {
        constructor:Player,
        musicList:[],
        init:function($audio){
            this.$audio = $audio;
            this.audio = $audio.get(0);//获取一个原生的

        },
        currentIndex:-1,
        playMusic :function(index,music){
            //判断是否是同一个音乐
            if(this.currentIndex == index){
                //同一首歌
                if(this.audio.paused){
                    this.audio.play();
                }else{
                    this.audio.pause();
                }
            }else{//不是同一首

                this.$audio.attr("src", music.link_url);
                this.audio.play();

            }
        },
        preIndex:function(){
            var index = this.currentIndex - 1;
            if(index < 0){
                index = this.musicList,length - 1;
            }
            return index;
        },
        nextIndex:function(){
            var index = this.musicList +1;
            if(index> this.musicList.length - 1){
                index = 0;
            }
            return index;
        },

        changeMusic:function(index){
            //删除对应的数据
            this.musicList.splice(index,1);
            //判断当前删除的是否是正在播放音乐的前面的音乐
            if(index < this.currentIndex){
                this.currentIndex = this.currentIndex -1;
            }
        },
        // getMusicDuration:function(){
        //     //duration 属性返回当前音频/视频的长度，以秒计。
        //     //
        //     // 如果未设置音频/视频，则返回 NaN (Not-a-Number)。
        //     return this.audio.duration;
        // },
        // getMusicCurrentTime:function(){
        //     //currentTime 属性设置或返回音频/视频播放的当前位置（以秒计）。
        //     return this.audio.currentTime;
        // },
        musicTimeUpdate:function(callBack){
            var $this = this;
            this.$audio.on("timeupdate",function(){
                var duration = $this.getMusicDuration();
                var currentTime = $this.getMusicCurrentTime();
                var timeStr = $this.formatDate(currentTime,duration);
                callBack(currentTime,daration.timeStr);
            })
        },
        //定义一个格式化时间的方法
        formatDate:function(currentTime,duration){
            var endMin = parseInt(duration/60);
            var endSec = parseInt(duration%60);
            if(endMin < 10){
                endMin = "0" + endMin;
            }
            if(endSec < 10){
                endSec = "0" +endSec;
            }

            var startMin = parseInt(currentTime/60);
            var startSec = parseInt(currentTime%60);
            if(startMin < 10){
                startMin = "0" + startMin;
            }
            if(startSec < 10){
                startSec = "0" +startSec;
            }
            return startMin+":"+startSec+"/"+endMin+":"+endSec
        },
        musicSeekTo:function(value){
            if(isNaN(value))return;
            this.audio.currentTime = this.audio.duration * value;
        },
        musicVoiceSeekTo:function(value){
            if(isNaN(value))return;
            if(value < 0 || value > 1)return;
            this.audio.volume = value;
        }
    }
    //因为init也是函数，他的prototype指向的是init的原型对象，所以要把它修改指向为Player的原型，他的返回值才可以正常调用。
    Player.prototype.init.prototype = Player.prototype;
    window.Player = Player;
})(window)