let start = 5


jQuery(function($){
	'use strict';
	// -------------------------------------------------------------
	//   Centered Navigation
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#centered');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'centered',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 4,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
		});
	}());
});

function fun(eventName){
    console.log(eventName);
    for( let value of this.items ){
        if(value.el.getAttribute("class")=="active"){
            console.log(value.el);
        }
    }
}