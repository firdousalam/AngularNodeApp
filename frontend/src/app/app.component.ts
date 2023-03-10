import { Component } from '@angular/core';
import {MessageComponent} from './components/message.component'


@Component({
  selector: 'app-root',
  template: `
            <button mat-fab extended>
  <mat-icon>home</mat-icon>
  Home
</button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mycode';
}
