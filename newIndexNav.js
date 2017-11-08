/**
 * Created by Administrator on 2017/10/10.
 */
(function(){
    var navBar='<div class="topCon" style="position: relative">' +
        '<a target="_blank" href="http://www.{$Think.const.TOP_DOMAIN}" style="float: left;border: none" class="topTitle on">智农首页</a>' +
        '<div style="float: left;border: none">' +
        '<a  class="sprite1"></a><a>北京[切换城市]</a>' +
        '</div>' +
        '<a id="phoneApp" >移动客户端</a>' +
        '<div class="phoneAppDown" style="top:55px">' +
        '<img   src="/Public/images/images2017/nlb.png" title="农联宝下载">' +
        '<span>下载农联宝App</span>' +
        '</div>' +
        '<div class="phoneAppDown" style="top:200px">' +
        '<img   src="/Public/images/images2017/npb.png" title="农品宝下载">' +
        '<span>下载农品宝App</span>' +
        '</div>' +
        '<div class="phoneAppDown" style="top:345px">' +
        '<img src="/Public/images/images2017/nfb.png" title="农服宝下载">' +
        '<span>下载农服宝App</span>' +
        '</div>' +
        '<a style="display: inline-block" href="http://www.{$Think.const.TOP_DOMAIN}/user/logout.php">退出</a>' +
        '<a href="http://www.{$Think.const.TOP_DOMAIN}/user/?f=newindex">您好，000</a>' +
        '<a style="display: none">退出</a>' +
        '<a href="http://www.{$Think.const.TOP_DOMAIN}/user/login.php">登录</a>' +
        '<a target="_blank" href="http://www.{$Think.const.TOP_DOMAIN}/?a=test">雷达</a>' +
        '<div class="topTitle" style="position: relative"><div class="gouWuTips">0</div>' +
        '<a class="sprite4"></a>' +
        '<ul class="sub gouWu">' +
        '<li>' +
        '<a target="_blank" class="gouWuCheAllInfo" href="http://mall.{$Think.const.TOP_DOMAIN}/index.php?app=cart">' +
        '<img src="http://mall.{$Think.const.TOP_DOMAIN}/{$vo[goods_image]}">' +
        '<span  style="float: right;display: block">' +
        '<span class="gouWuTitle">0000000</span>' +
        '<span style="color: red;">￥0</span>' +
        '</span>' +
        '</a>' +
        '<a class="del" href="http://www.{$Think.const.TOP_DOMAIN}/?a=delCart&goods_id={$vo[goods_id]}">删除</a>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '<div style="position: relative">' +
        '<a target="_blank" class="sprite3" href="http://www.{$Think.const.TOP_DOMAIN}/user/?f=im&on=xitong"></a>' +
        '<div class="gouWuTips"> 0</div>' +
        '</div> ' +
        '<div style="float: right" class="topTitle">' +
        '<a href="#">频道</a>' +
        '<a class="sprite2"></a>' +
        '<ul class="sub pingDaoMun">' +
        '<li><a href="http://mall.{$Think.const.TOP_DOMAIN}">农贸集市</a></li>' +
        '<li><a href="http://zc.{$Think.const.TOP_DOMAIN}">众创空间</a></li>' +
        '<li><a href="http://news.{$Think.const.TOP_DOMAIN}">农事资讯</a></li>' +
        '<li><a href="http://baike.{$Think.const.TOP_DOMAIN}">农事百科</a></li>' +
        '<li><a href="http://pvp.{$Think.const.TOP_DOMAIN}">植物品种</a></li>' +
        '<li><a href="http://bigdata.{$Think.const.TOP_DOMAIN}">涉农专利</a></li>' +
        '</ul>' +
        '</div>' +
        '</div>';

    jQuery(".topCon").slide({
        type: "menu",
        titCell: ".topTitle",
        targetCell: ".sub",
        effect: "slideDown",
        delayTime: 300,
        triggerTime: 0,
        returnDefault: true
    });

    $.ajax({
        url:"http://www.zhinong.com/?a=getNavigationData",
        type:"get",
        success:function(data){
            console.log(JSON.parse(data));
        }
    })
})()