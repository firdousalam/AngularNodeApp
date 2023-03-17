import { Component } from '@angular/core';
import {MessageComponent} from './components/message.component'
import { NewMessageComponent } from './components/new.message.component';
@Component({
  selector: 'app-root',
  template: `<div>
                <h1>Hello Board </h1>
                <new-message></new-message>
                <messages></messages>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mycode';


}
