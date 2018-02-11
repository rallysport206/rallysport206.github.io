// $('#fullpage').fullpage({
//   anchors: ['page1', 'page2', 'page3', 'page4'],
//   sectionsColor: ['#212529', 'orange', '#C0C0C0', '#ADD8E6'],
// });
//
// $(document).ready(function() {
// 	$('#fullpage').fullpage({
// 		anchors:['firstPage', 'secondPage', 'thirdPage']
// 	});
// });
// $(document).ready(function() {
// 	$('#fullpage').fullpage({
// 		//Navigation
// 		menu: '#menu',
// 		lockAnchors: false,
// 		anchors:['firstPage', 'secondPage'],
// 		navigation: false,
// 		navigationPosition: 'right',
// 		navigationTooltips: ['firstSlide', 'secondSlide'],
// 		showActiveTooltip: false,
// 		slidesNavigation: false,
// 		slidesNavPosition: 'bottom',
//
// 		//Scrolling
// 		css3: true,
// 		scrollingSpeed: 700,
// 		autoScrolling: true,
// 		fitToSection: true,
// 		fitToSectionDelay: 1000,
// 		scrollBar: false,
// 		easing: 'easeInOutCubic',
// 		easingcss3: 'ease',
// 		loopBottom: false,
// 		loopTop: false,
// 		loopHorizontal: true,
// 		continuousVertical: false,
// 		continuousHorizontal: false,
// 		scrollHorizontally: false,
// 		interlockedSlides: false,
// 		dragAndMove: false,
// 		offsetSections: false,
// 		resetSliders: false,
// 		fadingEffect: false,
// 		normalScrollElements: '#element1, .element2',
// 		scrollOverflow: false,
// 		scrollOverflowReset: false,
// 		scrollOverflowOptions: null,
// 		touchSensitivity: 15,
// 		normalScrollElementTouchThreshold: 5,
// 		bigSectionsDestination: null,
//
// 		//Accessibility
// 		keyboardScrolling: true,
// 		animateAnchor: true,
// 		recordHistory: true,
//
// 		//Design
// 		controlArrows: true,
// 		verticalCentered: true,
// 		sectionsColor : ['#ccc', '#fff'],
// 		paddingTop: '3em',
// 		paddingBottom: '10px',
// 		fixedElements: '#header, .footer',
// 		responsiveWidth: 0,
// 		responsiveHeight: 0,
// 		responsiveSlides: false,
// 		parallax: false,
// 		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
//
// 		//Custom selectors
// 		sectionSelector: '.section',
// 		slideSelector: '.slide',
//
// 		lazyLoading: true,
//
// 		//events
// 		onLeave: function(index, nextIndex, direction){},
// 		afterLoad: function(anchorLink, index){},
// 		afterRender: function(){},
// 		afterResize: function(){},
// 		afterResponsive: function(isResponsive){},
// 		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
// 		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
// 	});
// });


// variables
var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});



// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      $(this).css('background', '#374140');
      $(this).find('h2').css('color', 'white');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        }
      );
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
    }
  }
}); 
