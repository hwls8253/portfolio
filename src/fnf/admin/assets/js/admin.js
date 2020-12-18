
var regExpCnt = 0;
var regExpNM = /^[가-힣|a-z|A-Z|\s]/;	// 이름 유효성 체크. \s 가 공백  한글, 숫자, 영문 가능	
var regExpEM = /^[0-9a-zA-Z]([\-.\w]*[0-9a-zA-Z\-_+])*@([0-9a-zA-Z][\-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9}$/;			// 이메일 유효성 체크
var regExp1 = /^\S+$/;			//공백체크
var regExp2 = /[a-z]/;			//알파벳 소문자 체크
var regExp3 = /[A-Z]/;			//알파벳 대문자 체크
var regExp4 = /\d/;				//숫자체크
var regExp5 = /[!@#$%]/;		// ID의 특수문자 체크

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

$(document).ready(function(){
	if($('#checkAll').length >= 1){
		$('#checkAll').on('click',function(){
			var tableWrap = $(this).closest('table');
			if($(this).is(":checked")) {
				var tableTr = tableWrap.find('tr');
				tableTr.each(function(){
					var inputTag = $(this).find('td:first-child input');
					inputTag.prop("checked",true);
				});
			}else {
				var tableTr = tableWrap.find('tr');
				tableTr.each(function(){
					var inputTag = $(this).find('td:first-child input');
					inputTag.prop("checked",false);
				});
			}
		});
	}
	if($('#menuRelAllAll').length >= 1){
		$("#menuRelAllAll").on("click", function() {
			if($(this).is(":checked")) {
				$("input[name='menuRel']").prop("checked",true);
				$("input[name='menuRelAll']").prop("checked",true);
			}else {
				$("input[name='menuRel']").prop("checked",false);
				$("input[name='menuRelAll']").prop("checked",false);
			}
		});
		if($('.menuRelAll').length >= 1){
			$(".menuRelAll").each(function(){
				var tdWrap = $(this).closest('td');
				tdWrap.find("input").each(function(){
					if(!$(this).hasClass("menuRelAll")){
						$(this).on("click",function(){
							if(!$(this).is(":checked")){
								$('#menuRelAllAll').prop("checked",false);
								tdWrap.find("input.menuRelAll").prop("checked",false);
							}
						});
					}
				});
				$(this).on("click", function() {
					if($(this).is(":checked")) {
						tdWrap.find("input").prop("checked",true);
						tdWrap.find("input").prop("checked",true);
					}else {
						tdWrap.find("input").prop("checked",false);
						tdWrap.find("input").prop("checked",false);
						if($('#menuRelAllAll').length >= 1 && $('#menuRelAllAll').is(":checked")){
							$('#menuRelAllAll').prop("checked",false);
						}
					}
				});
			});
		}
	}
	var timeoutLimit = 1000 * 60 * 120;		// 120분
	setTimeout(function(){window.location.reload();}, timeoutLimit);
});
