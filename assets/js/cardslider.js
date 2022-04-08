function cardSliderFormat () {

  var splashPadding = $("#splash-card-holder").css('padding-left').slice(0,-2);
  var splashWidth = $("#splash-card-holder").width();
  // var margin = parseInt(splashPadding) + ($(window).width() - splashWidth)/2;
  // var margin = ($(window).width() - splashWidth)/2;
  var shiftLeft = parseInt(splashPadding)+($('body').width() - splashWidth)/2;
  var margin = ($('body').width() - splashWidth)/2;


  $("#sideprojects").css({
    // 'width': (splashWidth + 'px')
    'width': ($('body').width() +'px'),
    'padding-left' : ((margin) + "px"),
    'padding-right' : ((margin) + "px"),
    'left' : (-1*shiftLeft + 'px')


  });
  // console.log("Splsh wifth:" + splashWidth);
  //
  // console.log("Card Width: " + $("#sideprojects").width());
  // console.log("Body Width: " + $('body').width());
  // console.log("Margin Width: " + margin);
}


$(document).ready(cardSliderFormat());
$(window).resize(cardSliderFormat());


const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
  document.getElementById('sideprojects').scrollLeft += (315+2);
};
buttonLeft.onclick = function () {
  document.getElementById('sideprojects').scrollLeft -= (315+2);
};






document.getElementById('sideprojects').onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
