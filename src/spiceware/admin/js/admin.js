$(function(){
	var adminCommon = function(){};
	adminCommon.prototype.init = function(){
		var module;
		
		module = {
			init : function(){
				module.bind();
			},
			bind : function(){
				
				$('.dialogNormal').dialog({
					autoOpen: false,
					width: 570,
					modal: true,
				});
				
				$('.dialogSMS').dialog({
					autoOpen: false,
					width: 380,
					modal: true,
					resizable : false,
					dialogClass : 'dialogSMS'
				});
				
				$('.dialogWinner').dialog({
					autoOpen: false,
					width: 750,
					modal: true,
				});
				
				$('.dialogWide').dialog({
					autoOpen: false,
					width: 950,
					modal: true,
				});
				
				$('.assignWrap:not(.pop)').dialog({
					autoOpen: false,
					width: 1280,
					height : 820,
					modal: true,
				});
				
			},
			
		}
		module.init();
		
	};
	
	var onReady = function(){
		new adminCommon().init();
	};
	
	$(document).ready(onReady);
	
});

function passwordMod(){
	
	$( "#dialog-password" ).dialog({
	      resizable: false,
	      height: "auto",
	      width: 450,
	      title: "비밀번호 변경",
	      modal: true,
	     
	      buttons: {
 
	        "수정": function() {
	        	
	        	fn_mod_password();
	        	
	        },
	        "취소": function() {	        	
	          	 $( this ).dialog( "close" );
	        }
	      }
	    });
}

function passwordUserMod(seq){
	
	$.ajax({
		type : "post",			
		url : "/admin/writeTemplate.do",
		dataType : 'html',
		data: $('form#passFrm').serialize() ,
		
		success : function(data) {
			$("#passwordForm").html(data);

			$( "#dialog-password" ).dialog({
			      resizable: false,
			      height: "auto",
			      width: 450,
			      title: "정보 수정",
			      modal: true,
			     
			      buttons: {

			        "비밀번호변경": function() {
			        	
			        	fn_user_mod_password(seq);
			        	
			        },
			        "저장": function() {
			        	
			        	fn_info_update(seq);
			        	
			        },
			        "취소": function() {	        	
			          	 $( this ).dialog( "close" );
			        }
			      }
			    });
		}
	});
	
//	$( "#dialog-password" ).dialog({
//	      resizable: false,
//	      height: "auto",
//	      width: 450,
//	      title: "정보 수정",
//	      modal: true,
//	     
//	      buttons: {
// 
//	        "비밀번호변경": function() {
//	        	
//	        	fn_user_mod_password(seq);
//	        	
//	        },
//	        "수정": function() {
//	        	
//	        	fn_info_update(seq);
//	        	
//	        },
//	        "취소": function() {	        	
//	          	 $( this ).dialog( "close" );
//	        }
//	      }
//	    });
}


function fn_mod_password(){
	
	
	var returnStr = true;
	
	if ( returnStr && trimNvl( $("#cur_pwd").val() )){
		alert('현재 비밀번호를 입력해주세요.');
		$("#cur_pwd").focus();
		returnStr=false;
	}
	
	if ( returnStr && trimNvl( $("#chg_pwd").val() )){
		alert('변경할 비밀번호를 입력해주세요.');
		$("#chg_pwd").focus();
		returnStr=false;
	}
	
	if ( returnStr && trimNvl( $("#chg_pwd_re").val() )){
		alert('확인 비밀번호를 입력해주세요.');
		$("#chg_pwd_re").focus();
		returnStr=false;
	}
	
	
	if (returnStr && confirm("비밀번호를 변경 하시겠습니까?")){
		
		
		$.ajax({
			type : "post",
			async : true,
			url : "/admin/passwordMod.json",
			data: $('#passFrm').serialize() ,
			
			success : function(data) {
								
				if(data.success){
					
					alert('변경 하였습니다.');
					$("#dialog-password").dialog( "close" );
					
				}else{
					if ( data.message != ""){
						alert(data.message);
					}else{
						alert('저장하는 도중 실패 하였습니다.\n새로 고침 후에 다시 시도해 주세요.');
					}
				}
				
			}
		});
		
		
	}
	
}

function fn_info_update(seq){
	
	
	var returnStr = true;
	
	if(  returnStr  &&  trimNvl( $("#name").val() )){
		alert('이름을 입력해 주십시요');
		$('#name').focus();
		returnStr = false;
	}
	
	
	if (returnStr && confirm("정보 수정 하시겠습니까?")){
		
		document.passFrm.seq.value = seq;
		
		document.passFrm.tel.value = document.passFrm.tel1.value + '-' + document.passFrm.tel2.value + '-' + document.passFrm.tel3.value;
		document.passFrm.cellphone.value = document.passFrm.phone1.value + '-' + document.passFrm.phone2.value + '-' + document.passFrm.phone3.value;
			
		$.ajax({
			type : "post",
			async : true,
			url : "/admin/account/write_proc.json",
			data: $('#passFrm').serialize() ,
			
			success : function(data) {
				
				if(data.success){
					
					alert('변경 하였습니다.');
					$("#dialog-password").dialog( "close" );
					
				}else{
					if ( data.message != ""){
						alert(data.message);
					}else{
						alert('저장하는 도중 실패 하였습니다.\n새로 고침 후에 다시 시도해 주세요.');
					}
				}
				
			}
		});
		
		
	}
	
}



function getHTML(id) {
	return sHTML = oEditors.getById[id].getIR();
	
}

function pwEncode(id, pw) {
	return id +"!!sa@"+ pw;
}