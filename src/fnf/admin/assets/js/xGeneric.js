/*=============================================================================================================================
'CODE : 모션아이
'PAGE : /kr/yk/xScoPublic/xFunction/xJsv/xGeneric.js.asp
'DATE : 2019. 09
'DESC : 자바스크립트 일반함수 모음
'============================================================================================================================*/

//Upload Progress Indicator
function xSA_ProgressIndicator(xProgID, obj, mOpt, Act, Tag){
	try{
		var WinPopStyle = "dialogWidth:441px;dialogHeight:186px";
		var yAct = Act + "?xUpProgID=" + xProgID;

		showModelessDialog("/kr/yk/xScoPublic/xFunction/xApg/xSAProgress.asp?xUpProgID=" + xProgID, window, WinPopStyle);
	}
	catch(e){}

    goSubmit(obj, mOpt, yAct, Tag);
}

//첨부파일의 여부를 확인해서 프로그래스 창을 띄운다
function goUpClipFile(xProgID, oR, mOpt, Act, Tag){
	if(goChkClipCnt() == 0){
		goSubmit(oR, mOpt, Act, Tag);
	}
	else{
		xSA_ProgressIndicator(xProgID, oR, mOpt, Act, Tag);
	}
}

//삭제버튼 클릭시 플래그 변경
function goUpClipState(obj, xClipState){
	var parObj = obj.parentNode;
	var chaObj = parObj.childNodes;
	var InpObj
	var SpnObj
	var InpVobj

	for(x=0;x<chaObj.length;x++){
		if(chaObj[x].nodeName == "INPUT" && chaObj[x].id == "yUpStateFlagID"){
			InpObj = chaObj[x];
		}

		if(chaObj[x].nodeName == "INPUT" && chaObj[x].id == "xUpRObjectID"){
			InpVobj = chaObj[x];
		}

		if(chaObj[x].nodeName == "SPAN"){
			SpnObj = chaObj[x];
		}
	}

	if(InpObj.value == "D"){
		InpObj.value = xClipState;
		SpnObj.style.textDecoration = "none";
	}
	else{
		if(InpVobj.value == ""){
			InpObj.value = "D";
			SpnObj.style.textDecoration = "line-through";
		}
	}
}

//첨부파일 상태 변환
function goUpClipState2(obj, xClipState){
	goUpClipState(obj, xClipState);
}


//첨부파일이 있는지 여부를 반환
function goChkClipCnt(){
	var nClipSecUL = document.getElementById("ClipFileSec")
	var vClipCnt = 0;
	for(x=0;x<nClipSecUL.childNodes.length;x++){
		for(y=0;y<nClipSecUL.childNodes[x].childNodes.length;y++){
			if(nClipSecUL.childNodes[x].childNodes[y].nodeName == "INPUT" && nClipSecUL.childNodes[x].childNodes[y].id == "xUpRObjectID"){
				if(nClipSecUL.childNodes[x].childNodes[y].value != ""){
					vClipCnt++;
				}
			}
		}
	}
	return vClipCnt;
}

//Fck Editor 폼 입력여부
function xformFCKArea(obj){
    var xRtnMemoSet = true;
    var xMemo = obj.GetXHTML();

    if(xMemo == ""){
        xRtnMemoSet = false;
    }
    return xRtnMemoSet;
}


//글삭제
function goDel(oR, mOpt, Act){
	if(confirm("삭제하시겠습니까?") == true){
		goSubmit(oR, mOpt, Act, "_self");
	}
	else{
		return;
	}
}

//사용자 데이터 없는경우 읽기를 제외한 쓰기 수정 삭제 권한 제한
function goPermitAlert(){
	alert("쓰기, 수정, 삭제는 등록된 회원에 한해서 허용되어있습니다. 사이트 담당자에게 문의하세요.");
	return;
}

//게시판 정렬
function goOrder(obj, url){
	var objVal = obj.options[obj.selectedIndex].value;
	if(objVal == ""){
		location.href = url
	}
	else{
	    if(url.indexOf("?") != -1){
	        location.href = url + "&KeyOrder=" + objVal;
	    }
	    else{
	        location.href = url + "?KeyOrder=" + objVal;
	    }
	}
}

//게시판 검색
function goSearch(oR, objR, objF, objW, url){
	var objRVal
	var objFVal = objF.options[objF.selectedIndex].value;
	var objWVal = objW.value;


	if(objR == null){
		objRVal = null
	}
	else{
		objRVal = objR.options[objR.selectedIndex].value;
	}


	if(objWVal == ""){
		alert("검색어를 입력해 주세요.");
		objW.focus();
		return;
	}
	
	goSubmit(oR, false, url, "_self");
}



//게시판 검색
function goSearchSub(oR, objR, objF, objW, url){
	var objRVal
	var objFVal = objF.options[objF.selectedIndex].value;
	var objWVal = objW.value;


	if(objR == null){
		objRVal = null
	}
	else{
		objRVal = objR.options[objR.selectedIndex].value;
	}


	if(objWVal == ""){
		alert("검색어를 입력해 주세요.");
		objW.focus();
		return;
	} 
	
	goSubmit(oR, false, url, "_self");
}

// 관리자: 게시판 검색
function goSearchBBS(oR, objR, objR2, objF, objW, url){
	var objRVal
	var objFVal = objF.options[objF.selectedIndex].value;
	var objWVal = objW.value;


	if(objR == null){
		objRVal = null;				
	}
	else{
		objRVal = objR.options[objR.selectedIndex].value;
	}						

	if(objWVal == "" && objRVal==""){
		alert("검색어를 입력해 주세요.");
		objW.focus();
		return;
	} 

	goSubmit(oR, false, url, "_self");
}


//게시판 정렬
function goSorting(objR, objF, objW, url){
	var oR = document.form;
	var objRVal
	var objFVal = objF.options[objF.selectedIndex].value;
	var objWVal = objW.value;
	if(objR == null){
		objRVal = null
	}
	else{
		objRVal = objR.options[objR.selectedIndex].value;
	}

	goSubmit(oR, false, url, "_self");
}

//게시판 전체목록가기
function goSlist(url){
	location.href = url;
}

//달력
function openCal(obj){
	alert(obj)
}

//Submit
function goSubmit(obj, mOpt, Act, Tag){
    var nOpt_Type

    if(mOpt == true){
        //UpLoad
        nOpt_Type = "multipart/form-data";
    }
    else{
        //Normal
        nOpt_Type = "application/x-www-form-urlencoded";
    }

    with(obj){
        action = Act;
        target = Tag;
        encoding = nOpt_Type;
        submit();
    }
}


//KeyEvent
function KeyCont(KeyNum, FocusObj){
	if(window.event.keyCode == KeyNum){
		FocusObj.click();
		return false;
	}
}

//Popup Open
OpnObj = null;

function OpenWin(arUrl, arPN, arLeft, arTop, arWid, arHgt, arScl){

    if(OpnObj == null){
        OpnObj = window.open(arUrl, arPN, "left=" + arLeft + ", top=" + arTop + ", width=" + arWid + ", height=" + arHgt + ", scrollbars=" + arScl + ", resizable=no, toolbar=no");
    }
    else{
        OpnObj.close();
        OpnObj = window.open(arUrl, arPN, "left=" + arLeft + ", top=" + arTop + ", width=" + arWid + ", height=" + arHgt + ", scrollbars=" + arScl + ", resizable=no, toolbar=no");
    }

}

//라디오버튼 체크여부확인
function ckRadioBtn(obj, maxLen){
    var RadLen = obj.length;
    var CkLen = 0;

    for(y=0;y<RadLen;y++){
        if(obj[y].checked == true){
            CkLen++;
        }
    }

    if(CkLen > maxLen || CkLen == 0){
        return false;
    }
    else{
        return true;
    }
}

//숫자만 허용
function ValidCheck_OnlyNum(Obj){
	var Str_Val = Obj.value;
	var Count = 0;
	var LoopX

	if(Obj.value != ""){
		for(LoopX = 0;LoopX < Str_Val.length;LoopX++){
			if(Str_Val.charAt(LoopX) < "0" || Str_Val.charAt(LoopX) > "9"){
				Count++
			}
		}
		if(Count > 0){
			return false;
		}
		else{
			return true;
		}
	}
	else{
		return false;
	}

}

//영문자만 허용
function ValidCheck_OnlyEng(Obj){
	var Str_Val = Obj.value;
	var Count = 0;
	var LoopX

    if(Obj.value != ""){
	    for(LoopX = 0;LoopX < Str_Val.length;LoopX++){
		    if(Str_Val.charAt(LoopX) < "A" || Str_Val.charAt(LoopX) > "z"){
			    Count++
		    }
	    }

	    if(Count > 0){
		    return false;
	    }
	    else{
		    return true;
	    }
	}
	else{
		return false;
	}
}

//영문자 + 숫자만 허용
function ValidCheck_OnlyNumEng(Obj){
    var Str_Val = Obj.value;
    var Count = 0;
    var LoopX

    if(Obj.value != ""){
        for(LoopX = 0;LoopX < Str_Val.length;LoopX++){
            if(!((Str_Val.charAt(LoopX) >= "0" && Str_Val.charAt(LoopX) <= "9") || (Str_Val.charAt(LoopX) >= "a" && Str_Val.charAt(LoopX) <= "z") || (Str_Val.charAt(LoopX) >= "A" && Str_Val.charAt(LoopX) <= "Z"))){
			    Count++
		    }
        }

        if(Count > 0){
	        return false;
        }
        else{
	        return true;
        }
    }
    else{
	    return false;
    }
}

//문자길이 체크
function ValidCheck_Len(Obj, MaxNum){
    var ObjLen = Obj.value.length;

    if(ObjLen < MaxNum){
        return false;
    }
    else{
        return true;
    }
}


//글자수 제한
function CH_StrByte(EvtObj,arMaxLen, xVobj){
	var EvtObjVal = EvtObj.value;
	var EvtObjVal_Len = EvtObjVal.length;
	var MaxLen = arMaxLen;
	var StrByteLen = 0;
	var StrSubStr = 0;
	var StrOneChar = "";
	var StrSubSen = "";

	//한글자씩 체크
	for(yr=0;yr<EvtObjVal_Len;yr++){
		StrOneChar = EvtObjVal.charAt(yr);
		if(escape(StrOneChar).length > 4){
			//한글인경우
			StrByteLen += 2;
		}
		else{
			//그외의 경우
			StrByteLen++;
		}

		if(StrByteLen <= MaxLen){
			StrSubStr = yr + 1;
		}
	}

	//전체길이 비교
	if(StrByteLen > MaxLen){
		// alert(MaxLen + " byte이상 입력할 수 없습니다.");
		alert((MaxLen/2) + " 자 이상 입력할 수 없습니다.");
		StrSubSen = EvtObjVal.substring(0,StrSubStr);
		EvtObj.value = StrSubSen;
		StrByteLen = MaxLen
	}
	xVobj.innerText = StrByteLen;
	EvtObj.focus();
}

//Combo Box Controller(All CheckBox State false)
function CBOX_Btn_Check_Off(Combo_Box){
	for(y=0;y<Combo_Box.length;y++){
		Combo_Box[y].checked = false;
	}
}

//Combo Box Controller(Check Object)
function CBOX_Btn_Check(CBox, offSet){
	var Check_Cnt = 0;

	if(CBox == null){
		alert("선택할 항목이 없습니다.");
		return false;
	}
	else{

		if(CBox.length == undefined){
			if(CBox.checked == false){
				alert("1개이상 선택해주세요.");
				return false;
			}
			else{
				return true;
			}
		}
		else{
			for(x=0;x<CBox.length;x++){
				if(CBox[x].checked == true){
					Check_Cnt++;
				}
			}

			if(offSet == true){
				if(Check_Cnt == 1){
					return true;
				}
				else{
					alert("1개만 선택가능합니다.");
					CBOX_Btn_Check_Off(CBox)
					return false;
				}
			}
			else{
				if(Check_Cnt == 0){
					alert("1개이상 선택해주세요.");
					return false;
				}
				else{
					return true;
				}
			}
		}
	}
}
//글제목의 길이(바이트수) 계산
function SubjectChangStr(ValStr, arMaxLen){

	var EvtObjVal = ValStr.value;
	var EvtObjVal_Len = EvtObjVal.length;
	var MaxLen = arMaxLen;
	var StrByteLen = 0;
	var StrSubStr = 0;
	var StrOneChar = "";
	var StrSubSen = "";

	//한글자씩 체크
	for(yr=0;yr<EvtObjVal_Len;yr++){
		StrOneChar = EvtObjVal.charAt(yr);
		if(escape(StrOneChar).length > 4){
			//한글인경우
			StrByteLen += 2;
		}
		else{
			//그외의 경우
			StrByteLen++;
		}

		if(StrByteLen <= MaxLen){
			StrSubStr = yr + 1;
		}
	}


	//전체길이 비교
	if(StrByteLen > MaxLen){
	    alert("글자제한수(영문:" + arMaxLen + "자, 한글:" + arMaxLen/2 + "자)를 넘었습니다.");
		StrSubSen = EvtObjVal.substring(0,StrSubStr);
		ValStr.value = StrSubSen;
	}
}

//준비중 메뉴
function goReady(){
	alert("준비중입니다.");
}

var cookieStoreID = "cookieStoreID";

//쿠키 가져오기
function getCookie(Name) {
    var search = Name + "=";

    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search)
        if (offset != -1) {
            offset += search.length
            // ';' 문자 이전까지가 쿠키의 내용이다.
            end = document.cookie.indexOf(";", offset)
            // ';'가 없다면 쿠키의 끝까지가 쿠키의 내용이다.
            if (end == -1){
                end = document.cookie.length
            }

            return unescape(document.cookie.substring(offset, end))
        }
        else{
            return ""
        }
     }
}

//쿠키 설정하기
function setCookie (name, value, expires) {
    document.cookie = name + "=" + escape (value) + "; domain=motioneye.co.kr; path=/; expires=" + expires.toGMTString();
}

function SpecStrCheck(ArStr){
    var MsgLen = ArStr.length;
    var OnsStr
    if(ArStr == ""){
        return true;
    }
    else{
        for(v=0;v<MsgLen;v++){
            OnsStr = ArStr.charAt(v);
            if(escape(OnsStr).length == 3 && OnsStr != " " ){
                return false;
            }
        }
        return true;
    }
}
//이미지 경로 추출
function tabImgSrc(obj, xSet){
    var objImg, oRSrc
    var oRSrcCrName, oRSrcCrNameDomain, oRSrcCrNameWithOutDomain, oRSrcFnName, oRSrcFnNameWithOutExt, oRSrcFnNameExt
    var oVSrc
    var x

    objImg = null;
    for(x=0;x<obj.childNodes.length;x++){
        if(obj.childNodes[x].nodeType == 1 && obj.childNodes[x].tagName == "IMG"){
            objImg = obj.childNodes[x];
            break;
        }
    }

    oVSrc = ""
    if(objImg != null){
        oRSrc = objImg.src;
        oRSrcCrName = oRSrc.substring(0, oRSrc.lastIndexOf("/"));
        oRSrcCrNameDomain = oRSrcCrName.substring(oRSrcCrName.lastIndexOf("."), oRSrcCrName.length);
        oRSrcCrNameWithOutDomain = oRSrcCrNameDomain.substring(oRSrcCrNameDomain.indexOf("/"), oRSrcCrNameDomain.length);
        oRSrcFnName = oRSrc.substring(oRSrc.lastIndexOf("/") + 1,oRSrc.length);
        oRSrcFnNameWithOutExt = oRSrcFnName.substring(0, oRSrcFnName.indexOf("."));
        if(xSet == "OV"){
            if(oRSrcFnNameWithOutExt.indexOf("_on") == -1){
                oRSrcFnNameWithOutExt = oRSrcFnNameWithOutExt + "_on";
            }
        }
        else{
            if(oRSrcFnNameWithOutExt.indexOf("_on") != -1){
                oRSrcFnNameWithOutExt = oRSrcFnNameWithOutExt.substring(0, oRSrcFnNameWithOutExt.lastIndexOf("_"));
            }
        }
        oRSrcFnNameExt = oRSrcFnName.substring(oRSrcFnName.indexOf("."), oRSrcFnName.length);

        oVSrc = oRSrcCrNameWithOutDomain + "/" + oRSrcFnNameWithOutExt + oRSrcFnNameExt;
    }
    return [objImg, oVSrc];
}

//Tab버튼 활성화
function tabSelect(obj, Tagobj){
	var objLi = obj.parentNode;
	var objDiv = Tagobj.parentNode;
	var oRSrcArr, oRSrc

	//탭 활성화
	for(x=0;x<objLi.childNodes.length;x++){
		if(objLi.childNodes[x] == obj){
		    if(objLi.childNodes[x].className != ""){
		        if (Tagobj == document.getElementById('tabCeoMessageView')) {
		            objLi.childNodes[x].className = objLi.childNodes[x].className + " on2 ";
		        }else {
		            objLi.childNodes[x].className = objLi.childNodes[x].className + " on ";
		        }
		    }
		    else{
		        if (Tagobj == document.getElementById('tabCeoMessageView')) {
		            objLi.childNodes[x].className = "on2";
		        }else {
		            objLi.childNodes[x].className = "on";
		        }
		    }
			oRSrcArr = tabImgSrc(objLi.childNodes[x], "OV");
		}
		else{
			objLi.childNodes[x].className = "";
			oRSrcArr = tabImgSrc(objLi.childNodes[x], "OU");
		}
		if(oRSrcArr[0] != null){
		    oRSrcArr[0].src = oRSrcArr[1];
		}
	}

	//해당객체 하위객체 모두 안보이게하기
	for(x=0;x<objDiv.childNodes.length;x++){
		if(objDiv.childNodes[x].nodeType == 1){
			objDiv.childNodes[x].style.display = "none";
		}
	}

	//선택된 객체만 보이게하기
	Tagobj.style.display = "block";
}


//스크롤탑 버튼
/* constructor */
/* 인수는 (엘리먼트 id, 초기 top 값, (선택사항) bottom 마진) */
function floatedLayer(eleName, initialTop, bottomLimit) {

	if (!document.getElementById(eleName)) { return; }

	this.ele = document.getElementById(eleName);
	this.initialTop = initialTop;
	this.bottomLimit = (!bottomLimit)? 0 : bottomLimit;
	this.timer = null;
	this.moveLayer();
}

/* class property */
floatedLayer.INTERVAL = 10; /* 동작 간격: (단위: 밀리초(ms)) */
floatedLayer.DEGREE = 5; /* 움직임 정도: (단위: 퍼센트, 0 < 범위 <= 100) */


/* instance method */
floatedLayer.prototype.moveLayer = function () {

	var scrollHeight = 0;

	// 스크롤된 높이 계산 (참고: http://www.howtocreate.co.uk/tutorials/javascript/browserwindow)
	if (document.body && document.body.scrollTop) {
		scrollHeight = document.body.scrollTop;
	} else if (document.documentElement && document.documentElement.scrollTop) {
		scrollHeight = document.documentElement.scrollTop;
	}

	var top = (isNaN(parseInt(this.ele.style.top)))? this.initialTop : parseInt(this.ele.style.top);
	var exactHeight = scrollHeight + this.initialTop;

	var moveHeight = Math.ceil(Math.abs(top - exactHeight) * floatedLayer.DEGREE / 100);

	top = (top > exactHeight)? top - moveHeight : top + moveHeight;

	var documentHeight = document.body.offsetHeight;
	var eleHeight = this.ele.offsetHeight;

	if ((top + eleHeight) >= documentHeight - this.bottomLimit) {
		top = documentHeight - eleHeight - this.bottomLimit;
	}

	this.ele.style.top = top + "px";

	// setTimeout에서 인스턴스 메소드 사용 (참고: http://www.faqts.com/knowledge_base/view.phtml/aid/2311)
	var self = this;
	if (this.timer) {
		window.clearTimeout(this.timer);
	}
	this.timer = window.setTimeout(function () { self.moveLayer(); }, floatedLayer.INTERVAL);
}

window.onload  = function() {
	var eleTop = 162;
	var ele2Top = 182;
	if (document.getElementById("divStayTopLeft")) {
		new floatedLayer("divStayTopLeft", eleTop, 80);
	}
	if (document.getElementById("divQuickMenu")) {
		new floatedLayer("divQuickMenu", ele2Top, 80);
	}
}

//이미지 오버
function menuOn(imgEl) {
	imgEl.src = imgEl.src.replace(".gif", "_ov.gif");
}

function menuOut(imgEl) {
	imgEl.src = imgEl.src.replace("_ov.gif", ".gif");
}

function xStartPageSet(objUrl){
    var aObj = document.getElementById('xSpageIn');
    aObj.style.behavior='url(#default#homepage)';aObj.setHomePage(objUrl);
}

function encodeURL(str){

	var s0, i, s, u;
	s0 = "";                // encoded str
	for (i = 0; i < str.length; i++){   // scan the source
		s = str.charAt(i);
		u = str.charCodeAt(i);          // get unicode of the char
		if (s == " "){
			s0 += "+";
		}       // SP should be converted to "+"
		else {
			if ( u == 0x2a || u == 0x2d || u == 0x2e || u == 0x5f || ((u >= 0x30) && (u <= 0x39)) || ((u >= 0x41) && (u <= 0x5a)) || ((u >= 0x61) && (u <= 0x7a))){       // check for escape
			s0 = s0 + s;            // don't escape
			}
			else {                  // escape
				if ((u >= 0x0) && (u <= 0x7f)){     // single byte format
					s = "0"+u.toString(16);
					s0 += "%"+ s.substr(s.length-2);
				}
				else if (u > 0x1fffff){     // quaternary byte format (extended)
					s0 += "%" + (oxf0 + ((u & 0x1c0000) >> 18)).toString(16);
					s0 += "%" + (0x80 + ((u & 0x3f000) >> 12)).toString(16);
					s0 += "%" + (0x80 + ((u & 0xfc0) >> 6)).toString(16);
					s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
				}
				else if (u > 0x7ff){        // triple byte format
					s0 += "%" + (0xe0 + ((u & 0xf000) >> 12)).toString(16);
					s0 += "%" + (0x80 + ((u & 0xfc0) >> 6)).toString(16);
					s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
				}
				else {                      // double byte format
					s0 += "%" + (0xc0 + ((u & 0x7c0) >> 6)).toString(16);
					s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
				}
			}
		}
	}
	return s0;
}

//게시판 검색
function goSearch2(oR, objR, objF, objW, url){
	var objRVal
	var objFVal = objF.options[objF.selectedIndex].value;
	var objWVal = objW.value;


	if(objR == null){
		objRVal = null
	}
	else{
		objRVal = objR.options[objR.selectedIndex].value;
	}


	if(objWVal == ""){
		alert("검색어를 입력해주세요.");
		objW.focus();
		return;
	}

	goSubmit(oR, false, url, "_self");
}

String.prototype.comma = function() {
    var tmp = this.split('.');

    var minus = false;
    var str = new Array();

    if(tmp[0].indexOf('-') >= 0) {
        minus = true;
        tmp[0] = tmp[0].substring(1, tmp[0].length);
    }

    var v = tmp[0].replace(/,/gi,'');
    for(var i=0; i<=v.length; i++) {
        str[str.length] = v.charAt(v.length-i);
        if(i%3==0 && i!=0 && i!=v.length) {
            str[str.length] = '.';
        }
    }
    str = str.reverse().join('').replace(/\./gi,',');
    if(minus) str = '-' + str;

    return (tmp.length==2) ? str + '.' + tmp[1] : str;
}

function onlyNum(obj) {
    var val = obj.value;
    var re = /[^0-9\,]/gi;
    obj.value = val.replace(re, '');
}

function goCommaRemv(str) {
	return str.split(',').join("");
}

function showMask(callback){
	$("body").append("<div id='mask'></div>");
	$("#mask").height($(document).height()).animate( {  "opacity": "0.3" }, 200, 'easeInOutCubic', function(){
		callback();
	});
}
function hideMask(){
	$("#mask").height($(document).height()).animate( {  "opacity": "0" }, 200, 'easeInOutCubic', function(){
		$("#mask").remove();
	});
}

//브라우져 구별함수
function jXrBrowserDis(){
	var xBrowStr = navigator.userAgent.toLowerCase();
    var xBrowName = "ET";

	// console.log(xBrowStr);

	//Internet Explorer 버전 차이때문에 다시 분류
    if(xBrowStr.indexOf("msie") != -1) {
		if(xBrowStr.indexOf("msie 10") != -1 || xBrowStr.indexOf("msie 9") != -1) {
			xBrowName = "FF"
		}else {
			xBrowName = "IE"
		}
	}
    if(xBrowStr.indexOf("firefox") != -1) xBrowName = "FF"              //FireFox
    
    return xBrowName;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//키 이벤트객체 반환 함수
function jXrKeyEvent(ixEv){
    var iQBrowser = jXrBrowserDis();
    var iQEvtObj
    
	// console.log(":::"+iQBrowser);
    if(iQBrowser == "IE"){
        iQEvtObj = window.event.keyCode;
    }
    else{
        iQEvtObj = ixEv.which
    }

    return iQEvtObj;
}

//키 이벤트번호에 따른 함수 호출(Overload)
function jXrKeyAction(ixEv, ixKeyNumber, ixFuncName){
    var iQKeyEvt = jXrKeyEvent(ixEv);
    if(iQKeyEvt == ixKeyNumber){
        ixFuncName;
    }
}

//키 이벤트번호에 따른 지정객체 클릭(Overload)
function jXrKeyAction(ixEv, ixKeyNumber, ixObj){
    var iQKeyEvt = jXrKeyEvent(ixEv);
	
    if(iQKeyEvt == ixKeyNumber){
		// console.log(ixObj);
        ixObj.click();
        return;
    }
}

function ltrim(str) {
	var s = new String(str);
	if (s.substr(0,1) == " ") {
		return ltrim(s.substr(1));
	}else {
		return s;
	}
}

function rtrim(str) {
	var s = new String(str);
	if(s.substr(s.length-1,1) == " ") {
		return rtrim(s.substring(0, s.length-1))
	}else {
		return s;
	}
}

function trim(str) {
	return ltrim(rtrim(str));
}