import { Component } from '@angular/core';
import {MessageComponent} from './components/message.component'
@Component({
  selector: 'app-root',
  template: '<h1>Hello </h1><messages></messages>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mycode';
}
