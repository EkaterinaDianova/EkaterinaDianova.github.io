
/*-------------------------------------------------------------------------------
    Review Carousel
  -------------------------------------------------------------------------------*/
$(document).ready(function(){
  $(".carousel-reviews").owlCarousel({
  	loop: true,
  	items: 1,
  	smartSpeed: 700,
  	nav: true,
  	dots: false,
  	navText: ['<span class="ion-ios-arrow-left"></span>', '<span class="ion-ios-arrow-right"></span>'],
  }
  	);

  /*-------------------------------------------------------------------------------
    About Carousel
  -------------------------------------------------------------------------------*/
$(document).ready(function(){
  $(".about-carousel").owlCarousel({
     loop:true,
     items:1,
     smartSpeed: 700,
     dots: true, 
     nav: false,
  });
});

/*-------------------------------------------------------------------------------
    Youtube Player
  -------------------------------------------------------------------------------*/

$(document).on('click','.videoPlay',function(e) {
  e.preventDefault();
  var poster = $(this);
  var wrapper = poster.closest('.video-foreground');
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
});


  /*-------------------------------------------------------------------------------
    Blog masonry and Portfolio
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


$(document).ready(function(){
    var $container = $('.grid-portfolio');
    $container.isotope({
        filter: '*',
        transitionDuration: 0,
        itemSelector: '.project-item', 
        percentPosition: true,
        animationOptions: 'best-available',
        masonry: {
           columnWidth: '.grid-sizer'
        }
    });
});


  /*-------------------------------------------------------------------------------
    Filter Blog and Portfolio
  -------------------------------------------------------------------------------*/

$('#filters a').click(function(){
    $('.button-group .is-cheked').removeClass('is-cheked');
    $(this).closest('a').addClass('is-cheked');
    var selector = $(this).attr('data-filter');
    var $container = $('.grid');
      $container.isotope({ 
        filter: selector,
    });
  return false;
});


$('#filters a').click(function(){
    $('.button-group .is-cheked').removeClass('is-cheked');
    $(this).closest('a').addClass('is-cheked');
    var selector = $(this).attr('data-filter');
    var $container = $('.grid-portfolio');
      $container.isotope({ 
        filter: selector,
    });
  return false;
});

/*-------------------------------------------------------------------------------
    Portfolio Item Hover
  -------------------------------------------------------------------------------*/



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

/*-------------------------------------------------------------------------------
   Ajax E-mail Send
  -------------------------------------------------------------------------------*/

  $(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#call-form').validator();


    // when the form is submitted
    $('#call-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "mail.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#call-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#call-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});