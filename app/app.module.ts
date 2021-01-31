import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';
import { Phone } from './core/phone/phone.service';
import { FormsModule } from '@angular/forms';
import { ApplicationRef } from '@angular/core';

import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { routeParamsProvider } from './ajs-upgraded-providers';
import { CheckmarkPipe } from './core/checkmark/checkmark.pipe';
import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MultiplyDirective} from './core/multiply/multiply.upgraded.component'
@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    Phone,
    routeParamsProvider,
    {
      provide: '$scope',
      useFactory: i => i.get('$rootScope'),
      deps: ['$injector']
    }
  ],
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailComponent,
    CheckmarkPipe,
    MultiplyDirective
  ],
  entryComponents: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailComponent
  ],
  bootstrap: []
})
export class AppModule {
    constructor(private upgrade: UpgradeModule,  private appRef: ApplicationRef) { }
    ngDoBootstrap() {
      this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
      this.appRef.bootstrap(AppComponent);
    }
}