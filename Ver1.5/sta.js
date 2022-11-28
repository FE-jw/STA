/**
 * Version: 1.5.1
 * Web: https://fe-jw.github.io/STA/Ver1.5
 * Github: https://github.com/FE-jw/STA
 * Released: 2022-11-28
*/

NodeList.prototype.STA = function(options){
	if(window.NodeList && !NodeList.prototype.forEach){
		NodeList.prototype.forEach = Array.prototype.forEach;
	}

	var settings = {
		repeatEffect: false,
		defaultOffset: 0.5
	}

	if(options){
		settings.repeatEffect = typeof options.repeatEffect != 'undefined' ? options.repeatEffect : settings.repeatEffect;
		settings.defaultOffset = typeof options.defaultOffset != 'undefined' ? options.defaultOffset : settings.defaultOffset;
	}

	var ele_ani = this;
	var onInit = function(){
		ele_ani.forEach(function(e){
			//Settings
			if(!e.classList.contains('sta-trigger')){
				var ele_top = window.scrollY + e.getBoundingClientRect().top;
				var ele_btm = window.scrollY + e.getBoundingClientRect().bottom;
				var ele_trigger = ele_top + (e.offsetHeight * (e.dataset.staOffset || settings.defaultOffset));
	
				//Duration 있는 경우
				if(e.dataset.staDuration && e.style.transitionDuration == ''){
					e.style.transitionDuration = e.dataset.staDuration / 1000 + 's';
				}
	
				//Trigger Active
				if(window.scrollY + window.innerHeight >= ele_trigger && window.scrollY < ele_btm){
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

		//repeat
		if(settings.repeatEffect){
			ele_ani.forEach(function(e){
				if(e.classList.contains('sta-trigger') && window.scrollY + window.innerHeight <= window.scrollY + e.getBoundingClientRect().top){
					if(e.dataset.staDuration){
						e.style.removeProperty('transition-duration');
					}
					
					e.classList.remove('sta-trigger', 'sta-complete');
				}
			});
		}
	});
};