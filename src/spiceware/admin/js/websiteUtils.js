$(function(){

	 try{
		 $('input.date').datepicker({
			 	showMonthAfterYear: true, 
				prevText: '이전달',
				nextText: '다음달',
				monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
				dayNamesMin:["일","월","화","수","목","금","토"],
				dateFormat:"yy-mm-dd",
				changeMonth: true,
				changeYear: true,
				showButtonPanel: true,
/*				showOn: "button",
				buttonImage: "images/calendar.gif",
				buttonImageOnly: true,	*/			
				currentText: '오늘 날짜' ,
				closeText: '닫기'

		});
	 }catch(e){}
	 
	 try{
		 $('input.dateImg').datepicker({
			 	showMonthAfterYear: true,
				prevText: '이전달',
				nextText: '다음달',
				monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
				dayNamesMin:["일","월","화","수","목","금","토"],
				dateFormat:"yy-mm-dd",
				changeMonth: true,
				changeYear: true,
				showButtonPanel: true,
				showOn: "both",
				buttonImage: "../../images/ico/ico_wh23_calendar_g.png",
				buttonImageOnly: true,			
				currentText: '오늘 날짜' ,
				closeText: '닫기'
	
		});
	}catch(e){}
	
	try{
		$('input.datetime').appendDtpicker({
			"autodateOnStart": false,
			"locale": "foo",
			minDate : new Date(),
			"externalLocale": {
				foo: {
					days: ["일","월","화","수","목","금","토"],
					months: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
					sep: '.',
					format: 'YYYY.MM.DD hh:mm',
					prevMonth: 'Foo',
					nextMonth: 'Bar',
					today: 'Foobar',
					closeButton:true
				}
			}
		});
		
	}catch(e){}
	
});

/** 
 * 익스 6,7,8 console
 * 
 */
if( window.console == undefined ) { 
	console = {    
		log:function(){},
	    warn:function(){},
	    error:function(){}
	}; 
}
/**
 * 익스 6,7,8 trim 
 */
if(typeof String.prototype.trim !== 'function') {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, ''); 
	}
}

var website = website || {};

website.array = function () {
	// 의존 관계 선언 
//	var uobj = MYAPP.utilities.object, 
//	ulang = MYAPP.utilities.lang; 
	// 비공개 프로퍼티 
	var array_string = '[object Array]', 
	ops = Object.prototype.toString; 
	// 비공개 메서들
	// ... 
	
	// 필요하다면 일회성 초기화 절차를 실행한다. 
	// ... 
	
	// 공개 API 
	return { 
		inArray : function (needle, haystack) 
		{ 
			for (var i = 0, max = haystack.length; i < max; i += 1) 
			{
				if (haystack[i] === needle) { return true; } 
			} 
		},
		isArray : function (a) { 
			return ops.call(a) === array_string; 
		} // ... 더 필요한 메서드와 프로퍼티를 여기 추가할 수 있다. 
	}
}

var slider = function(){	
	var module, selector;
	module = {
		init : function(){
			module.build();
			$(selector.items).on('click',function(){
				module.open();
			});
			$(selector.target).on('click',function(){
				module.select(this);
			});
			$(selector.q_btn).on('click',function(){
				module.quration();
			});
			/*
			$(selector.q_item).on('click',function(){
				module.q_close();
			});
			*/
		},
		open : function(){
			if( $(selector.wrap).hasClass('expanded') ){
				$(selector.wrap).removeClass('expanded');
			} else {
				$(selector.wrap).addClass('expanded');
			}
		},
		close : function(){
			$(selector.wrap).removeClass('expanded');
		},
		build : function(){
			$(selector.wrap).find('.fullList li').each(function(i , el){
				if( $(el).find('a').hasClass('selected') ){
					$('li.'+$(el).closest('ul').attr('class')).find('a').text( $(el).text() );
				}
			});
		},
		select : function(el){
			var a = $(el).text(),
			s = $(el).closest('ul').attr('class');
			
			$(el).closest('ul').find('a').removeClass('selected');
			$(el).addClass('selected');
			$('li.'+s).find('a').text(a);
			//module.close();
		}
	}
	selector = {
		wrap : '.productSelect',
		items : '.productSelect .selected li a',
		target : '.productSelect .fullList li a',
	}
	module.init();
}

/**
 * file utils
 */
website.fileUtil = function(){
	
	function fn_ListdownFile(atchFileId, fileSn){
		fn_ListdownFileUser(atchFileId, fileSn);
		setTimeout(function(){ window.location.reload(); }, 500);	// 관리자는 현재창 새로고침
	}

	function fn_ListdownFileUser(atchFileId, fileSn){
		window.open("/cmm/FileDown.do?atchFileId="+atchFileId+"&fileSn="+fileSn);
	}

	function fn_file_name(){
		
		var parentDiv = $("input[type=file]").parent();
		if ( typeof( parentDiv.attr("id")) == "undefined"){
			parentDiv = parentDiv.parent();
		}
		
		// 그래도 없으면 한번 더
		if ( typeof( parentDiv.attr("id")) == "undefined"){
			parentDiv = parentDiv.parent();
		}
		
		parentDiv.each(function(){
			var data_name = $(this).attr("id");
			
			$(this).find("input[type=file]").each(function(){
				var thisName = data_name;			
				if ($(this).is(":disabled")){
					//$(this).remove();
				}else{
					$(this).attr("name" , thisName);
				}
			});
		});
		
	}

	//업로드 파일 체크
	function fileExtCheck(file)
	{
		// 첨부 파일 이미지 체크
		if (file.toLowerCase().match(/.(jsp|php|asp|html|perl|exe|bat|sh)$/i)) {  // 이부분의 확장자를 변경하시면 됩니다.
			alert("해당파일은 업로드 할 수 없습니다.");
			return false;
		}else{
			return true;
		}
	}

	//파일 용량체크
	function fileSizeCheck(file){
		var maxSize = 10485760;	
		try{
			var size  = document.getElementById(file).files[0].size;
			if(size > maxSize){
				alert("파일 용량이 10MB 를 초과하였습니다.");
				return false;
			}else{
				return true;
			}
		}catch(e){
			return true;
		}
	}
	
	return { 
		fn_ListdownFile : function (atchFileId, fileSn) 
		{ 
			return fn_ListdownFile(atchFileId, fileSn);
		},
		fn_ListdownFileUser : function (atchFileId, fileSn) 
		{ 
			return fn_ListdownFileUser(atchFileId, fileSn);
		},
		fn_file_name : function () 
		{ 
			return fn_file_name();
		},
		fileExtCheck : function (file) 
		{ 
			return fileExtCheck(file);
		},
		fileSizeCheck : function (file) { 
			return fileSizeCheck(file); 
		} 
	}	
}

/**
 * key event
 */
website.keyUtil = function(){
	function charCount(el){
		 var charCount = el.val().length;
		 try{
			 el.parent().find(".charCount").text(charCount);
		 }catch(e){}
	}

	//글자수 체크
	function getByteLength(input) {
	   var byteLength = 0;
	   for(var inx = 0; inx < input.value.length; inx++) {
	       var oneChar = escape(input.value.charAt(inx));
	       if ( oneChar.length == 1 ) {
	           byteLength ++;
	       } else if (oneChar.indexOf("%u") != -1) {
	           byteLength += 2;
	       } else if (oneChar.indexOf("%") != -1) {
	           byteLength += oneChar.length/3;
	       }
	   }
	   return byteLength;
	}

	function isNUM(){
		var key = event.keyCode;
		if(!(key==8 || key==9 || key==13 || key==46 || key==144 || (key>=48 && key<=57) || key==110 || key==190)){
			alert('숫자만 입력가능합니다');
			event.returnValue=false;
			try{ event.target.value = ""; }catch(e){}
		}
	}

	function hanNum(obj) {
		var pattern = /[^(a-zA-Z)]/; //영문만 허용
		if (!pattern.test(obj.value)) {
			//alert("한글만 허용합니다.");
			obj.value = '';
			obj.focus();
			return false;
		}
	}

	function han(obj) {
		var pattern = /[^(ㄱ-힣)]/; //한글만 허용 할때
		if (pattern.test(obj.value)) {
			//alert("한글만 허용합니다.");
			obj.value = '';
			obj.focus();
			return false;
		}
	}
	
	function eng(obj) {
		var pattern = /[^(a-zA-Z)]/; //영문만 허용
		if (pattern.test(obj.value)) {
			alert("영문만 허용합니다.");
			obj.value = '';
			obj.focus();
			return false;
		}
	}
	
	function all(obj) {
		var pattern = /[^(ㄱ-힣a-zA-Z0-9)]/; //한글,영문,숫자만 허용
		if (pattern.test(document.getElementById('name').value)) {
			alert("한글,영문,숫자만 허용합니다.");
			obj.value = '';
			obj.focus();
			return false;
		}
	}
	/* 한글입력 방지 */
	function fn_press_han(obj)
	{
	   //좌우 방향키, 백스페이스, 딜리트, 탭키에 대한 예외
	   if(event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39
	   || event.keyCode == 46 ) return;
	   //obj.value = obj.value.replace(/[\a-zㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
	   obj.value = obj.value.replace(/[\ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
	}

	return { 
		charCount : function (el) 
		{ 
			return charCount(el);
		},
		getByteLength : function (input) 
		{ 
			return getByteLength(input);
		},
		isNUM : function () 
		{ 
			return isNUM();
		},
		hanNum : function (obj) 
		{ 
			return hanNum(obj);
		},
		han : function (obj) 
		{ 
			return han(obj);
		},
		eng : function (obj) 
		{ 
			return eng(obj);
		},
		all : function (obj) 
		{ 
			return all(obj);
		},
		fn_press_han : function (obj) { 
			return fn_press_han(obj); 
		} 
	}
}

/**
 * dataFormat 
 */
website.dataUtil = function(){
	function replaceAll(StringData,oldString , newString){
		return StringData.split(oldString ).join(newString);
	}

	//jstl data 형태를 json str 로 만듬
	function dataJsonStr(data){
		return replaceAll(replaceAll(replaceAll(replaceAll(replaceAll(data, "=", "\":\""  ) , ", ", "\",\""  ) , "}" , "\"}" ), "{" , "{\"")  , "null" , "" );	
	}

	// jstl data 형태를 json object로 만듬
	function dataJsonObject(data){
		return JSON.parse( dataJsonStr(data));
	}
	
	return { 
		replaceAll : function (StringData,oldString,newString) 
		{ 
			return replaceAll(StringData,oldString,newString);
		},
		dataJsonStr : function (cookieName) 
		{ 
			return dataJsonStr(data);
		},
		dataJsonObject : function (data) { 
			return dataJsonObject(data); 
		} 
	}	
}


/**
 * 쿠기유틸
 */
website.cookieUtil = function(){

	function setCookie(cookieName, value, exdays){
	    var exdate = new Date();
	    exdate.setDate(exdate.getDate() + exdays);
	    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString() ) + "; path=/";
	    document.cookie = cookieName + "=" + cookieValue;
	}

	function deleteCookie(cookieName){
	    var expireDate = new Date();
	    expireDate.setDate(expireDate.getDate() - 1);
	    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
	}
	 
	function getCookie(cookieName) {
	    cookieName = cookieName + '=';
	    var cookieData = document.cookie;
	    var start = cookieData.indexOf(cookieName);
	    var cookieValue = '';
	    if(start != -1){
	        start += cookieName.length;
	        var end = cookieData.indexOf(';', start);
	        if(end == -1)end = cookieData.length;
	        cookieValue = cookieData.substring(start, end);
	    		}
	    return unescape(cookieValue);
	}
	
	return { 
		setCookie : function (cookieName, value, exdays) 
		{ 
			return setCookie(cookieName, value, exdays);
		},
		deleteCookie : function (cookieName) 
		{ 
			return deleteCookie(cookieName);
		},
		getCookie : function (cookieName) { 
			return getCookie(cookieName); 
		} 
	}	
}

/**
 * 날짜유틸
 */
website.dateUtil = function(){
	/**
	 * 오늘 날짜 
	 */
	function curDate() {
		var today = new Date();
		var day;
		var mon;
		if (today.getDate()<10)
			day = '0' + today.getDate();
		else 
			day = today.getDate();
		mon = today.getMonth()+1;
		if ( mon <10)
			mon = '0' + mon;	
		return today.getFullYear() + '-' + (mon) + '-' + day;

	}
	/**
	 * 날짜 더하기
	 */
	function addDate(month, days) {
		var today = new Date();
		var day = today.getDate();
		var mon;
		var addmonth=1;
		var addday=0;
		day+=days;
		var result = new Date(today.getFullYear() , (today.getMonth()+month) , day);
		
		if (result.getDate()<10)
			day = '0' + result.getDate();
		else 
			day = result.getDate();
		mon = result.getMonth()+addmonth;
		if ( mon <10)
			mon = '0' + mon;
		return result.getFullYear() + '-' + (mon) + '-' + day;
	}

	return { 
		curDate : function () 
		{ 
			return curDate();
		},
		addDate : function (month, days) { 
			return addDate(month, days); 
		} 
	}	
}


/**
 * 콤마찍기 / 콤마삭제
 */
website.commas = function(){
	
	function comma(str) {
	    str = String(str);
	    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
	}

	function uncomma(str) {
	    str = String(str);
	    return str.replace(/[^\d]+/g, '');
	}

	return { 
		comma : function (str) 
		{ 
			return comma(str);
		},
		uncomma : function (str) { 
			return uncomma(str); 
		} 
	}
}

/**
 * Form 유틸
 */
website.formUtils = function(){
	function clearForm(str) {
		
		$("#"+str).find('input').each(function(){
			
			$(this).val("");
			
			if ( $(this).attr('type') == "checkbox" ){ // 체크박스	
				 $(this).attr('checked' , false);
			}		
		});
		 // select 초기화
		$("#"+str).find('select').each(function(){
			
			$(this).find('option').each(function(index){						 	
				if ( index == 0){
					//$(this).attr("selected", "selected");
					$(this).prop("selected","selected");
				}else{
					//$(this).attr("selected", false);
					$(this).prop("selected",false);
				}
			});
			$('.selectbox').click();
		});
	}

	return { 
		clearForm : function (str) 
		{ 
			return clearForm(str);
		}
	}	
}

/**
 * 기본 유틸
 */
website.defaultUtils = function(){
	/**
	 * 특수문자 디코딩
	 */
	function htmlEntityDec(str){
		if(str == "" || str == null){
	        return str;
	    }
	    else{
	        return str.replace(/&amp;/gi, "&").replace(/&#35;/gi, "#").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, "'").replace(/&#39;/gi, '\\').replace(/&#37;/gi, '%').replace(/&#40;/gi, '(').replace(/&#41;/gi, ')').replace(/&#43;/gi, '+').replace(/&#47;/gi, '/').replace(/&#46;/gi, '.').replace(/&#59;/g, ";");
	    }
	}
	/**
	 * undefinded 공백 처리
	 */
	function empty(data){
		var str
		if(typeof(data) == 'undefined' || data === null){
			str = "";
		}else{
			str = data;
		}
		return str
	}
	
	/**
	 * 모바일인가
	 */
	function isMobile(){
		var returnStr = false;
		if(navigator.userAgent.match(/Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)){
			returnStr = true;
		}
		return returnStr;
	}

	/**
	 * 안드로이드인가
	 */
	function isAndroid() {
	    var mobileKeyWords = new Array( 'Android');
	    for (var info in mobileKeyWords) {
	        if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
	            return true;
	        }
	    }
	    return false;
	}
	

	return { 
		htmlEntityDec : function (str) 
		{ 
			return htmlEntityDec(str);
		},
		empty : function (data) { 
			return empty(data); 
		},
		isMobile : function () { 
			return isMobile(); 
		},
		isAndroid : function () { 
			return isAndroid(); 
		} 		
	}	
}


/**
 * 길이만큼 0을 왼쪽에 붙힘
 */
website.Lpad = function(str, len) { 
	str = str + ""; 
		while(str.length < len) { 
			str = "0"+str; 
		} 
	return str; 
} 

/**
 * 값 유효성 체크
 */
website.trimNvl = function (str){
	var tmp;
	try{
		tmp = str.replace(/(^[\s\xA0]+|[\s\xA0]+$)/g, '');
	}catch(e){
		tmp = str;
	}

	if ( tmp == "" ) {
		return true;
	}else{
		return false;
	}
}