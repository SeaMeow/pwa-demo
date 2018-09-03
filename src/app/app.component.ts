import { Component, OnInit, ViewChild } from '@angular/core';

import AOS from 'aos';
import { SwiperComponent } from 'ngx-swiper-wrapper';

declare var $: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	@ViewChild('aboutslide') aboutslide: SwiperComponent;
	@ViewChild('introslide') introslide: SwiperComponent;
	@ViewChild('exampleslide') exampleslide: SwiperComponent;
	@ViewChild('whyslide') whyslide: SwiperComponent;
	title = 'app';
	initialized = false;

	slides = [
		'first',
		'intro',
		'about',
		'example',
		'why'
	];

	constructor(
	) {
	}
	ngOnInit() {
		AOS.init({
			duration: 800,
			mirror: true,
			delay: 100,
			offset: 0
		});
		$.scrollify({
			section: '.slide-content',
			scrollbars: false,
			easing: 'easeOutExpo',
			after: this.slideChanged,
		});
	}

	previousSlide(slidename) {
		if (slidename === 'about') {
			this.aboutslide.directiveRef.prevSlide();
		} else if (slidename === 'intro') {
			this.introslide.directiveRef.prevSlide();
		} else if (slidename === 'example') {
			this.exampleslide.directiveRef.prevSlide();
		} else if (slidename === 'why') {
			this.whyslide.directiveRef.prevSlide();
		}


		return false;
	}

	nextSlide(slidename) {
		if (slidename === 'about') {
			this.aboutslide.directiveRef.nextSlide();
		} else if (slidename === 'intro') {
			this.introslide.directiveRef.nextSlide();
		} else if (slidename === 'example') {
			this.exampleslide.directiveRef.nextSlide();
		} else if (slidename === 'why') {
			this.whyslide.directiveRef.nextSlide();
		}
	}

	resetSlide() {
		this.aboutslide.directiveRef.setIndex(0);
	}

	slideChanged(index) {
		$('.pagination-bullets').removeClass('active');
		$(`.pagination-bullets:eq(${index})`).addClass('active');
	}

	goToSlide(index) {
		$.scrollify.move(index);
	}
}
