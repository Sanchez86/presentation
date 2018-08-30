var startNow=function(){
	new WOW().init();
};
startNow();





var changeText = document.getElementById('changeText');
var one =' “BEST EMERGING ONLINE AGENT 2018” ';
var two = ' "STARTUP OF THE YEAR 2017" ';
var historyChange = true;
var counter = 0;

function changeTextH2 (){
	if(counter<3){
		if(historyChange){
			changeText.innerHTML = two;
			historyChange = false;
		}else{
			changeText.innerHTML = one;
			historyChange = true;
			counter ++;
		}
		setTimeout(changeTextH2,2000);
	}else{
		return;
	}
};


window.onload = function() {
    setTimeout(changeTextH2,16000);
}