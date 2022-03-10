/*!
	* Version: 1
	* Web: https://fe-jw.github.io/STA/Ver1
	* Github: https://github.com/FE-jw/STA
	* Published: 2022-03-06
*/

NodeList.prototype.STA = function(){
	if(window.NodeList && !NodeList.prototype.forEach){
		NodeList.prototype.forEach = Array.prototype.forEach;
	}

	var eleAni = this;
	var onInit = function(){
		eleAni.forEach(function(e, idx){
			var eleTop = window.scrollY + e.getBoundingClientRect().top;
			var eleBottom = eleTop + e.offsetHeight;
			var eleTrigger = eleTop + (e.offsetHeight * 0.8);

			//Settings
			if(!e.classList.contains('sta-complete')){
				//Trigger Active
				if(window.scrollY + window.innerHeight >= eleTrigger && window.scrollY < eleBottom){
					if(!e.classList.contains('sta-trigger')){
						if(e.dataset.staDelay){
							//Delay 있는 경우
							setTimeout(function(){
								e.classList.add('sta-trigger');
							}, e.dataset.staDelay);
						}else{
							//Delay 없는 경우
							e.classList.add('sta-trigger');
						}
					}
				}
				
				//Complete
				e.addEventListener('transitionend', function(){
					if(e.classList.contains('sta-trigger') && !e.classList.contains('sta-complete')){
						e.classList.remove('sta-trigger');
						e.classList.add('sta-complete');
					}
				});
			}
		});
	}

	onInit();

	window.addEventListener('resize', function(){
		onInit();
	});

	window.addEventListener('scroll', function(){
		onInit();
	});
}