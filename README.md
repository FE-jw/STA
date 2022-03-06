# STA(Scroll Trigger Animation) [demo](https://fe-jw.github.io/STA)

## Default
요소에 data-sta 속성만 추가하면 기본 효과 적용 끝!<br>이 외에 dataset 추가 설정으로 손쉽게 인터랙티브한 웹을 구현할 수 있습니다.
```html
<div data-sta></div>
```

## Delay
data-sta-delay 속성으로 애니메이션 시작을 지연시킬 수 있습니다.
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
|용량|355byte|1.08kb|

## History
- 220306 Version 1 beta 업로드