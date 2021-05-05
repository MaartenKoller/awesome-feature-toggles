import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlagsComponent} from './flags/flags.component';
import {HttpClientModule} from '@angular/common/http';
import {DlDateTimeDateModule, DlDateTimePickerModule} from 'angular-bootstrap-datetimepicker';
import {FormsModule} from '@angular/forms';
import {CountdownModule} from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    FlagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: FlagsComponent},
    ]),
    HttpClientModule,
    FormsModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    CountdownModule
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
