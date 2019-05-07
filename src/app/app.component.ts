import { Component } from '@angular/core';

import * as host from 'host';
const parsedUrl = host.parse('https://angular.io');
console.log(parsedUrl.hostname);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
}
