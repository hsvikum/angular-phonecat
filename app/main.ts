
import 'angular';
import 'angular-resource';
import 'angular-animate';
import 'angular-route';
import 'jquery';
import 'core-js';
import 'zone.js';


import './app.module.ajs';
import './app.config';
import './app.animations';

import './core/core.module';
import './phone-detail/phone-detail.module'
import './phone-list/phone-list.module'
import './core/phone/phone.module';

import './core/checkmark/checkmark.filter';
import './core/phone/phone.service';

import './phone-detail/phone-detail.component'
import './phone-list/phone-list.component'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);