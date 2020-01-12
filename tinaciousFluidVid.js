/*
 *  Tinacious Responsive Video jQuery plugin
 *  Plugin URL: https://github.com/tinacious/tinaciousFluidVid
 *
 *  Tina Holly (Tinacious Design)
 *  http://tinaciousdesign.com
 *
 */

(function($){
  $.fn.extend({
    tinaciousFluidVid: function(options) {
      var defaults = {
        // Your Video's ID
        id: undefined,

        // Video Type
        // Options: 'vimeo' (default), 'youtube'
        type: 'vimeo'
      };

      var options = $.extend(defaults, options);
      return this.each(function(){
        var obj = $(this);
        var vimeoCode = '<iframe src="https://player.vimeo.com/video/' + defaults.id + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
        var youtubeCode = '<iframe src="https://www.youtube.com/embed/' + defaults.id + '" frameborder="0" allowfullscreen></iframe>';
        if(defaults.type == 'vimeo') {
          var videoCode = vimeoCode;
        } else if(defaults.type == 'youtube') {
          var videoCode = youtubeCode;
        }
        obj.append('<div class="responsive-video">' + videoCode + '</div>');
        // append styles
        $('head').append('<style type="text/css">.responsive-video iframe {position: absolute; top: 0; left: 0; width: 100%; height: 100%;} .responsive-video {position: relative; padding-bottom: 56.25%; height: 0;}</style>') });
    }
  });
})(jQuery);

