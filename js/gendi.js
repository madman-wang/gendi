/**
 * Created by Administrator on 2016/8/22 0022.
 */
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
};

