import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';

import { AppComponent } from './app.component';

import * as Sentry from '@sentry/browser';

Sentry.init({
	dsn: 'https://a1a10f5f07724075a0ae523af5431118@sentry.io/1362398'
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
	constructor() {}
	handleError(error) {
		Sentry.captureException(error.originalError || error);
		console.error(error);
		throw error;
	}
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: ErrorHandler, useClass: SentryErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
