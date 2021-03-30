jQuery(function ($) {


  function onScroll(event){
			//add class active when click on navbar item
		var scrollPosition = $(document).scrollTop();
		$('.navbar-collapse .nav-item a[href^="#"').each(function () {
			console.log($(this).attr('href')); 
		  var refElement = $($(this).attr("href"));
		  if (refElement.length&&refElement.position().top <= scrollPosition) {
			$('.navbar-collapse .nav-item ').removeClass("active");
			$(this).parent().addClass("active");
		  }
		  else{
			$(this).removeClass("active");
		  }
  
		});
	  }
    $(document).on("scroll", onScroll);
//animate to section when click
    $('.navbar-collapse ul li a').on('click', function () {
      $('html, body').animate({ scrollTop: $(this.hash).offset().top  - 5 }, 1000);
      $('.navbar-collapse.collapse.in').removeClass('in');
      return false;
    });
        // add fix navbar when scroll down and remove it on top 
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();

    if (scrollTop > $('header').height()) {
      $('header').addClass('scrollNav');

    }

    else {
      $('header').removeClass('scrollNav');
    }

  });

    
  //close mobile navbar when chooe one of items
  $(".navbar .nav-link").click(function(){
    $(".collapse").removeClass("show");
  });
  $('.clientCarousel').owlCarousel({
    autoplay: true,
    loop: false,
    nav: true,
    rtl:true,
    dots:false,
    items:1,
  });
    // declare rating 
    $(".my-rating").starRating({
      starSize: 16,
      rtl: true,
      activeColor: '#FFAE01',
      hoverColor: '#F9D674',
      ratedColor: '#FEAA25',
      emptyColor: 'rgba(254, 170, 37, .5)',
      starShape: 'rounded',
      strokeColor:'#FEAA25',
      useGradient: false,
      disableAfterRate: true,
      initialRating: 4,
      readOnly: true,

  
      callback: function (currentRating, $el) { }
    });
  
});

