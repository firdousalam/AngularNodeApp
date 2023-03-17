import { Component,ViewChild } from '@angular/core';
import {MessageComponent} from './components/message.component'
import { NavbarComponentComponent } from './components/navbar.component/navbar.component.component'
@Component({
  selector: 'app-root',
  template: `<div>
               <app-navbar></app-navbar>
               <router-outlet></router-outlet>
               `,
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
