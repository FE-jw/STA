# STA(Scroll Trigger Animation) [demo](https://fe-jw.github.io/STA)

## Property
1. Default: 기본 설정
	```html
	<div data-sta></div>
	```

2. Delay: 애니메이션 시작 지연
	```html
	<div data-sta data-sta-delay="300">
	```

## Get Started
1. Add Markup
	```html
	<div data-sta></div>
	```

2. Add CSS
	```html
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fe-jw/STA/Ver1/sta@1.min.css">
	```

3. Add JS
	```html
	<script src="https://cdn.jsdelivr.net/gh/fe-jw/STA/Ver1/sta@1.min.js"></script>
	```

4. Initialize
	```javascript
	window.addEventListener('load', function(){
		document.querySelectorAll('[data-sta]').STA();
	});
	```

## 용량(min 기준)
||css|js|
|------|:---:|:---:|
|용량|339byte|1.08kb|

## History
- 220306 Version 1 beta 업로드