/*!
	* Version: 1.4
	* Web: https://fe-jw.github.io/STA/Ver1.4
	* Github: https://github.com/FE-jw/STA
	* Released: 2022-##-##
*/

NodeList.prototype.STA = function(options){
	if(window.NodeList && !NodeList.prototype.forEach){
		NodeList.prototype.forEach = Array.prototype.forEach;
	}

	var eleAni = this;
	var onInit = function(){
		eleAni.forEach(function(e){
			//Settings
			if(!e.classList.contains('sta-trigger')){
				var eleTop = window.scrollY + e.getBoundingClientRect().top;
				var eleBottom = window.scrollY + e.getBoundingClientRect().bottom;
				var eleTrigger = eleTop + (e.offsetHeight * (e.dataset.staOffset || 0.8));

				//Duration 있는 경우
				if(e.dataset.staDuration && e.style.transitionDuration == ''){
					e.style.transitionDuration = e.dataset.staDuration / 1000 + 's';
				}

				//Trigger Active
				if(window.scrollY + window.innerHeight >= eleTrigger && window.scrollY < eleBottom){
					if(e.dataset.staDelay){
						//Delay 있는 경우
						setTimeout(function(){
							if(!e.classList.contains('sta-trigger')){
								e.classList.add('sta-trigger');
							}
						}, e.dataset.staDelay);
					}else{
						//Delay 없는 경우
						e.classList.add('sta-trigger');
					}
				}
				
				//Complete
				e.addEventListener('transitionend', function(){
					if(e.classList.contains('sta-trigger') && !e.classList.contains('sta-complete')){
						e.classList.add('sta-complete');
					}
				});
			}
		});
	}
	onInit();

	window.addEventListener('orientationchange', onInit);
	window.addEventListener('resize', onInit);
	window.addEventListener('scroll', function(){
		onInit();

		if(options.repeatEffect){
			eleAni.forEach(function(e){
				if(window.scrollY + window.innerHeight < window.scrollY + e.getBoundingClientRect().top || window.scrollY > window.scrollY + e.getBoundingClientRect().bottom){
					e.classList.remove('sta-trigger', 'sta-complete');
				}
			});
		}
	});
};