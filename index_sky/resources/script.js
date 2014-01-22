function Sky() {
	var sky = this;
	var offset;
	
	this.init = function() {
		sky.offset = new Array(sky.getOffset(), sky.getOffset(), sky.getOffset());
	}
	this.getOffset = function() {
		return Math.round(Math.floor(Math.random()*$(window).width()))
	}
	this.s1 = function() {
		--sky.offset[0];
		$('#cloud').css('background-position', sky.offset[0]+'px 100px');
		setTimeout('sky.s1()', 100);
	}
	this.s2 = function() {
		--sky.offset[1];
		$('#mincloud').css('background-position', sky.offset[1]+'px 240px');
		setTimeout('sky.s2()', 60);
	}
	this.chbg = function(defhour, deffrequpdate) {
		frequpdate = (deffrequpdate === undefined) ? 1800000 : deffrequpdate; // 30 minutes
		hour = (defhour === undefined) ? new Date().getHours() : defhour;
		bg = $('body').css('background-color');
		if(hour >= 4 && hour < 7)
			bg = '#ff8c64';
		else if(hour >= 7 && hour < 16)
			bg = '#96d1ff';
		else if(hour >= 16 && hour < 19)
			bg = '#1eacfd';
		else if(hour >= 19 && hour < 21)
			bg = '#0b3283';
		else if(hour >= 19)
			bg = '#17071c';
		else if(hour < 4)
			bg = '#17071c';
		$('body').css('background-color', bg);
		if(hour >= 5 && hour < 20)
			$('#circle').attr('src', 'resources/sun.png');
		else
			$('#circle').attr('src', 'resources/moon.png');
		setTimeout('sky.chbg('+defhour+', '+frequpdate+')', frequpdate);
	}
}

$(document).ready(function() {
	sky = new Sky();
	sky.init();
	sky.chbg();
	sky.s1();
	sky.s2();
});
