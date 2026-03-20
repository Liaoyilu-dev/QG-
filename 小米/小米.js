$(function () {
  var index = 0;//标记当前图的索引值
  var timer;
  autoPlay();
  function autoPlay() {
    timer = setInterval(function () {
      index++;
      if (index > $('.ad-img').length) {
        index = 1;
      }
      $('.ad-img').eq(index - 1).css('opacity', 1).siblings('.ad-img').css('opacity', 0);
      $(".botton").eq(index - 1).css("background-color", "#fff").siblings(".botton").css("background-color", "#ccc");
    }, 6000)
  }
  $(".iconfont.icon-arrow-left").click(function () {
    clearInterval(timer);
    index--;
    if (index < 0) {
      index = $('.ad-img').length;
    }
    $('.ad-img').eq(index - 1).css('opacity', 1).siblings('.ad-img').css('opacity', 0);
    $(".botton").eq(index - 1).css("background-color", "#fff").siblings(".botton").css("background-color", "#ccc");
    autoPlay();
  })
  $(".iconfont.icon-arrow-right").click(function () {
    clearInterval(timer);
    index++;
    if (index > $('.ad-img').length) {
      index = 1;
    }
    $('.ad-img').eq(index - 1).css('opacity', 1).siblings('.ad-img').css('opacity', 0);
    $(".botton").eq(index - 1).css("background-color", "#fff").siblings(".botton").css("background-color", "#ccc");
    autoPlay();
  })
  $(".botton").click(function () {
    clearInterval(timer);
    var num = $(this).index();
    index = num;
    $('.ad-img').eq(index).css('opacity', 1).siblings('.ad-img').css('opacity', 0);
    $(".botton").eq(index).css("background-color", "#fff").siblings(".botton").css("background-color", "#ccc");
    autoPlay();
  })
})
