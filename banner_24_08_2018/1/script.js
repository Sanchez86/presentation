var startNow=function(){
	new WOW().init();
	setTimeout(function(){ 
		$('.bg, .b_logo, .pilot, .startup').css({
		'opacity':'0',
		'transition': '0.5s'
	})}, 8000);

	setTimeout(function(){ 
		$('.bg, .b_logo, .pilot, .startup').css({
		'display':'none',
		'transition': '0.5s'
	})}, 8500);
};
startNow();


function timer() {
    var nowDate = new Date();
    var achiveDate = new Date(2018,8,19,12,0,0);
    var result = (achiveDate - nowDate)+1000;
    if (result < 0) {
        var elmnt = document.getElementById('timer');
        elmnt.innerHTML = ' - : - - : - - : - - ';
        return undefined;
    }
    var seconds = Math.floor((result/1000)%60);
    var minutes = Math.floor((result/1000/60)%60);
    var hours = Math.floor((result/1000/60/60)%24);
    var days = Math.floor(result/1000/60/60/24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    var day = document.getElementById('day');
    var hour = document.getElementById('hour');
    var minute = document.getElementById('minute');
    var second = document.getElementById('second');
    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;


    setTimeout(timer, 1000);
}
window.onload = function() {
    timer();
}