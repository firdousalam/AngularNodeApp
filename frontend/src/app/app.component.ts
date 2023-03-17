import { Component,ViewChild } from '@angular/core';
import {MessageComponent} from './components/message.component'
import { NewMessageComponent } from './components/new.message.component';
@Component({
  selector: 'app-root',
  template: `<div>
                <h1>Hello Board </h1>
                <new-message (onPosted)="onPosted($event)"></new-message>
                <messages></messages>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MessageComponent)
  messages!: MessageComponent;
  title = 'Mycode';
  onPosted(message:any){
    this.messages.messages.push(message);
  }

}
