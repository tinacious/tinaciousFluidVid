# Tinacious Fluid Video jQuery Plugin

This plugin was developed to make it easy to implement a fluid video to use in Responsive Web Design.

The CSS it uses was acquired from a variety of internet resources without luck of finding an original author.

I made it easy to use. All you need to know is the video ID and whether it's a YouTube or Vimeo video.

See the demo [here](http://tinacious.github.io/tinaciousFluidVid/).

## How it Works

The plugin renders the HTML and the styles in the attached CSS file required to embed your fluid video.

The video will expand to 100% of its container.

## Instructions

1. Reference [jQuery](http://code.jquery.com/jquery.min.js)
2. Reference `tinaciousFluidVid.js` or `tinaciousFluidVid.min.js`

```html
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="tinaciousFluidVid.min.js"></script>
```

### HTML

Create a blank element where you want your video to go.
```html
<div class="my_video"></div>
```
Yep, that's it. Your video will append to the targeted element.


### Javascript

Initialize your script on document ready:

```js
$(document).ready(function(){
	$('.my_video').tinaciousFluidVid({
		id: '', // Video ID goes here
		type: 'vimeo', // Video service name goes here. Currently supports YouTube and Vimeo (default: vimeo)
	});
});
```

If you do not pass variables through the function, the default video service is Vimeo and the video that will play is a screencast on creating content for a Content Management Systems. The default aspect ratio is widescreen.

Since Vimeo is the default video service, you do not need to specify that the type is Vimeo and the following is fine:

```js
$(document).ready(function(){
	$('.my_video').tinaciousFluidVid({
		id: '123456'
	});
});
```
It will play video with ID 123456 on Vimeo.

### Results

Using this jQuery:

```js
$(document).ready(function(){
	$('.my_video').tinaciousFluidVid({
		type: 'youtube',
		id: '-O3gTUTsYbU'
	});
});
```

Will render the following HTML"

```html
<div class="my_video">
	<div class="responsive-video">
		<iframe src="http://www.youtube.com/embed/-O3gTUTsYbU" frameborder="0" allowfullscreen=""></iframe>
	</div>
</div>
```

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/tinacious/tinaciousfluidvid/trend.png)](https://bitdeli.com/free "Bitdeli Badge")