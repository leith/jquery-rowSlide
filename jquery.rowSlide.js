/*** Leith's rowSlide functions ***/
$.fn.rowSlideUp = function(duration, callback) {
	if (!duration) duration = 500;
	if (!callback) callback = function() {};
	return $(this)
		.find('td,th').wrapInner('<div/>').end()
		.find('td > div, th > div').slideUp(duration, function() {
			$(this).closest('tr').hide(0, function() {
				$(this).find('td > div, th > div').each(function() {
					var $children = $(this).children();
					if ($children.length > 0) { $children.unwrap(); }
					else { $(this).replaceWith($(this).html()); }
				});
				if (callback && typeof(callback) === "function") callback.call(this);
			});
		});
};
$.fn.rowSlideDown = function(duration, callback) {
	if (!duration) duration = 500;
	if (!callback) callback = function() {};
	return $(this)
		.find('td,th').wrapInner('<div style="display:none;"/>').end()
		.show(0)
		.find('td > div, th > div').slideDown(duration, function() {
			var $children = $(this).children();
			if ($children.length > 0) { $children.unwrap(); }
			else { $(this).replaceWith($(this).html()); }
			if (callback && typeof(callback) === "function") callback.call(this);
		});
};