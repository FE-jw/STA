# STA(Scroll Trigger Animation) [demo](https://fe-jw.github.io/STA)

## Property
1. data-sta: 기본 설정
	```html
	<div data-sta></div>
	```

2. data-sta-delay: 애니메이션 트리거 지연
	```html
	<div data-sta
	data-sta-delay="300">
	```

## Get Started
1. Add Markup
	```html
	<div data-sta></div>
	```

2. Add CSS
	```html
	<!-- Don't add my CDN in your project. I recommend adding it to your CDN -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fe-jw/STA/Ver1/sta.min.css">
	```

3. Add JS
	```html
	<!-- Don't add my CDN in your project. I recommend adding it to your CDN -->
	<script src="https://cdn.jsdelivr.net/gh/fe-jw/STA/Ver1/sta.min.js"></script>
	```

4. Initialize
	```javascript
	//You have to initialize after the window load
	window.addEventListener('load', function(){
		document.querySelectorAll('[data-sta]').STA();
	});
	```

## 용량(min 기준)
|Ver|css|js|
|:------:|:---:|:---:|
|1|343byte|966byte|

## History
- 220306 [Ver 1](https://fe-jw.github.io/STA/Ver1) beta 업로드