import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fab} from '@fortawesome/free-brands-svg-icons';
import {PageComponent} from './component/page/page.component';
import {PageWithMenuComponent} from './component/page-with-menu/page-with-menu.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {InputErrorComponent} from './component/input-error/input-error.component';
import {StatementComponent} from './component/statement/statement.component';
import {HttpClientModule} from "@angular/common/http";
import {YesOrNoPipe} from './pipe/yes-or-no.pipe';
import {ElementStateDirective} from './directive/element-state.directive';
import {TileComponent} from './component/tile/tile.component';
import {CardComponent} from './component/card/card.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatMenuModule} from "@angular/material/menu";
import {ForbiddenPageComponent} from './page/forbidden-page/forbidden-page.component';
import {ConfirmationDialogComponent} from './component/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {RoleAccessDirective} from './directive/role-access.directive';
import { AddButtonComponent } from './component/add-button/add-button.component';
import { PageWithInfoComponent } from './component/page-with-info/page-with-info.component';
import { IconSelectorComponent } from './component/icon-selector/icon-selector.component';
import { EditButtonComponent } from './component/edit-button/edit-button.component';
import { RemoveElementComponent } from './component/remove-element/remove-element.component';
import { UnitPipe } from './pipe/unit.pipe';
import { LocalDateTimePipe } from './pipe/local-date-time.pipe';
import { CommunicationErrorComponent } from './component/communication-error/communication-error.component';
import { ZeroDigitsPipe } from './pipe/zero-digits.pipe';
import { LocalTimePipe } from './pipe/local-time.pipe';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { OneDigitsPipe } from './pipe/one-digits.pipe';
import {DateFilterFormComponent} from "./component/date-filter-form/date-filter-form.component";
import { SingleDateFilterComponent } from './component/single-date-filter/single-date-filter.component';

@NgModule({
  declarations: [
    DateFilterFormComponent,
    PageComponent,
    PageWithMenuComponent,
    InputErrorComponent,
    StatementComponent,
    YesOrNoPipe,
    ElementStateDirective,
    TileComponent,
    CardComponent,
    ForbiddenPageComponent,
    ConfirmationDialogComponent,
    RoleAccessDirective,
    AddButtonComponent,
    PageWithInfoComponent,
    IconSelectorComponent,
    EditButtonComponent,
    RemoveElementComponent,
    UnitPipe,
    LocalDateTimePipe,
    CommunicationErrorComponent,
    ZeroDigitsPipe,
    LocalTimePipe,
    ProgressBarComponent,
    OneDigitsPipe,
    SingleDateFilterComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatTabsModule,
    MatMenuModule,
    MatDialogModule,
  ],
  exports: [
    FontAwesomeModule,
    PageComponent,
    PageWithMenuComponent,
    RouterOutlet,
    ReactiveFormsModule,
    InputErrorComponent,
    StatementComponent,
    HttpClientModule,
    RouterModule,
    YesOrNoPipe,
    ElementStateDirective,
    TileComponent,
    CardComponent,
    MatTabsModule,
    MatMenuModule,
    ForbiddenPageComponent,
    ConfirmationDialogComponent,
    RoleAccessDirective,
    AddButtonComponent,
    PageWithInfoComponent,
    IconSelectorComponent,
    EditButtonComponent,
    RemoveElementComponent,
    LocalDateTimePipe,
    CommunicationErrorComponent,
    ZeroDigitsPipe,
    LocalTimePipe,
    ProgressBarComponent,
    OneDigitsPipe,
    DateFilterFormComponent,
    SingleDateFilterComponent
  ]
})
export class SharedModule {
  constructor(private library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
