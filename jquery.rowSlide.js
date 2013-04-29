/*** Leith's rowSlide functions ***/
$.fn.rowSlideUp = function(duration, callback) {
	if (!duration) duration = 500;
	if (!callback) callback = function() {};
	return $(this).find('td,th').wrapInner('<div/>').parent().find('td > div, th > div')
					.slideUp(duration, function() { 
						$(this).parent().parent().hide(0, function() { 
							$(this).find('td > div, th > div').each(function() { $(this).replaceWith($(this).html()); });
							if (callback && typeof(callback) === "function") callback.call(this); 
						});  
					}); 
};
$.fn.rowSlideDown = function(duration, callback) {
	if (!duration) duration = 500;
	if (!callback) callback = function() {};
	return $(this).find('td,th').wrapInner('<div style="display:none;"/>').parent().show(0).find('td > div, th > div')
					.slideDown(duration, function() { 
						$(this).replaceWith($(this).html()); 
						if (callback && typeof(callback) === "function") callback.call(this); 
					});
};