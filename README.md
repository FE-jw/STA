# STA(Scroll Trigger Animation) [demo](https://fe-jw.github.io/STA)

## Property
1. data-sta: 기본 설정
	```html
	<div data-sta></div>
	```

2. data-sta-delay: 애니메이션 시작 지연
	```html
	<div data-sta data-sta-delay="300"></div>
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
|Ver|css|js|
|:------:|:---:|:---:|
|1|340byte|967byte|

## History
- 220306 [Ver 1](https://fe-jw.github.io/STA/Ver1) beta 업로드