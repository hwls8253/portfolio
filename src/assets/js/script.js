function menu(){
  $('.menu-btn').toggleClass('close-btn');
  $('.menu-wrap').toggleClass('on');
  $('.menu-wrap nav li').hover(function(){
    $(this).addClass('hover').siblings('li').removeClass('hover');
  });
}

function contact(){
  $('.contact-box').toggleClass('open');
}
function closeBtn(){
  $('.contact-box').removeClass('open');
  
  $('.contact-box').click(function(e){
    if (!$(e.target).closest('.box').length) {
      $(".contact-box").removeClass("open");
    }
  });
}
function skillEffect(){
  $('.bar-wrap span').each(function(){
    var percent = $(this).text();
    $(this).css('width',percent + '%');
  });
}

// $(function(){
// })