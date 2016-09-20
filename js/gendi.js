
//获取dom对象高度，找出最大高度,高度设置为一样
function maxHeight (obj){
    var max = 0,
        heightArr = [];

    for(var i = 0; i < obj.length; i++){
        heightArr.push(obj.eq(i).outerHeight());

        max = Math.max.apply(null,heightArr);
    }
    obj.css({
        height:max
    })
}

//视频播放
function vidplay(video,button) {
    button.onclick = function(){
        if (video.paused) {
            video.play();
            video.controls = 'controls';
            button.className += ' active';
        }
    };
}

//头部导航加active
function active(index){
    $(document).ajaxComplete(function(){
        $('.navbar-nav > li').eq(index).addClass('active');
    });
}

//点击滑动效果
function clickSlide(obj,scrollTop) {
    if(obj){
        obj.click(function () {
            $('body').animate({
                scrollTop: scrollTop
            });
        });
    }
}

window.onload = function(){
    var aCard = $('.card-content .card-box');
    if(aCard){
        maxHeight(aCard);
    }

    var aCard2 = $('.viewpoint-box');
    if(aCard2){
        maxHeight(aCard2);
    }

    var aFooterNav = $('.right-nav ul');
    if(aFooterNav){
        maxHeight(aFooterNav);
    }

    var video = document.getElementById("video1");
    var button = document.getElementById("play");
    if(video && button){
        vidplay(video,button);
    }

    var scrollHeight = $('.container-fluid').height() + $('.title-indication').height() + 30;
    var scrollHeight2 = scrollHeight + $('.sickness-data').outerHeight(true);
    clickSlide($('.clickSlide'),scrollHeight);
    clickSlide($('.clickSlide2'),scrollHeight2);
    clickSlide($('.btn-info'),$('.navbar-large-blank').outerHeight());
};

