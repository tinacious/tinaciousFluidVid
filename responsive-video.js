/*
* jQuery Responsive Video plugin
*/
// Wrap an anonymous function to avoid conflict
(function($){
	// Attach a method
	$.fn.extend({
		responsivetd: function(options) {
			// Options
			var defaults = {
				id: '56733081',
				type: 'vimeo',
				ratio: 'widescreen'
			}
			var options = $.extend(defaults, options);
			// Iterate over the current set of matched elements
			return this.each(function(){
				// code here
				var obj = $(this);
				if defaults.type == 'vimeo' {
					obj.append('vimeo');
				}
			});
		}
	});
	// pass jQuery to the function so that it can use any Javascript variable name to replace $
})(jQuery);