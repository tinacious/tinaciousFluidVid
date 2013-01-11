/*
 *  Tinacious Responsive Video jQuery plugin
 *  Plugin URL: http://github.com/tinacious/responsive-video
 *
 *  Authored by Christina Holly (Tinacious Design)
 *  http://tinaciousdesign.com
 *
 *  Copyright 2013, Christina Holly
 *  License: GNU General Public License, version 3 (GPL-3.0)
 *  http://www.opensource.org/licenses/gpl-3.0.html
 *
 */

(function($){
	$.fn.extend({
		responsivetd: function(options) {
			var defaults = {
				// Your Video's ID
				id: '56733081',
				// Video Type
				// Options: 'vimeo' (default), 'youtube'
				type: 'vimeo',
				// Aspect Ratio
				// Options: 'widescreen' (default), 'standard'
				ratio: 'widescreen'
			}
			var options = $.extend(defaults, options);
			return this.each(function(){
				var obj = $(this);
				var vimeoCode = '<iframe src="http://player.vimeo.com/video/' + defaults.id + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
				var youtubeCode = '<iframe src="http://www.youtube.com/embed/' + defaults.id + '" frameborder="0" allowfullscreen></iframe>';
				if(defaults.type == 'vimeo') {
					var videoCode = vimeoCode;
				} else if(defaults.type == 'youtube') {
					var videoCode = youtubeCode;
				}
				var ratio = (defaults.ratio == 'standard') ? ' standardDef' : '';
				obj.append('<div class="responsive-video' + ratio + '">' + videoCode + '</div>');
			});
		}
	});
})(jQuery);