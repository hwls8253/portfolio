
// all menu 
function allmenu(){
    $('.menu-btn').click(function(){
        $('.all-menu').addClass('on');
    });
    $('.close-btn').click(function(){
        $('.all-menu').removeClass('on');
    }); 
    $('.all-menu > ul > li > span').click(function(){
        $(this).parents('li').toggleClass('on').siblings('li').removeClass('on');
    });
}

// main scroll icon
function scrollDown(){
    $(window).load(function(){
        var s1 = $('.s1').offset().top;
        $('.main .ico-scroll').click(function(){
            $('body,html').animate({
                scrollTop : s1
            },500);
        });
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
function mainSlider(){
    var swiper = new Swiper('.s1 .slide', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween : 0,
        pagination: {
            el: '.swiper-bar',
            type: 'progressbar',
        },
    });
    var swiper2 = new Swiper('.s2 .slide', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween : 0,
        pagination: {
            el: '.swiper-bar',
            type: 'progressbar',
        },
    });
    var swiper3 = new Swiper('.s3 .slide', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween : 0,
        pagination: {
            el: '.swiper-bar',
            type: 'progressbar',
        },
    });
    var swiper4 = new Swiper('.s4 .slide', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween : 0,
        pagination: {
            el: '.swiper-bar',
            type: 'progressbar',
        },
    });
    var swiper5 = new Swiper('.s5 .slide', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween : 0,
        pagination: {
            el: '.swiper-bar',
            type: 'progressbar',
        },
    });
}

// main header bg
function headerBg(){
    var s1Top = $('.s1').offset().top;
    $(window).scroll(function(){
        if( $(window).scrollTop() >= s1Top){
            $('header').addClass('bg');
        }else {
            $('header').removeClass('bg');
        }
    });
}

// main scroll check
var trigger = true;
function scrollCheck(scrollTopPosition){
	var section = $('.main').children('section');
	for(i = 0; i<section.length; i++){
		var scrollSection = Number(section.length) - Number(i) - 1;
		
		if(scrollTopPosition >= $('section.s'+scrollSection).offset().top - $('section.s'+(scrollSection)).height()){
			if(!$('section.s'+scrollSection).hasClass('on')){
				$('section.s'+scrollSection).addClass('on');
			}
		}
		
		if(trigger){
			if(scrollTopPosition >= $('section.s'+scrollSection).offset().top - $('header').height()){
				$('.main .main-page .s' + scrollSection).addClass('on').siblings('span').removeClass('on');
				return false;
			}
		}
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
                    fontSize: '10px'
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
                    fontSize: '10px'
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

// tab container
function tabContainer(){
    $('.tab-btns > li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        var container = $(this).parents('.tab-btns').siblings('.tab-container');
        container.children('.tab-con').eq(index).addClass('on').siblings().removeClass('on')
    });
}

// sub category
function category(){
    $('.cate .select').click(function(){
        $(this).parents('.cate').toggleClass('on');
    });
    $("body").click(function (event) {
        if (!$(event.target).closest(".cate").length) {
            $(".cate").removeClass("on");
        }
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
        slidesPerView: 1,
        spaceBetween : 0,
        pagination: {
            el: '.swiper-page',
            clickable: true,
        },
        autoplay:{
            delay:3000
        }
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
    
    var swiper = new Swiper('.view-popup .pop-slider .swiper-container', {
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
        var container = $('.tab-container');
        container.children('.tab-con').eq(index).addClass('on').siblings().removeClass('on')
    });
}

// tab slide 
function tabSlide(){
    $(window).on('load',function(){
        var termBtnsSwiper = new Swiper('.swiper-container.slide-tab', {
            slidesPerView: 'auto',
            loop: false,
            speed: 600,
        });
    });
}
// images accordion
function imgAccordion(){
    $('.img-accordion > a').mouseover(function(){
        $(this).addClass('hover').siblings().removeClass('hover');
    });
}

// accordion
function accordion(){
    $('.accordion .title').click(function(){
        $(this).parents('li').toggleClass('on');
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

$(function(){
    allmenu();
    tabContainer();
    category();
})

        
var mainGrapeStart = false;//메인 스크롤시 그래프 작동
$(document).ready(function(){
    var windowScrollTop = $(window).scrollTop();
    if($('.main').length >= 1){
        scrollCheck(windowScrollTop);
        //메인 스크롤시 그래프 작동
        if(!mainGrapeStart && windowScrollTop >=  $('section.s4').offset().top - $('section.s4').height()){
            mainChart();
            mainGrapeStart = true;
            return mainGrapeStart;
        }
        //메인 스크롤시 그래프 작동 끝
    }
	
    if($('.sub.about section.ceo').length >= 1){
		var posterSwiper = new Swiper('.poster-slider-wrap .swiper-container', {
			loop: false,
			slidesPerView: 'auto',
			spaceBetween : 0,
			pagination: {
				el: '.poster-slider-wrap .swiper-bar',
				type: 'progressbar',
			},
		});
		function ceoVideoPlayPause(e){
			var targetVideo = document.getElementById("ceo-video"); 
			if (targetVideo.paused) {
				targetVideo.play(); 
				if($(e).find('.play-dim').length >= 1 && $(e).find('.play-dim').is(':visible')) $(e).find('.play-dim').hide();
				if($(e).find('.dim').length >= 1 && $(e).find('.dim').is(':visible')) $(e).find('.dim').hide();
			}
			else { 
				targetVideo.pause(); 
				if($(e).find('.play-dim').length >= 1 && !$(e).find('.play-dim').is(':visible')) $(e).find('.play-dim').show();
				if($(e).find('.dim').length >= 1 && !$(e).find('.dim').is(':visible')) $(e).find('.dim').show();
			}
		}
		function ceoVideoChange(e){
			var targetA = $(e),
			 posterSrc = targetA.attr('data-src'),
			 sourceSrc = targetA.attr('data-source'),
			 ceoVideo = $('.ceo-video-wrap'),
			 ceoVideoHtml = '';
			 ceoVideoHtml += '<video id="ceo-video" loop="" poster="	';
			 ceoVideoHtml += posterSrc;
			 ceoVideoHtml += '"><source src="';
			 ceoVideoHtml += sourceSrc;
			 ceoVideoHtml += '" type="video/mp4">이 브라우저는 비디오 태그를 지원하지 않습니다.</video><div class="dim"></div><div class="play-dim"></div>';
			 ceoVideo.html(ceoVideoHtml);
		}
		function ceoVideoChangeSet(){
			var targetA = $('.poster-slider-wrap .swiper-container .swiper-slide:first-child a'),
			 posterSrc = targetA.attr('data-src'),
			 sourceSrc = targetA.attr('data-source'),
			 ceoVideoWrap = $('.ceo-video-wrap'),
			 ceoVideoHtml = '';
			 ceoVideoHtml += '<video id="ceo-video" loop="" poster="	';
			 ceoVideoHtml += posterSrc;
			 ceoVideoHtml += '"><source src="';
			 ceoVideoHtml += sourceSrc;
			 ceoVideoHtml += '" type="video/mp4">이 브라우저는 비디오 태그를 지원하지 않습니다.</video><div class="dim"></div><div class="play-dim"></div>';
			 ceoVideoWrap.html(ceoVideoHtml);
			 setTimeout(function(){
				ceoVideoWrap.css('height',ceoVideoWrap.height() + 1);
			 },500);
		}
		ceoVideoChangeSet();
    }
	
    if($('.sub.about section.heritage').length >= 1){
		$('.heritage-tab-wrap .tab-btns ul li').each(function(i,v){
			var tabBtn = $(this);
			var tabList = $('.heritage-tab-wrap .tab-lists ul li').eq(i);
			tabBtn.find('a').on('click',function(){				
				if(!tabBtn.hasClass('on')){
					$('.heritage-tab-wrap .tab-btns ul li').removeClass('on');
					$('.heritage-tab-wrap .tab-lists ul li').removeClass('on');
					tabBtn.addClass('on');
					tabList.addClass('on');
				}
			});
		});
		$(window).on('load',function(){
			var tabBtnsSwiper = new Swiper('.swiper-container.tab-btns-slider', {
			  slidesPerView: 'auto',
			  loop: false,
			  speed: 600,
			});
		});
    }
	
    if($('.sub.about section.history').length >= 1){
		$('.history .term-btns ul li').each(function(i,v){
			var tabBtn = $(this).find('a');
			tabBtn.on('click',function(){				
				if(!tabBtn.hasClass('on')){
					$('.history .term-btns ul li a').removeClass('on');
					$(this).addClass('on');
					var targetList = $(this).attr('target-list');
					if(targetList != 't0'){
						$('.history .history-lists .history-list').removeClass('show');
						$('.history .history-lists .history-list').each(function(){
							if($(this).hasClass(targetList)) $(this).addClass('show');
						});
					}else{
						$('.history .history-lists .history-list').each(function(){
							if(!$(this).hasClass('show')) $(this).addClass('show');
						});
					}
				}
			});
		});
		$(window).on('load',function(){
			var termBtnsSwiper = new Swiper('.swiper-container.term-btns-slider', {
			  slidesPerView: 'auto',
			  loop: false,
			  speed: 600,
			});
		});
    }
	
    if($('.sub.investors section.investors02').length >= 1){
		$(window).on('load',function(){
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
			datepicker();
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
							if($('.investors-tab-lists .investors-tab-list').eq(liIndex).attr('list-alt') == '회사정보'){
								if($('.brand-tab'.length >= 1)){
									var brandBtnsSwiper = new Swiper('.brand-tab.swiper-container', {
									  slidesPerView: 'auto',
									  loop: false,
									  speed: 600,
									});
								}
								if($('.circulation-tab'.length >= 1)){
									var circulationBtnsSwiper = new Swiper('.circulation-tab.swiper-container', {
									  slidesPerView: 'auto',
									  loop: false,
									  speed: 600,
									});
								}
							}
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
							financialGrapeData();
						}
					});
				});
			}
			if($('.company-subtitle').length >= 1){
				$('.company-subtitle').on('click',function(){ 
					var thisArea = $(this);
					var wrapArea = thisArea.parent();
					if(!$(this).hasClass('closed')){
						$(this).addClass('closed');
						wrapArea.find('.toggle-area').stop().slideUp();
					}else{
						$(this).removeClass('closed');
						wrapArea.find('.toggle-area').stop().slideDown();
					}
				});
			}
		});
			
			//스크롤바 progress 기능 추가
		 $(window).on('load',function(){
			if($('.left-progress-area').length >= 1){
				var wrapWidth = $('.investors .investors02').width();
				$('.left-progress-area').each(function(){
					var leftProgressbarArea = $(this),
					 leftProgressbar = leftProgressbarArea.find('.left-progress'),
					 progressbar = leftProgressbarArea.find('.progress'),
					 progressContainer = progressbar.find('.progress-container'),
					 progressbarInner = progressbar.find('.left-progress-bar'),
					 scrollLeftProgress = leftProgressbar.scrollLeft(),
					 leftProgresschildWidth = leftProgressbar.children().width(),
					 progressbarInnerWidth = Math.ceil((wrapWidth + scrollLeftProgress)/leftProgresschildWidth * 100);
					 //랜딩시
					 progressbarInner.css('width', progressbarInnerWidth + '%');
					 leftProgressbar.on('scroll',function(){
						 scrollLeftProgress = leftProgressbar.scrollLeft();
						 progressbarInnerWidth = Math.ceil((wrapWidth + scrollLeftProgress)/leftProgresschildWidth * 100);
						 progressbarInner.css('width', progressbarInnerWidth + '%');
					 });
				});
			}	
		 });
		selectBox();
	}
})
$(window).scroll(function(){
    var windowScrollTop = $(window).scrollTop();
    if($('.main').length >= 1){
        scrollCheck(windowScrollTop);
        //메인 스크롤시 그래프 작동
        if(!mainGrapeStart && windowScrollTop >=  $('section.s4').offset().top - $('section.s4').height()){
            mainChart('container');
            mainGrapeStart = true;
            return mainGrapeStart;
        }
        //메인 스크롤시 그래프 작동 끝
    }
});