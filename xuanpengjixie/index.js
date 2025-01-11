$(function(){
	//下拉菜单	
	$('.mainlevel').hover(function() {
		var wei = $('.menu li').index($(this));
		//$(this).prev("li").addClass("nobg");
		$(".menu li").eq(wei).find('.lbul').slideDown();
		$(".menu li").eq(wei).prev().addClass("nobg");
		$(".menu li").eq(wei).addClass("hover");
	},
	function() {
		//$(this).prev("li").removeClass("nobg");
		var wei = $('.menu li').index($(this));
		$(".menu li").eq(wei).find('.lbul').slideUp();
		$(".menu li").eq(wei).prev().removeClass("nobg");
		$(".menu li").eq(wei).removeClass("hover");
	});	
	//产品分类
	$(".shohide").click(function(){			
			var hh = $(this).parents("h3");
			var hhp = hh.parents(".subnav");
			var ul = hh.next(".sub-menu");
　　		  　ul.slideToggle("400").siblings(".sub-menu").slideUp("400").removeClass("sub-menu-show");
			hh.toggleClass("active");
			ul.toggleClass("sub-menu-show").siblings(".sub-menu-show").removeClass("sub-menu-show");
			hh.siblings(".active").removeClass("active");
　　});
	//关注我们
	$('#floatmenu_weixin').hover(function(){
		$('#weixin_show').show();
	},function(){
		$('#weixin_show').hide();
	});
	//返回顶部
	$('#floatmenu_fanhui').click(function(){
		$("html ,body").animate({scrollTop :0},1000);
	})
	//滑块hover
 
});


