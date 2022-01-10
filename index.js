$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
		if(this.scrollY > 500){
			$('.scroll-up-btn').addClass("show");
		}
		else{
			$('.scroll-up-btn').removeClass("show");
		}
	});
	// slide up script
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
	});
	// toggle menu/navbar script
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});
	// typing animation script
	var typed = new Typed(".typing", {
		strings: ["Youtuber.","Programmer.","Graphic Designer.","Gamer.","Twitch Streamer.","Freelancer."],
		typeSpeed: 100,
		fadeOut: true,
		loop: true
	});
	var typed = new Typed(".typing-2", {
		strings: ["I'm a Youtuber.","I'm a Twitch Streamer.","specializing in Graphic Designing.","a Freelancer.","I love to play video games.","I'm learning Cyber Security."],
		typeSpeed: 100,
		fadeOut: true,
		loop: true
	});

	// play and pause section
	var song = document.getElementById("sound");
	var icons = document.getElementById("playicon");
	icons.onclick = function(){
		if(song.paused){
			song.play();
			icons.src = "./images/pause.png";
		}else{
			song.pause();
			icons.src = "./images/play.png"
		}
	}

	// owl carousel script
	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayhoverPause: true,
		responsive: {
			0:{
				items: 1,
				nav: false
			},
			600:{
				items: 1,
				nav: false
			}
		}
	});
});