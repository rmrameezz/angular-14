$(function () {
	$('.sidebar-nav').click(function (e) {
		initPanelSwitcher();
	});
});

var panelSwitcherInitialized = false;
function initPanelSwitcher() {
	if($('.js-switch-panel').get(0) && panelSwitcherInitialized == false){
		panelSwitcherInitialized = true;
		$('.js-switch-panel').click(function(e){
			e.preventDefault();
			var target = $(this).attr('data-switch-target');
			switchPanelTo(target);
		});
		setTimeout(function(){
			var newHeight = $('.panel-switch-item.is--active').height();
			$('.c-panel-switcher').css('height', newHeight);
		}, 200);
	}
}

function switchPanelTo(target) {
	panelUpdateHeight();
	$('.panel-switch-item').removeClass('is--active is--settle');
	$(target).addClass('is--active');
	panelUpdateHeight();
	setTimeout(function(){
		$('.panel-switch-item.is--active').addClass('is--settle');
		$('.c-panel-switcher').css({
			'height': 'auto'
		});
	}, 800);
}

function panelUpdateHeight(animSpeed) {
	var newHeight = $('.panel-switch-item.is--active').height();
	$('.c-panel-switcher').stop().animate({
		'height': newHeight
	}, 'slow');
}