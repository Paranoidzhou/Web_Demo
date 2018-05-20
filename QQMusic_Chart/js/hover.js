

function showimg1(){$(".Function_menu_playimg").attr("src","img/playback_ready.png");}
function showimg2(){$(".Function_menu_addfavimg").attr("src","img/add_ready.png");}
function showimg3(){$(".Function_menu_downimg").attr("src","img/download_ready.png");}
function showimg4(){$(".Function_menu_shareimg").attr("src","img/share_ready.png");}

function hideimg1(){$(".Function_menu_playimg").attr("src","img/playback_default.png");}
function hideimg2(){$(".Function_menu_addfavimg").attr("src","img/add_default.png");}
function hideimg3(){$(".Function_menu_downimg").attr("src","img/download_default.png");}
function hideimg4(){$(".Function_menu_shareimg").attr("src","img/share_default.png");}


$(function(){
	$(".songlist_item_li").hover(function(){
		$(this).find(".Function_menu").css({display:"block"})
	},function(){
		$(this).find(".Function_menu").css({display:"none"})
	});

	$(".singer").hover(function(){
		$(this).find(".singer_name").css({color:"#31c27c"})
	},function(){
		$(this).find(".singer_name").css({color:"#333"})
	});

	$(".Input_text").on("keyup",function(){
		var str = $(this).val();
		var arr = str.split("");
		var sum = 300 - arr.length;
		$(".Input_Foot_span").html("当前还可输<b>"+sum+"</b>字");
	});
});


