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
3. Reference `tinaciousFluidVid.css`

```html
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="tinaciousFluidVid.min.js"></script>
<link rel="stylesheet" type="text/css" href="tinaciousFluidVid.css" />
```

### HTML

Create a blank element where you want your video to go.
```html
<div class="my_video"></div>
```
Yep, that's it. Your video will append to the targeted element.

### CSS

The following code is all of the CSS required for this plugin to work:
```css
.responsive-video object, .responsive-video iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.responsive-video {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	height: 0;
}
.standardDef {
	padding-bottom: 20%; /* 4:3 */
}
```
Since the video will expand to 100% of the width of its container, you can specify that width on the targeted element, e.g.:

```css
.my_video {
	width: 50%; /* optional to whatever size you want */
}
```
The video will be fluid and responsive within that container.

### Javascript

Initialize your script on document ready:

```js
$(document).ready(function(){
	$('.my_video').tinaciousFluidVid({
		id: '', // Video ID goes here
		type: 'vimeo', // Video service name goes here. Currently supports YouTube and Vimeo (default)
		ratio: 'widescreen' // Choose your aspect ratio – widescreen is 16:9 (default), standard is 4:3
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

![screenshot of the tinaciousFluidVid plugin demo](https://raw.github.com/tinacious/tinaciousFluidVid/master/screenshot.png)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/tinacious/tinaciousfluidvid/trend.png)](https://bitdeli.com/free "Bitdeli Badge")