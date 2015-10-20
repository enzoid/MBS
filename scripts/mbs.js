$(function() {
	
	var scroller  = $(".scroller-content");
	var bodymove = $("html, body");
	var controls = $("#glider .controls");
	
	var slideScreen = function (e) {
	
		var screenName = location.hash + "-screen";
		var itemToView = $(screenName);
		var leftPostion = itemToView.position().left * -1;
		scroller.animate({left: leftPostion}, "slow");
		bodymove.animate({ scrollTop: 0 }, "slow");
		 
		 controls.find('.selected').removeClass('selected');
		 controls.find('[href="' + location.hash + '"]').addClass('selected');

	};
	
	var gotoScreen = function(screenName) {
		if (!screenName) {
			return; // no screen name, no animating
		}
		
		var itemToView = $(screenName + "-screen");
		var leftPosition = itemToView.position().left * -1;
		scroller.css({ left: leftPosition });
		
		 controls.find('.selected').removeClass('selected');
		 controls.find('[href="' + screenName + '"]').addClass('selected');
		 
	};

	$(window).hashchange(slideScreen);
	gotoScreen(location.hash);

});


// TODO: write a function to modularise d/selecting current page