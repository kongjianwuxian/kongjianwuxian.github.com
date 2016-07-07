

			$(function()

			{

				//获取可视区的高度
				var viewHeight=$(window).height();

				//获取可视区的宽度
				var viewWidth=$(window).width()-window.scrollLeft;

				//让div的宽度和高度等于可视区的宽度和高度
				$('.screen').css('width',viewWidth);
				$('.screen').css('height',viewHeight);

				//对屏幕拉动滚动条是的效果
			    $(window).scroll(function()
			    {
			    	var viewHeight=$(window).height();
			    	var index = Math.floor(($(document).scrollTop()+viewHeight/2)/viewHeight);
			    	$('#sidenav li').eq(index).attr('class','active').siblings().attr('class','');
			    })

				//对导航点击时背景的变化
				$('.nav li').click(function()
				{
					$(this).css('background','#05def8').siblings().css('background','');
					$('body').animate({scrollTop:$(this).index() * viewHeight},1000)
				})

				//对于侧边导航点击产生的事件
				$('#sidenav li').click(function()
				{
					$('body').animate({scrollTop:$(this).index() * viewHeight},1000);
				})

               //about me 下面图片的动画效果
                
			});
		