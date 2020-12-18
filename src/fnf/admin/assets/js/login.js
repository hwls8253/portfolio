
		function pw_search() {
			$(".pw_search").fadeIn('slow', function(){$(this).addClass("on")});
			$(".dim_all").addClass("on");
		}

		function pw_change() {
			$(".pw_change").fadeIn('slow', function(){$(this).addClass("on")});
			$(".dim_all").addClass("on");
		}

		function pop_close() {
			$(".pop").fadeOut('fast', function(){$(this).find("input").val("");$(this).removeClass("on")});
			$(".dim_all").removeClass("on");
		}

		// check login
		function checkval() {
			var oR=document.mform;

			if (trim(oR.fid.value) == "" ) {
				alert('아이디를 입력하세요.');
				oR.fid.value = '';
				oR.fid.focus();
				return;
			}
			if (trim(oR.fpass.value) == "") {
				alert('비밀번호를 입력하세요.');
				oR.fpass.value = '';
				oR.fpass.focus();
				return;
			}

			oR.target = "xframes";
			oR.submit();
		}

		//check find password
		function checkReval() {
			var oR=document.sform;

			if (trim(oR.sid.value) == "" ) {
				alert('아이디를 입력하세요.');
				oR.sid.value = '';
				oR.sid.focus();
				return;
			}

			if(!regExpEM.test(oR.sem.value)){
				alert("이메일형식에 맞지 않습니다. 다시 입력해 주십시오.");
				oR.sem.focus();
				return;
			}

			oR.target = "xframes";
			oR.submit();
		}

		function chkNull(varObj, varIdx, varObj2){			
			if(trim(varObj).length > 0) {				
				if (varIdx==2){
					if(varObj.value != varObj2.value) {$(".chk").eq(varIdx).html("<span>*</span>입력하신 비밀번호와 일치하지 않습니다.");}
					else{$(".chk").eq(varIdx).html("");}
				}else{$(".chk").eq(varIdx).html("");}
			}
		}

		//check change password
		function checkChval() {
			var oR=document.pform;
			var ppass_old = oR.ppass_old.value;
			var ppass_new = oR.ppass_new.value;
			var ppass_new_cf = oR.ppass_new_cf.value;

			$(".chk1").text("");$(".chk2").text("");$(".chk3").text("");

			if (trim(ppass_old) == "" ) {
				// alert('기존PW를 입력해 주세요.');
				$(".chk1").html("<span>*</span>기존PW를 입력해 주세요.");
				oR.ppass_old.value = "";
				oR.ppass_old.focus();
				return;
			}

			if (trim(ppass_new) == "" ) {
				// alert('신규PW를 입력해 주세요.');
				$(".chk2").html("<span>*</span>신규PW를 입력해 주세요.");
				oR.ppass_new.value = '';
				oR.ppass_new_cf.value = '';
				oR.ppass_new.focus();
				return;
			}

			if (trim(ppass_new_cf) == "" ) {
				// alert('신규PW를 확인을 입력해 주세요.');
				$(".chk3").html("<span>*</span>신규PW를 확인을 입력해 주세요.");
				oR.ppass_new_cf.value = '';
				oR.ppass_new_cf.focus();
				return;
			}

			if (trim(ppass_new.length) < 10 || trim(ppass_new.length) > 15 ) {
				// alert('비밀번호는 10~15자 이내 영문, 숫자, 기호(!@#$%) 2가지 이상 조합으로 입력해 주세요.');
				$(".chk2").html("<span>*</span>10~15자 이내 영문, 숫자, 기호(!@#$%) 2가지 이상 조합으로 입력해 주세요.");
				oR.ppass_new.value = '';
				oR.ppass_new.focus();
				return;
			}

			if(!regExp1.test(ppass_new)) {
				// alert("비밀번호에 공백이 있으면 안됩니다.");
				$(".chk2").html("<span>*</span>비밀번호에 공백이 있으면 안됩니다.");
				oR.ppass_new.value = '';
				oR.ppass_new_cf.value = '';
				oR.ppass_new.focus();
				return;
			}
	
			if(ppass_new != ppass_new_cf){
				// alert("입력하신 비밀번호와 일치하지 않습니다.");
				$(".chk3").html("<span>*</span>입력하신 비밀번호와 일치하지 않습니다.");
				oR.ppass_new_cf.value = '';
				oR.ppass_new_cf.focus();
				return false;
			}

			// 영숫자기호 체크
			regExpCnt = 0;
			if(regExp2.test(ppass_new) || regExp3.test(ppass_new)) regExpCnt++;
			if(regExp4.test(ppass_new)) regExpCnt++;
			if(regExp5.test(ppass_new)) regExpCnt++;

			if(regExpCnt < 2) {
				// alert("비밀번호는 10~15자 이내 영문, 숫자, 기호(!@#$%) 2가지 이상 조합으로 입력해 주세요.");
				$(".chk2").html("<span>*</span>10~15자 이내 영문, 숫자, 기호(!@#$%) 2가지 이상 조합으로 입력해 주세요.");
				return false;
			}

			oR.target = "xframes";
			oR.submit();
		}

		$(document).ready(function(){
			document.mform.fid.focus();
		})