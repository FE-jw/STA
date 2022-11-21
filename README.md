[![](https://cdn.jsdelivr.net/gh/fe-jw/STA/img/sta_logo.jpg)](https://fe-jw.github.io/STA)

# **STA(Scroll Trigger Animation) [Demo](https://fe-jw.github.io/STA)**

## **Property**
* **data-sta**: default setting
	```html
	<div data-sta></div>
	```

* **data-sta-delay**: delay animation trigger activation _(The unit is ms)_
	```html
	<div data-sta data-sta-delay="300"></div>
	```

* **data-sta-duration**: set the animation time _(The default is 1000, in ms)_
	```html
	<div data-sta data-sta-duration="2000"></div>
	```

* **data-sta-offset**: set the trigger point _(The default is 0.5, which means 50% of the element height. You can't set a negative value)_
	```html
	<div data-sta data-sta-offset="0.8"></div>
	```

* **data-sta-direction**: set the direction of the animation
	* btt: bottom to top _(default)_
	* ttb: top to bottom
	* ltr: left to right
	* rtl: right to left

	```html
	<div data-sta data-sta-direction="ltr"></div>
	```

## **Options**
```javascript
document.querySelectorAll('[data-sta]').STA({
	repeatEffect: true, //decide whether to repeat the animation (The default is false. This option is not recommended)
	defaultOffset: 0.3	//the trigger is activated when the element height is exposed. It has a lower priority than the individual setting (data-sta-offset).
});
```

## **Get Started**
1. Add Markup
	```html
	<div data-sta></div>
	```

2. Add CSS
	```html
	<!-- Don't add my CDN in your project. I recommend adding it to your CDN -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fe-jw/STA/Ver1.5/sta.min.css">
	```

3. Add JS
	```html
	<!-- Don't add my CDN in your project. I recommend adding it to your CDN -->
	<script src="https://cdn.jsdelivr.net/gh/fe-jw/STA/Ver1.5/sta.min.js"></script>
	```

4. Initialize
	```javascript
	//You have to initialize after the window load
	window.addEventListener('load', function(){
		document.querySelectorAll('[data-sta]').STA();
	});
	```

## **Amazing Size(min)**
|Ver|css|js|
|:------:|:---:|:---:|
|1.5|495byte|1.5kb|
|1.4|514byte|1.37kb|
|1.3|514byte|1.1kb|
|1.2|347byte|1.05kb|
|1.1|347byte|1.03kb|
|1|343byte|966byte|

## **[History](https://github.com/FE-jw/STA/releases)**
- 221121 Released [Ver 1.5](https://fe-jw.github.io/STA/Ver1.5)
- 220606 Released [Ver 1.4](https://fe-jw.github.io/STA/Ver1.4)
- 220520 Released [Ver 1.3](https://fe-jw.github.io/STA/Ver1.3)
- 220501 Released [Ver 1.2](https://fe-jw.github.io/STA/Ver1.2)
- 220325 Released [Ver 1.1](https://fe-jw.github.io/STA/Ver1.1)
- 220306 Released [Ver 1](https://fe-jw.github.io/STA/Ver1)