// main pagenation
var trigger = true;
function mainPage(){
    var section = $('.main').children('section');
    for(i = 0; i<section.length; i++){
        $('.main .main-page').append('<span class="s' + i + '"></span>');
    }
    $('.main .main-page span').click(function(){
        trigger = false;
        var content = $(this).attr('class');
        var contentTop = $('.main section.' + content).offset().top;
        $('html').animate({scrollTop : contentTop},500);
        setTimeout(function(){
            trigger = true; 
        },600)
        $(this).addClass('on').siblings('span').removeClass('on');
    });
}

function scrollCheck(scrollTopPosition){
	var section = $('.main').children('section');
	for(i = 0; i<section.length; i++){
		var scrollSection = Number(section.length) - Number(i) - 1;
		
		if(scrollTopPosition >= $('section.s'+scrollSection).offset().top - ($('section.s'+(scrollSection)).height()/2)){
			if(!$('section.s'+scrollSection).hasClass('on')){
				$('section.s'+scrollSection).addClass('on');
			}
		}
		
		if(trigger){
			if(scrollTopPosition >= $('section.s'+scrollSection).offset().top - 2){
				$('.main .main-page .s' + scrollSection).addClass('on').siblings('span').removeClass('on');
				return false;
			}
		}
	}
}

// category
function category(){     
    $(".nav-wrap > li:not(.on)").hover(function(){
        $('.nav-wrap > li.on .s-nav').css('display','none');
        $('header .nav-wrap > li.on > a').addClass('no-line');
    },function(){
        $('.nav-wrap > li.on .s-nav').css('display','inline-block');
        $('header .nav-wrap > li.on > a').removeClass('no-line');
    });
}

// all menu 
function allmenu(){
    $('.menu-btn').click(function(){
        $('.all-menu').addClass('on');
    });
    $('.close-btn').click(function(){
        $('.all-menu').removeClass('on');
    }); 
    $(".all-menu").click(function (event) {
        if (!$(event.target).closest(".all-menu ul").length) {
            $(".all-menu").removeClass("on");
        }
    });
}

// main video  
function mainVideo(){
    $('.main .video-wrap').on('click',function(){			
        var mainVideo=document.getElementById("mainVideo"); 
        if (mainVideo.paused) {
            mainVideo.play(); 
        }
        else { 
            mainVideo.pause(); 
        }
    }); 
}

// main banner
function issuesSlider(){
    var swiper = new Swiper('.issues-box', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween : 0,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
}

// sub banner
function followSlider(){
    var swiper = new Swiper('.best-con .slider-wrap', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween : 0,
        pagination: {
            el: '.swiper-bar',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
    });
}
function pressSlider(){
    var swiper = new Swiper('.press-slider', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween : 0,
        pagination: {
            el: '.swiper-bar',
            clickable: true,
        },
        autoplay:{
            delay:3000
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
    });
}

// popup slider
function popSlider(e){
    var targetA = $(e); 
    var cont = targetA.attr('data-num');
    var popupWrap = targetA.parents('.pop-item');
    var swiperHtml = '';
    swiperHtml += '<div class="pop-slider-inner swiper-container">';
    swiperHtml += '<div class="swiper-wrapper">';
    for(i = cont; i<popupWrap.find('li').length; i++){
        var targetLi = popupWrap.find(' > li').eq(i) ;
        var dataSRc = targetLi.find(' > a img').attr('src');
        swiperHtml += '<div class="swiper-slide">';
        swiperHtml += '<img src="' + dataSRc + '">';
        swiperHtml += '</div>';
    }
    for(i = 0; i< cont; i++){
        var targetLi = popupWrap.find(' > li').eq(i) ;
        var dataSRc = targetLi.find(' > a img').attr('src');
        swiperHtml += '<div class="swiper-slide">';
        swiperHtml += '<img src="' + dataSRc + '">';
        swiperHtml += '</div>';
    }
    swiperHtml += '</div>';
    swiperHtml += '<div class="swiper-arrow"><div class="swiper-next">다음</div><div class="swiper-prev">이전</div></div>';
    swiperHtml += '</div>';
    swiperHtml += '<button class="close"><span class="ico-close-w">닫기</span></button>';
	
    $('.view-popup .pop-slider').html(swiperHtml);
    
    var swiper = new Swiper('.view-popup .swiper-container', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween : 0,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
    });
    $('.view-popup').addClass('active');
    $('.view-popup .close').click(function(){
        $('.view-popup').removeClass('active');
    });
}

// tab container
function tabContainer(){
    $('.tab-btns > li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        var container = $(this).parents('.tab-btns').siblings('.tab-container');
        container.children('.tab-con').eq(index).addClass('on').siblings().removeClass('on')
    });
}

// images accordion
function imgAccordion(){
    $('.img-accordion > li ').mouseover(function(){
        $(this).addClass('hover').siblings().removeClass('hover');
    });
}

// accordion
function accordion(){
    $('.accordion .title').click(function(){
        $(this).parents('li').toggleClass('on').siblings().removeClass('on');
    });
}

// datepicker
function datepicker(){
	$(".calendar").datepicker({
		monthNames: ['1','2','3','4','5','6','7','8','9','10','11','12'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		showMonthAfterYear: true,
		yearSuffix: ".",
		dateFormat: 'yy-mm-dd',
		showOn: "button",
		buttonImage: "../../assets/images/btn_cal.png",
	});

	$(".calendar").click(function(){
		$(this).datepicker("show");
	});
}

// select
function selectBox(){
    $('.select-box select').change(function(){
        var option = $(this).val();
        $(this).siblings('span').html(option);
    });
}

// main pagenation
function mainScrollpage(windowScrollTop){
        var scrollTop = windowScrollTop;
        var s1Top = $('.main .s1').offset().top - $('header').height();
        var s1Bottom = $('.s1 .scroll-wrap li:nth-last-of-type(1)').offset().top - $('.head-wrap').height();
        var absolTop = $('.s1').height() - $('.head-wrap').height();
    
        if( scrollTop >= s1Top &&  s1Bottom > scrollTop){
            $('.head-wrap').addClass('fixed');
        }else {
            $('.head-wrap').removeClass('fixed');
        }
        if( scrollTop >= s1Bottom){
            $('.head-wrap').addClass('absol');
        }else {
            $('.head-wrap').removeClass('absol');
        }
}

// main chart
function mainChart(targetId){
    Highcharts.chart(targetId, {
        chart: {
            backgroundColor: '#000000',
            type: 'line'
        },
        title: {
            text: null
        },
        yAxis: {
            title: {
                text: null
            },
            gridLineColor: '#333333',
            labels: {
                useHTML: true,
                style: {
                    fontFamily:'Montserrat',
                    fontSize: '14px'
                }
            }
        },
        xAxis: {
            title: {
                text: null
            },
            categories: [
            '06.13',
            '06.20',
            '06.27',
            '07.04',
            '07.11',
            ],
            lineColor : '#333333',
            labels: {
                useHTML: true,
                style: {
                    fontFamily:'Montserrat',
                    fontSize: '14px'
                }
            }
        },
        colors: ['#03cab1'],
        backgroundColor: ['#000'],
        series: [{
            name: 'INSIGHT',
            data: [10000, 8555, 20000, 15000, 4050]
        }],
        legend: {
            layout: 'vertical',
            align: 'bottom',
            verticalAlign: 'middle'
        },
        tooltip: {
            backgroundColor:null,
            borderWidth:0,
            borderRadius:150,
            shadow: false,
            useHTML: true,
            style:{
                color:'#000000',
                padding:0,
            },
            formatter: function () {  
                //var numericSymbols = ['k', 'M', 'G', 'T', 'P', 'E'];
                var ret = '',
                numericSymbols = 'k',
                multi;
				multi = 1000;
				if (this.y >= multi) {
					ret = Highcharts.numberFormat(this.y / multi, -1)
					ret = Number(ret).toFixed(1);
					if(ret.indexOf('.0') != -1 ){
						ret = Math.round(ret);
					}
					ret = ret + numericSymbols;
				}
                return this.points.reduce(function (s, point) {
                    return '<div class="tool-con"><div class="tool-num" style="text-align:center">' + ret + '</div>' + s;
                }, '<b>' + this.x + '</b><div>');
            },
            shared: true,
        },
    });
}

$(function(){
    category();
    allmenu();
    tabContainer();
	
	if($('.date-wrap'.length >= 1)){
		datepicker();
	}
	if($('.select-style'.length >= 1)){
		$('.select-style').each(function(){
			var selectWrap = $(this);
			var targetSelect = selectWrap.find('select');
			var targetLabel = targetSelect.next('label');
			targetSelect.on('change',function(){
				var newValue = $(this).val();
				targetLabel.text(newValue); 
			});
		});
	}
	if($('.investors-tab'.length >= 1)){
		$('.investors-tab li').each(function(i,v){
			var targetLi = $(this);
			var liIndex = i;
			targetLi.find('a').on('click',function(){
				if(!targetLi.hasClass('on')){
					$('.investors-tab li').removeClass('on');
					targetLi.addClass('on');
					$('.investors-tab-lists .investors-tab-list').removeClass('on');
					$('.investors-tab-lists .investors-tab-list').eq(liIndex).addClass('on');
				}
			});
		});
	}
	
	if($('.brand-tab'.length >= 1)){
		$('.brand-tab li').each(function(i,v){
			var targetLi = $(this);
			var liIndex = i;
			targetLi.find('a').on('click',function(){
				if(!targetLi.hasClass('on')){
					$('.brand-tab li').removeClass('on');
					targetLi.addClass('on');
					$('.brand-tab-lists .brand-tab-list').removeClass('on');
					$('.brand-tab-lists .brand-tab-list').eq(liIndex).addClass('on');
					//financialGrapeData();
				}
			});
		});
	}
	if($('.circulation-tab'.length >= 1)){
		$('.circulation-tab li').each(function(i,v){
			var targetLi = $(this);
			var liIndex = i;
			targetLi.find('a').on('click',function(){
				if(!targetLi.hasClass('on')){
					$('.circulation-tab li').removeClass('on');
					targetLi.addClass('on');
					$('.circulation-tab-lists .circulation-tab-list').removeClass('on');
					$('.circulation-tab-lists .circulation-tab-list').eq(liIndex).addClass('on');
					//financialGrapeData();
				}
			});
		});
	}
	if($('.financial-tab'.length >= 1)){
		$('.financial-tab li').each(function(i,v){
			var targetLi = $(this);
			var liIndex = i;
			targetLi.find('a').on('click',function(){
				if(!targetLi.hasClass('on')){
					$('.financial-tab li').removeClass('on');
					targetLi.addClass('on');
					$('.financial-tab-lists .financial-tab-list').removeClass('on');
					$('.financial-tab-lists .financial-tab-list').eq(liIndex).addClass('on');
					//financialGrapeData();
				}
			});
		});
	}
})
var mainGrapeStart = false;//메인 스크롤시 그래프 작동
function mainAsYouLoad(scrollTopPosition){
	var mainAsYouLi = $('.main section .scroll-wrap li');
	for(i = 0; i<mainAsYouLi.length; i++){
		var scrollSection = Number(mainAsYouLi.length) - Number(i) - 1;
		
		if(scrollTopPosition >= mainAsYouLi.eq(i).offset().top - 800){
			if(!mainAsYouLi.eq(i).hasClass('on')){
				mainAsYouLi.eq(i).addClass('on');
			}
		}
	}
}
$(window).on('load',function(){
	var windowScrollTop = $(window).scrollTop();
	if($('.main').length >= 1){
		scrollCheck(windowScrollTop);
		mainScrollpage(windowScrollTop);
		//메인 스크롤시 as you like it 보이기
		mainAsYouLoad(windowScrollTop);
		//메인 스크롤시 그래프 작동
		if(!mainGrapeStart && windowScrollTop >=  $('section.s3').offset().top + $('section.s3').height()/2){
			setTimeout(function(){
				mainChart();
				mainGrapeStart = true;
				return mainGrapeStart;
			},500);
		}
		//메인 스크롤시 그래프 작동 끝
	}
});
$(window).scroll(function(){
	var windowScrollTop = $(window).scrollTop();
	if($('.main').length >= 1){
		scrollCheck(windowScrollTop);
		mainScrollpage(windowScrollTop);
		//메인 스크롤시 as you like it 보이기
		mainAsYouLoad(windowScrollTop);
		//메인 스크롤시 그래프 작동
		if(!mainGrapeStart && windowScrollTop >=  $('section.s3').offset().top + $('section.s3').height()/2){
			setTimeout(function(){
				mainChart('container');
				mainGrapeStart = true;
				return mainGrapeStart;
			},500);
		}
		
		//메인 스크롤시 그래프 작동 끝
	}
});