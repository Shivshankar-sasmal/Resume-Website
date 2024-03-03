$('.owl-carousel-1').owlCarousel({
	loop : true,
	margin : 10,
	nav : false,
	dots : false,
	items : 3,
	autoplay : true,
	autoplayTimeout : 1700,
	stagePadding : 25,

	responsive : {
		0 : {
			items : 1
		},

		765 : {
			items : 2
		},

		1000 : {
			items : 3
		},
	}	
})