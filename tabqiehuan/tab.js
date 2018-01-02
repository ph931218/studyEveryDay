/**
 * Created by Administrator on 2017/12/15.
 */
function tab(title, content) {
    $(title).click(function () {
        $(title).removeClass("active");
        $(this).addClass("active");
        var index = $(title).index($(this));
        var thisContent = $(content).eq(index);
        if(thisContent.css("display")=="none"){
            $(content).css({display:"none"});
            thisContent.fadeToggle(500);
        }
    })
}