/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// carousel = (function(){
// 	var box = document.querySelector('.carouselbox');
// 	var next = box.querySelector('.next');
// 	var prev = box.querySelector('.prev');
// 	var items = box.querySelectorAll('.content li');
// 	var counter = 0;
// 	var amount = items.length;
// 	var current = items[0];
// 	box.classList.add('active');
// 	function navigate(direction) {
// 	  current.classList.remove('current');
// 	  counter = counter + direction;
// 	  if (direction === -1 && 
// 		  counter < 0) { 
// 		counter = amount - 1; 
// 	  }
// 	  if (direction === 1 && 
// 		  !items[counter]) { 
// 		counter = 0;
// 	  }
// 	  current = items[counter];
// 	  current.classList.add('current');
// 	}
// 	next.addEventListener('click', function(ev) {
// 	  navigate(1);
// 	});
// 	prev.addEventListener('click', function(ev) {
// 	  navigate(-1);
// 	});
// 	navigate(0);
//   })()

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);