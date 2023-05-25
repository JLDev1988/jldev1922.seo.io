
// aside mob
if(window.matchMedia("(max-width: 992px)").matches){
	if(document.querySelector('.aside')){
		let aside = document.querySelector('.aside'),
			asideHeading = aside.querySelector('.heading'),
			asideLinks = aside.querySelectorAll('a'),
			asideClose =  aside.querySelector('.close');

			asideHeading.addEventListener('click', function(){
				aside.classList.add('open');
			});

			asideClose.addEventListener('click', function(){
				aside.classList.remove('open');
			});

			asideLinks.forEach(function(el){
				el.addEventListener('click', function(){
					aside.classList.remove('open');
				});
			});
	}
}
// faq
if(document.querySelector('.faq__item')){
  let faqs = document.querySelectorAll('.faq__item');

      faqs.forEach(function(el){
        let heading = el.querySelector('.faq-heading');

            heading.addEventListener('click', function(){
              if(el.classList.contains('open') === true){
                el.classList.remove('open');
                this.setAttribute('aria-expanded', false);
              } else {
                el.classList.add('open');
                this.setAttribute('aria-expanded', true);
              }
            });
      });
}
// form
if(document.querySelector('form')){
	let group = document.querySelectorAll('form .group');

		group.forEach(function(el){
			let input = el.querySelector('.types');

				input.addEventListener('input', function(){
					el.classList.add('type');
				});

				input.addEventListener('blur', function(){
					el.classList.remove('type');
				});
		});
}

// comments form
if(document.querySelector('.comments-add-block_close')){
	let commentsFromClose = document.querySelectorAll('.comments-add-block_close');

		commentsFromClose.forEach(function(el){
			let close = el.querySelector('.close');

				close.addEventListener('click', function(){
					el.style.display = 'none';
				});
		});
}

// jquery validator success contact
/* $(function () {
  $('.contact-form').submit(function (e) {
    $('div.'+$(this).find('button[type="submit"]').attr("rel")).fadeIn(500);
    $('.contact-success').show();
  	$('.contact-form-inner').hide();
    e.preventDefault()
  });
}); */

// jquery validator success comments
$(function () {
  $('.comments-add-form').submit(function (e) {
    $('div.'+$(this).find('button[type="submit"]').attr("rel")).fadeIn(500);
    $('.comments-success').show();
  	$('.comments-add-block').hide();
    e.preventDefault()
  });
});
// header
// scroll header
if (document.querySelector('.header')) {
	let header = document.querySelector('.header'),
		sticky = header.offsetTop,
		scrolltop = pageYOffset;

	window.addEventListener('scroll', function(){
		if (window.pageYOffset > sticky) {
		    header.classList.add('header_fixed');
		  } else {
		    header.classList.remove('header_fixed');
		  }
	});
}
// navigation mob
// menu
if(document.querySelector('.hamburger')){
	let btnMenu = document.querySelector('.hamburger'),
		menuMob = document.querySelector('.mobile-navigation'),
		close = menuMob.querySelector('.close'),
		overly = document.querySelector('.overly'),
		body = document.body;

	btnMenu.addEventListener('click', function(){
		this.setAttribute('aria-expanded', true);
		menuMob.classList.add('open');
		body.classList.add('body_scroll');
		overly.style.display = 'block';
	})

	overly.addEventListener('click', function(){
		menuMob.classList.remove('open');
		body.classList.remove('body_scroll');
		this.style.display = 'none';
		btnMenu.setAttribute('aria-expanded', false);
	});

	close.addEventListener('click', function(){
		menuMob.classList.remove('open');
		body.classList.remove('body_scroll');
		overly.style.display = 'none';
		btnMenu.setAttribute('aria-expanded', false);
	});

}

// click navigation
if (document.querySelector('.mobile-navigation')) {
  let navMob = document.querySelector('.mobile-navigation'),
  	btnMenu = document.querySelector('.hamburger'),
      overly = document.querySelector('.overly'),
      body = document.body,
      menuLi = navMob.querySelectorAll('li'),
      menuArr = navMob.querySelectorAll('.arr');

      menuLi.forEach( function(el) {

        if(el.classList.contains('arr')){
          el.addEventListener('click', function(event){
            let target = event.target.closest('.arr');

            if (target.classList.contains('noclick') == false){
              event.preventDefault();
              target.classList.remove('noclick');
            }
            target.classList.add('noclick');

            })
        } else {
	          el.addEventListener('click', function(){
	          navMob.classList.remove('open');
	          body.classList.remove('body_scroll');
	          overly.style.display = 'none';
	          btnMenu.setAttribute('aria-expanded', false);
          })
        }
        
      });
}
// popup
if(document.querySelector('.btn-cnslttn')){
	let btnCnslttn = document.querySelectorAll('.btn-cnslttn'),
		popupCnslttn = document.querySelector('.popup-contact'),
		btnClose = popupCnslttn.querySelector('.close'),
		overly = document.querySelector('.overly'),
		body = document.body;

		btnCnslttn.forEach(function(el){
			el.addEventListener('click', function(){
				popupCnslttn.classList.add('open');
				overly.style.display = "block";
				body.classList.add('body_scroll');
			});
		});

		btnClose.addEventListener('click', function(){
			popupCnslttn.classList.remove('open');
			overly.style.display = "none";
			body.classList.remove('body_scroll');
		});

		overly.addEventListener('click', function(){
			popupCnslttn.classList.remove('open');
			this.style.display = "none";
			body.classList.remove('body_scroll');
		});
}
// feedback slider
if(document.querySelector('.feedback-slider')){
  $(document).ready(function (){
    $('.feedback-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      autoplay: false,
      speed:800,
    });

/*     //ticking machine
    let percentTimeFeedback;
    let tickFeedback;
    let timeFeedback = .1;
    let progressBarIndexFeedback = 0; */

/*     $('.progress-feedback .progressBar').each(function(index) {
        let progressFeedback = "<div class='inProgress inProgressFeedback" + index + "'></div>";
        $(this).html(progressFeedback);
    }); */

/*     function startProgressbarFeedback() {
      resetProgressbarFeedback();
      percentTimeFeedback = 0;
      tickFeedback = setInterval(intervalFeedback, 10);
    }

    function intervalFeedback() {
      if (($('.feedback-slider .slick-track div[data-slick-index="' + progressBarIndexFeedback + '"]').attr("aria-hidden")) === "true") {
        progressBarIndexFeedback = $('.feedback-slider .slick-track div[aria-hidden="false"]').data("slickIndex");
        startProgressbarFeedback();
      } else {
        percentTimeFeedback += 1 / (timeFeedback + 5);
        $('.inProgressFeedback' + progressBarIndexFeedback).css({
            width: percentTimeFeedback + "%"
        });
        if (percentTimeFeedback >= 100) {
          $('.feedback-slider').slick('slickNext');
            progressBarIndexFeedback++;
            if (progressBarIndexFeedback > 10) {
              progressBarIndexFeedback = 0;
            }
          startProgressbarFeedback();
        }
      }
    } */
/* 
    function resetProgressbarFeedback() {
      $('.progress-feedback .inProgress').css({
          width: 0 + '%'
      });
      clearInterval(tickFeedback);
    } */

    //startProgressbarFeedback();

    // End ticking machine
/*     $('.progress-feedback .item').click(function () {
      clearInterval(tickFeedback);
      var goToThisIndexFeedback = $(this).find("span").data("slickIndex");
      $('.feedback-slider').slick('slickGoTo', goToThisIndexFeedback, false);
      startProgressbarFeedback();
    }); */
  })
}

// say slider
if(document.querySelector('.say-slider')){
  $(document).ready(function (){
    $('.say-slider').slick({
    dots: true,
    arrows:true,
    infinite:true,
    slidesToScroll: 1,
    slidesToShow: 1,
    //autoplay: false,
    speed:800,
  });
/*
  //ticking machine
  let percentTimeSay;
  let tickSay;
  let timeSay = .1;
  let progressBarIndexSay = 0;

  $('.progress-say .progressBar').each(function(index) {
      let progressSay = "<div class='inProgress inProgressSay" + index + "'></div>";
      $(this).html(progressSay);
  });

  function startProgressbarSay() {
    resetProgressbarSay();
    percentTimeSay = 0;
    tickSay = setInterval(intervalSay, 10);
  }

  function intervalSay() {
    if (($('.say-slider .slick-track div[data-slick-index="' + progressBarIndexSay + '"]').attr("aria-hidden")) === "true") {
      progressBarIndexSay = $('.say-slider .slick-track div[aria-hidden="false"]').data("slickIndex");
      startProgressbarSay();
    } else {
      percentTimeSay += 1 / (timeSay + 5);
      $('.inProgressSay' + progressBarIndexSay).css({
          width: percentTimeSay + "%"
      });
      if (percentTimeSay >= 100) {
        $('.say-slider').slick('slickNext');
          progressBarIndexSay++;
          if (progressBarIndexSay > 10) {
            progressBarIndexSay = 0;
          }
        startProgressbarSay();
      }
    }
  }

  function resetProgressbarSay() {
    $('.progress-say .inProgress').css({
        width: 0 + '%'
    });
    clearInterval(tickSay);
  }

  startProgressbarSay();

  // End ticking machine
  $('.progress-say .item').click(function () {
    clearInterval(tickSay);
    var goToThisIndexSay = $(this).find("span").data("slickIndex");
    $('.say-slider').slick('slickGoTo', goToThisIndexSay, false);
    startProgressbarSay();
  });
  /**/
});
  
}


// team slider
$('.team-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
   responsive: [
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
  ]
});

// services
if(document.querySelector('.services-slider')){
  if(window.matchMedia("(max-width: 769px)").matches){
    $(document).ready(function (){
      $('.services-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      autoplay: false,
      speed:800,
    });
/* 
    //ticking machine
    let percentTimeServices;
    let tickServices;
    let timeServices = .1;
    let progressBarIndexServices = 0; */

/*     $('.progress-services .progressBar').each(function(index) {
        let progressServices = "<div class='inProgress inProgressServices" + index + "'></div>";
        $(this).html(progressServices);
    }); */

/*     function startProgressbarServices() {
      resetProgressbarServices();
      percentTimeServices = 0;
      tickServices = setInterval(intervalServices, 10);
    } */

/*     function intervalServices() {
      if (($('.services-slider .slick-track div[data-slick-index="' + progressBarIndexServices + '"]').attr("aria-hidden")) === "true") {
        progressBarIndexServices = $('.services-slider .slick-track div[aria-hidden="false"]').data("slickIndex");
        startProgressbarServices();
      } else {
        percentTimeServices += 1 / (timeServices + 5);
        $('.inProgressServices' + progressBarIndexServices).css({
            width: percentTimeServices + "%"
        });
        if (percentTimeServices >= 100) {
          $('.services-slider').slick('slickNext');
            progressBarIndexServices++;
            if (progressBarIndexServices > 1) {
              progressBarIndexServices = 0;
            }
          startProgressbarServices();
        }
      }
    }

    function resetProgressbarServices() {
      $('.progress-services .inProgress').css({
          width: 0 + '%'
      });
      clearInterval(tickServices);
    }

    startProgressbarServices(); */

    // End ticking machine
/*     $('.progress-services .item').click(function () {
      clearInterval(tickServices);
      var goToThisIndexServices = $(this).find("span").data("slickIndex");
      $('.services-slider').slick('slickGoTo', goToThisIndexServices, false);
      startProgressbarServices();
    }); */
    })
    
  }
}


// tools
if(window.matchMedia("(max-width: 769px)").matches){
	$('.tools-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: false,
	});
}

// blog 
$('.blog-slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: true,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        arrows: false,
	      }
	    }
	  ]
	});

// major
$('.major-slider').slick({
  dots: false,
  arrows: true,
  infinite:true,
  slidesToScroll: 1,
  slidesToShow: 3,
  responsive: [
	    {
	    breakpoint: 768,
	    settings: {
	        slidesToShow: 1,
	        arrows: false,
	      }
	    }
	]
});

// awards
$('.awards-slider').slick({
  dots: false,
  arrows: false,
  infinite:true,
  slidesToScroll: 1,
  slidesToShow: 5,
  responsive: [
	    {
	    breakpoint: 768,
	    settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	    breakpoint: 320,
	    settings: {
	        slidesToShow: 3,
	      }
	    },
	]
});

// certification
$('.certification-slider').slick({
  dots: false,
  arrows: false,
  infinite:true,
  slidesToScroll: 1,
  slidesToShow: 3,
  responsive: [
	    {
	    breakpoint: 768,
	    settings: {
	        slidesToShow: 1,
	        arrows: false,
	      }
	    }
	]
});

// say slider
if(document.querySelector('.exclusive-slider')){
  $(document).ready(function (){
    $('.exclusive-slider').slick({
      dots: true,
      infinite:true,
      slidesToScroll: 1,
      slidesToShow: 1,
      autoplay: false,
      speed:800,
    });

/*     //ticking machine
    let percentTimeExclusive;
    let tickExclusive;
    let timeExclusive = .1;
    let progressBarIndexExclusive = 0; */

/*     $('.progress-exclusive .progressBar').each(function(index) {
        let progressExclusive = "<div class='inProgress inProgressExclusive" + index + "'></div>";
        $(this).html(progressExclusive);
    });

    function startProgressbarExclusive() {
      resetProgressbarExclusive();
      percentTimeExclusive = 0;
      tickExclusive = setInterval(intervalExclusive, 10);
    } */

/*     function intervalExclusive() {
      if (($('.exclusive-slider .slick-track div[data-slick-index="' + progressBarIndexExclusive + '"]').attr("aria-hidden")) === "true") {
        progressBarIndexExclusive = $('.exclusive-slider .slick-track div[aria-hidden="false"]').data("slickIndex");
        startProgressbarExclusive();
      } else {
        percentTimeExclusive += 1 / (timeExclusive + 5);
        $('.inProgressExclusive' + progressBarIndexExclusive).css({
            width: percentTimeExclusive + "%"
        });
        if (percentTimeExclusive >= 100) {
          $('.exclusive-slider').slick('slickNext');
            progressBarIndexExclusive++;
            if (progressBarIndexExclusive > 10) {
              progressBarIndexExclusive = 0;
            }
          startProgressbarExclusive();
        }
      }
    } */

/*     function resetProgressbarExclusive() {
      $('.progress-exclusive .inProgress').css({
          width: 0 + '%'
      });
      clearInterval(tickExclusive);
    }

    startProgressbarExclusive();

    // End ticking machine
    $('.progress-exclusive .item').click(function () {
      clearInterval(tickExclusive);
      var goToThisIndexExclusive = $(this).find("span").data("slickIndex");
      //$('.exclusive-slider').slick('slickGoTo', goToThisIndexExclusive, false);
      startProgressbarExclusive();
    }); */
  })
}


// tools
if(window.matchMedia("(max-width: 769px)").matches){
	$('.category-slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: false,
	  variableWidth:true,
	});
}

// hone
$('.hone-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 500,
  autoplay:true,
  fade: true,
  cssEase: 'linear'
});
//# sourceMappingURL=../sourcemaps/js.js.map
