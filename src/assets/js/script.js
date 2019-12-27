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
// $(function(){
// })