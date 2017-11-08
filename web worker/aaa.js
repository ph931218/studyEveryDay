/**
 * Created by Administrator on 2017/11/2.
 */
(function (){
    var num=(function (){
        var i=0;
        return function (){
            i++;
            //document.write("<div>"+i+"</div>");
            postMessage(i);
        }
    })();
    setInterval(num,1000);
})();
