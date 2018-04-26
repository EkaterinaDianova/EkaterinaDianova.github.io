
/*-------------------------------------------------------------------------------
    Back to top button
  -------------------------------------------------------------------------------*/




/*-------------------------------------------------------------------------------
    Review Carousel
  -------------------------------------------------------------------------------*/
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop: true,
  	items: 1,
  	smartSpeed: 700,
  	nav: true,
  	dots: false,
  	navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>'],
  }
  	);

/*-------------------------------------------------------------------------------
    Youtube Player
  -------------------------------------------------------------------------------*/

$(document).on('click','.js-videoPoster',function(e) {
  e.preventDefault();
  var poster = $(this);
  var wrapper = poster.closest('.js-videoWrapper');
  videoPlay(wrapper);
});

function videoPlay(wrapper) {
  var iframe = wrapper.find('.js-videoIframe');
  var src = iframe.data('src');
  wrapper.addClass('videoWrapperActive');
  iframe.attr('src',src);
};

/*-------------------------------------------------------------------------------
    Mobile Menu
  -------------------------------------------------------------------------------*/
$(function () {
  var menu = $(".menu-hidden");
$(".toggle-mnu").click(function() {
  $(this).toggleClass("on");
  menu.toggleClass('menu-active');
});
});

/*-------------------------------------------------------------------------------
    Modal
  -------------------------------------------------------------------------------*/
$("#button-main").magnificPopup();
});


  /*-------------------------------------------------------------------------------
    Blog masonry
  -------------------------------------------------------------------------------*/


$(document).ready(function(){
    var $container = $('.grid');
    $container.isotope({
        filter: '*',
        transitionDuration: 0,
        itemSelector: '.grid-item', 
        percentPosition: true,
        animationOptions: 'best-available',
        masonry: {
           columnWidth: '.grid-sizer'
        }
    });
});

  /*-------------------------------------------------------------------------------
    Filter
  -------------------------------------------------------------------------------*/

$('#filters-blog a').click(function(){
    $('.button-group .is-cheked').removeClass('is-cheked');
    $(this).closest('a').addClass('is-cheked');
    var selector = $(this).attr('data-filter');
    var $container = $('.grid');
      $container.isotope({ 
        filter: selector,
    });
  return false;
});


$(function() {
  $('.post-wrapper').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });
});

/*-------------------------------------------------------------------------------
    Sticky Navbar
  -------------------------------------------------------------------------------*/

$(document).ready(function() {
  $(window).scroll(function() {
    if($(document).scrollTop() > 50) {
      $('#nav').addClass('stick animated slideInDown');
    }
    else {
    $('#nav').removeClass('stick animated slideInDown');
    }
  });
});

/*-------------------------------------------------------------------------------
    Back to top button
  -------------------------------------------------------------------------------*/

$(function() {
  var $btt = $(".scroll-top");
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 20) {
      $btt.fadeIn();
  }
    else {
      $btt.fadeOut();
    }
  });

  $btt.on("click", function (){
    $("html,body").animate({scrollTop:0}, 900)
})
  });


/*-------------------------------------------------------------------------------
   Mouse Icon Animation to section
  -------------------------------------------------------------------------------*/

$(document).ready(function() {
  $(".mouse-icon").click(function() {
    $("html,body").animate({scrollTop: $(".main-header").height() -78}, "slow");
    return false;
  })
});