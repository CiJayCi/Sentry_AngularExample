import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sentry Error App';
  
  throwError(event) {
	  event.preventDefault();
	  throw new Error('Error thrown.');
  }
}
