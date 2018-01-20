document.write("<DIV style='z-index:10000;display:none;POSITION: fixed;WIDTH: 48px;BOTTOM: 30px;HEIGHT: 48px;CURSOR: pointer;RIGHT: 0px;' id='gotop' ><IMG border=0 src='/templets/default/images/gotop.gif' alt='返回顶部' width='48' height='48'></DIV>");
var obj = document.getElementById("gotop");
function getScrollTop(num) {
	return document.documentElement.scrollTop + document.body.scrollTop;
}
function setScrollTop(value) {
	if (document.documentElement.scrollTop) {
		document.documentElement.scrollTop = value;
	} else {
		document.body.scrollTop = value;
	}
}
window.onscroll = function() {
	getScrollTop() > 0?obj.style.display = "":obj.style.display = "none";
}
obj.onclick = function() {
	var goTop = setInterval(scrollMove, 10);
	function scrollMove() {
		setScrollTop(getScrollTop() / 1.8);
		if (getScrollTop() < 1)clearInterval(goTop);
	}
}

var temp = '<div id="myModalHb" class="modal fade" tabindex="-1" role="dialog">';
temp+='  <div class="modal-dialog" role="document">';
temp+='    <div class="modal-content">';
temp+='      <div class="modal-header">';
temp+='            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
temp+='            <h4 class="modal-title">扫码领红包</h4>';
temp+='          </div>';
temp+='      <div class="modal-body">';
temp+='        <p style="text-align:center"><center><h3>迎娶白富美，走上人生巅峰，就靠你们了。<br/>快快扫二维码领红包吧！<br/><img src="/templets/default/images/alipay-hb.jpg" width="300"/></center></p>';
temp+='      </div>';
temp+='    </div><!-- /.modal-content -->';
temp+='  </div><!-- /.modal-dialog -->';
temp+='</div><!-- /.modal -->';
$("body").prepend(temp);
$("#myModalHb").modal("show");
