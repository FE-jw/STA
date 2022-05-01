<a href="https://fe-jw.github.io/STA" target="_blank"><img src="https://cdn.jsdelivr.net/gh/fe-jw/STA/img/sta_logo.jpg" width="100%" align="top" style="max-width:830px;"></a>

# **STA(Scroll Trigger Animation)<br>[Ver 1.2 Demo](https://fe-jw.github.io/STA)**

## **Property**
1. data-sta: 기본 설정
	```html
	<div data-sta></div>
	```

2. data-sta-delay: 애니메이션 트리거 지연(단위 ms)
	```html
	<div data-sta data-sta-delay="300"></div>
	```

3. data-sta-duration: 애니메이션 시간(기본값 1000)
	```html
	<div data-sta data-sta-duration="2000"></div>
	```

4. data-sta-offset: 트리거 포인트 설정(기본값 0.8)
	```html
	<div data-sta data-sta-duration="0.5"></div>
	```

## **Get Started**
1. Add Markup
	```html
	<div data-sta></div>
	```

2. Add CSS
	```html
	<!-- Don't add my CDN in your project. I recommend adding it to your CDN -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fe-jw/STA/Ver1.2/sta.min.css">
	```

3. Add JS
	```html
	<!-- Don't add my CDN in your project. I recommend adding it to your CDN -->
	<script src="https://cdn.jsdelivr.net/gh/fe-jw/STA/Ver1.2/sta.min.js"></script>
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
|1.2|347byte|1.05kb|
|1.1|347byte|1.03kb|
|1|343byte|966byte|

## **History**
- 220501 Released [Ver 1.2](https://fe-jw.github.io/STA/Ver1.2)
- 220325 Released [Ver 1.1](https://fe-jw.github.io/STA/Ver1.1)
- 220306 Released [Ver 1](https://fe-jw.github.io/STA/Ver1)