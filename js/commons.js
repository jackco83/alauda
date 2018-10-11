// jQuery(document).ready(function() {
//   jQuery('.fullpage').fullpage({
//     //anchors: ['1', '2', '3', '4', '5', '6', '7'],
//     menu: '#myMenu',
//     lockAnchors: true,
//     navigation: true,
//     navigationPosition: 'right',
//     autoScrolling: false
//   });
//
//   jQuery('.lnkmenu').click(function() {
//     jQuery('.lymenu').toggleClass('visible');
//   });
// });

jQuery(document).ready(function() {

  if($('.fullpage').is("*")){
    jQuery('.fullpage').fullpage({
        //anchors: ['1', '2', '3', '4', '5', '6', '7'],
        menu: '#myMenu',
        lockAnchors: true,
        navigation: true,
        navigationPosition: 'right',
        autoScrolling: false
      });
    };
//
  jQuery('.lnkmenu').click(function(e) {
    e.preventDefault();
    jQuery('.lymenu').toggleClass('visible');
  });
//
  var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
  );
  wow.init();
//
  var svgElement = document.querySelector('svg');
  var maskedElement = document.querySelector('#mask-circle');
  var circleFeedback = document.querySelector('#circle-shadow');
  var svgPoint = svgElement.createSVGPoint();

  function cursorPoint(e, svg) {
    svgPoint.x = e.clientX;
    svgPoint.y = e.clientY;
    return svgPoint.matrixTransform(svg.getScreenCTM().inverse());
  }

  function update(svgCoords) {
    maskedElement.setAttribute('cx', svgCoords.x);
    maskedElement.setAttribute('cy', svgCoords.y);
    circleFeedback.setAttribute('cx', svgCoords.x);
    circleFeedback.setAttribute('cy', svgCoords.y);
  }

  window.addEventListener('mousemove', function(e) {
    update(cursorPoint(e, svgElement));
  }, false);

  document.addEventListener('touchmove', function(e) {
      e.preventDefault();
      var touch = e.targetTouches[0];
      if (touch) {
          update(cursorPoint(touch, svgElement));
      }
  }, false);

});
