import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { MzIconModule, MzIconMdiModule, MzCardModule, MzCollectionModule, MzButtonModule, MzModalModule, MzInputModule, MzTextareaModule, MzSidenavModule, MzToastModule } from 'ngx-materialize';
@NgModule({
	imports: [
		MzCardModule,
		MzToastModule,
		MzIconModule,
		MzIconMdiModule,
		MzCardModule,
		MzCollectionModule,
		MzButtonModule,
		MzModalModule,
		MzInputModule,
		MzTextareaModule,
		MzSidenavModule,
	],
	exports: [
		MzCardModule,
		MzToastModule,
		MzIconModule,
		MzIconMdiModule,
		MzCardModule,
		MzCollectionModule,
		MzButtonModule,
		MzModalModule,
		MzInputModule,
		MzTextareaModule,
		MzSidenavModule,
	]
})
export class MaterializeModule { }
