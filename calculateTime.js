window.onload = function() { 
var show = document.getElementById("show"); 
setInterval(function() { 
var time = new Date(); 
<!-- // 程序计时的月从0开始取值后+1   -->
var m = time.getMonth() + 1; 
<!-- //根据自己博客的创建时间更改数值  -->
var t = "本博客已经运行 "+(time.getFullYear()-2018) + "年" + (m-5) + "月" 
+ time.getDate() + "天 " + time.getHours() + "时" 
+ time.getMinutes() + "分" + time.getSeconds() + "秒 啦"; 
show.innerHTML = t; 
}, 1000); 
}; 
<!-- 作者：Zuolyme  来源：CSDN  原文：https://blog.csdn.net/zlyaxixuexi/article/details/72802348?utm_source=copy    版权声明：本文为博主原创文章，转载请附上博文链接！ -->