import { Component, OnInit, ViewChild } from '@angular/core';

import AOS from 'aos';
import { SwiperComponent } from 'ngx-swiper-wrapper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuestionService } from './services/question.service';
import { MzToastService } from 'ngx-materialize';
import { Question } from './models/question.interface';
import { Observable } from 'rxjs';
import { MessagingService } from './services/messaging.service';

declare var $: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	questionForm: FormGroup;
	questions: Observable<Question[]>;

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
		'why',
		'thanks'
	];

	constructor(
		private fb: FormBuilder,
		private questionService: QuestionService,
		private toastService: MzToastService,
		private msgService: MessagingService
	) {
		this.questionForm = this.fb.group({
			'question': ['', [Validators.required]]
		});
	}

	ngOnInit() {
		this.questions = this.questionService.getAllQuestion();

		this.msgService.getPermission();
		this.msgService.receiveMessage();
		this.msgService.currentMessage.subscribe((message) => {
			if (message) {
				this.toastService.show(`${message.title} : ${message.body}`, 4000, 'light-blue');
			}
		});

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
			afterResize: () => {
				AOS.refresh();
			}
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

	async submitQuestion() {
		const quesObj: any = this.questionForm.value;
		quesObj.timestamp = new Date();

		if (this.questionForm.valid) {
			await this.questionService.addNewQuestion(quesObj);
			this.questionForm.reset();
		}
	}
}
