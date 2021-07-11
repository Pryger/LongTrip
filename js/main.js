/* SLIDER HEADER */

var lenthPixel = 51;

$('.next__arrow').click(function () {
	lenthPixel += 184;
	if (lenthPixel > 420) {
		lenthPixel = 51;
	}
	$('.point__headslider').animate({ "top": lenthPixel + "px" }, 500);

	if (lenthPixel == 51) {
		$('.textslideNepal').fadeOut(800);
		$('.textslideIndia').fadeIn(800);
	}
	if (lenthPixel == 235) {
		$('.textslideIndia').fadeOut(800);
		$('.textslideChina').fadeIn(800);
	}
	if (lenthPixel == 419) {
		$('.textslideChina').fadeOut(800);
		$('.textslideNepal').fadeIn(800);
	}
});

$('.last__arrow').click(function () {
	lenthPixel -= 184;
	if (lenthPixel < 50) {
		lenthPixel = 419;
	}
	$('.point__headslider').animate({ "top": lenthPixel + "px" }, 500);

	if (lenthPixel == 51) {
		$('.textslideChina').fadeOut(800);
		$('.textslideIndia').fadeIn(800);
	}
	if (lenthPixel == 235) {
		$('.textslideNepal').fadeOut(800);
		$('.textslideChina').fadeIn(800);
	}
	if (lenthPixel == 419) {
		$('.textslideIndia').fadeOut(800);
		$('.textslideNepal').fadeIn(800);
	}
});

/* MAIN SLIDER */

$(function () {
	let curSlide = 0;
	let lineOfset = 252;
	let sliderWrapper = $('.slider-wrapper');
	$('.slider__right').click(function () {
		if (curSlide < 2) {
			curSlide++;
			sliderWrapper.css('transform', 'translate(' + - curSlide * 100 + '%, 0)')
			$('.one__linepoint').animate({ "left": lineOfset * curSlide + "px" }, 300);
		}
	});
	$('.slider__left').click(function () {
		if (curSlide > 0) {
			curSlide--;
			sliderWrapper.css('transform', 'translate(' + - curSlide * 100 + '%, 0)')
			$('.one__linepoint').animate({ "left": lineOfset * curSlide + "px" }, 300);
		}
	});
});

/*--------------------------------------*/

/* ADVANTAGES */

$(function () {
	$('.draggable').draggable({
		containment: "parent"
	}).filter('.box').draggable("option", "axis", "x");

	$('.draggable').draggable({
		grid: [0, 145]
	});
});

/*---*/

var poinscrol;
var comparison;

setInterval(function () {
	poinscrol = $('.draggable').css('top');
	comparison = poinscrol[poinscrol.length - 3];
	poinscrol = poinscrol.replace(comparison + 'px', comparison);


	if (poinscrol == 30) {
		$('.activeQ').removeClass('activeQ');
		$('.musckOne').addClass('activeQ');

		$('.im').css({ 'transform': 'scale(.9)', 'z-index': '0' });
		$('.cl').eq(0).css({ 'transform': 'scale(1)', 'z-index': '5' });
		$('.cr').eq(0).css({ 'transform': 'scale(1)', 'z-index': '5' });
	}

	if (poinscrol == 175) {
		$('.activeQ').removeClass('activeQ');
		$('.musckTwo').addClass('activeQ');

		$('.im').css({ 'transform': 'scale(.9)', 'z-index': '0' });
		$('.cl').eq(1).css({ 'transform': 'scale(1)', 'z-index': '5' });
		$('.cr').eq(1).css({ 'transform': 'scale(1)', 'z-index': '5' });
	}

	if (poinscrol == 320) {
		$('.activeQ').removeClass('activeQ');
		$('.musckThree').addClass('activeQ');

		$('.im').css({ 'transform': 'scale(.9)', 'z-index': '0' });
		$('.cl').eq(2).css({ 'transform': 'scale(1)', 'z-index': '5' });
		$('.cr').eq(2).css({ 'transform': 'scale(1)', 'z-index': '5' });
	}

	if (poinscrol == 465) {
		$('.activeQ').removeClass('activeQ');
		$('.musckFour').addClass('activeQ');

		$('.im').css({ 'transform': 'scale(.9)', 'z-index': '0' });
		$('.cl').eq(3).css({ 'transform': 'scale(1)', 'z-index': '5' });
		$('.cr').eq(3).css({ 'transform': 'scale(1)', 'z-index': '5' });
	}

	if (poinscrol == 610) {
		$('.activeQ').removeClass('activeQ');
		$('.musckFive').addClass('activeQ');

		$('.im').css({ 'transform': 'scale(.9)', 'z-index': '0' });
		$('.cl').eq(4).css({ 'transform': 'scale(1)', 'z-index': '5' });
		$('.cr').eq(4).css({ 'transform': 'scale(1)', 'z-index': '5' });
	}
	if (poinscrol > 610) {
		$('.draggable').css('top', '610px');
	}
	if (poinscrol < 30) {
		$('.draggable').css('top', '30px');
	}
}, 10);

var top;
var count;

setInterval(function () {
	top = poinscrol;
	top += 145;
	$('.draggable').css('top', top + 'px');
}, 2000);

/*---*/

$('.one__mark').click(function () {
	$('.draggable').css('top', '30px');
});
$('.two__mark').click(function () {
	$('.draggable').css('top', '175px');
});
$('.three__mark').click(function () {
	$('.draggable').css('top', '320px');
});
$('.four__mark').click(function () {
	$('.draggable').css('top', '465px');
});
$('.five__mark').click(function () {
	$('.draggable').css('top', '610px');
});

/* LIVING */





