import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { ProcessValuesPageComponent } from './page/process-values-page/process-values-page.component';
import { ProcessValuesListComponent } from './component/process-values-list/process-values-list.component';
import { ProcessValueCreatePageComponent } from './page/process-value-create-page/process-value-create-page.component';
import { ProcessValueFormComponent } from './component/process-value-form/process-value-form.component';
import { ProcessValueDetailsPageComponent } from './page/process-value-details-page/process-value-details-page.component';
import { ProcessValueDeleteComponent } from './component/process-value-delete/process-value-delete.component';


@NgModule({
  declarations: [
    ProcessValuesPageComponent,
    ProcessValuesListComponent,
    ProcessValueCreatePageComponent,
    ProcessValueFormComponent,
    ProcessValueDetailsPageComponent,
    ProcessValueDeleteComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProcessValueModule {
}
