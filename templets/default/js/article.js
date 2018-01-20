function getStr(num){
	var chars = ['0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','(',')','_','{','}','[',']','?','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	var res = "";
	for(var i = 0; i < 10 ; i ++) {
	    var id = Math.ceil(Math.random()*35);
	    res += chars[id];
	}
	return res;
}
$(document).ready(function (){
	var lisnr_div = $(".art_content").children('div');
	setSiteFlag(lisnr_div);

	var lisnr_p = $(".art_content").children('p');
	setSiteFlag(lisnr_p);

    var lisnr_a_div = $(".art_content div").children('a');
    hideTag(lisnr_a_div);

	var lisnr_a_p = $(".art_content p").children('a');
    hideTag(lisnr_a_p);
});
var setSiteFlag = function(obj){
	for(var x =0;x<obj.length;x++){
		var isAdd = true;
		var childrens = obj[x].children;
		for(var y = 0;y<childrens.length;y++){
			var nodeName = childrens[y].nodeName;
			if(nodeName=="IMG"){
				isAdd = false;
			}
		}
		if(isAdd){
			$(obj[x]).append("<span style='color:#fff'>&nbsp;&nbsp;<a style='color:#fff' onmouseover='this.style.color=#fff' href='http://www.win10os.com'>win10系统之家</a>"+getStr(x) +"</span>");
		}
	}
}
var hideTag = function(obj){
	for(var x =0;x<obj.length;x++){		
		$(obj[x]).css("display","none");
	}
}
$(".art_like").on('click',function(){
        var lisnr_a_p = $(".art_content p").children('a');
	for(var x =0;x<lisnr_a_p.length;x++){		
		$(lisnr_a_p[x]).css("display","inline");
	}
        var lisnr_a_div = $(".art_content div").children('a');
	for(var x =0;x<lisnr_a_div.length;x++){		
		$(lisnr_a_div[x]).css("display","inline");
	}    
});

var anchorClick = function () {
    var pos = $(".bdlikebutton").offset().top;
    $("html,body").animate({ scrollTop: pos>500?pos-200:pos }, 400);
};

