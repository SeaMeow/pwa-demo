import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MnFullpageModule } from 'ngx-fullpage';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
// tslint:disable-next-line:max-line-length
import { MzIconModule, MzIconMdiModule, MzCardModule, MzCollectionModule, MzButtonModule, MzModalModule, MzInputModule, MzTextareaModule, MzSidenavModule, MzToastModule } from 'ngx-materialize';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { QuestionService } from './services/question.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
	direction: 'horizontal',
	navigation: false,
	pagination: true,
};

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		MnFullpageModule.forRoot(),
		SwiperModule,
		MzIconModule,
		MzIconMdiModule,
		MzCardModule,
		MzCollectionModule,
		MzButtonModule,
		MzModalModule,
		MzInputModule,
		MzTextareaModule,
		MzSidenavModule,
		MzToastModule,
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
	],
	providers: [
		{
			provide: SWIPER_CONFIG,
			useValue: DEFAULT_SWIPER_CONFIG
		},
		QuestionService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
