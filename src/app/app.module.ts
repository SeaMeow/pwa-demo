import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MnFullpageModule } from 'ngx-fullpage';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
// tslint:disable-next-line:max-line-length
import { MzIconModule, MzIconMdiModule, MzCardModule, MzCollectionModule, MzButtonModule, MzModalModule, MzInputModule, MzTextareaModule, MzSidenavModule } from 'ngx-materialize';

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
		MzSidenavModule
	],
	providers: [
		{
			provide: SWIPER_CONFIG,
			useValue: DEFAULT_SWIPER_CONFIG
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
