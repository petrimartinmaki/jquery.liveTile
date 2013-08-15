# jQuery.liveTile.js

A simple jQuery plugin for live tiles like in Microsoft's Metro UI.

## Usage instructions

1. Link jquery and the plugin
```html
	<!-- Put these into the <head> -->
	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script src="jQuery.hoverLiveTile.js"></script>
```

2. Add markup
```html
	<div class="live-tile">
        <img src="http://lorempixel.com/200/200/" />
        <div>
            <h4>Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
        </div>
    </div>
```

3. Activate the plugin
```javascript
    $(function () {
        $(".live-tile").liveTile();
    });
```

## Tested on the following browsers

* IE 7-10
* Chrome 28.0

## License

Licensed under the MIT license.

Copyright (c) 2013 Petri Martinmäki

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
