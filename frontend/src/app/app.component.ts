import { Component } from '@angular/core';
import {MessageComponent} from './components/message.component'


@Component({
  selector: 'app-root',
  template: `
            <mat-card>
              <mat-card-content>
                <mat-divider></mat-divider>
                <section>
                  <div class="example-label">Raised</div>
                  <div class="example-button-row">
                    <button mat-raised-button>Basic</button>
                    <button mat-raised-button color="primary">Primary</button>
                    <button mat-raised-button color="accent">Accent</button>
                    <button mat-raised-button color="warn">Warn</button>
                    <button mat-raised-button disabled>Disabled</button>
                    <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>
                  </div>
                </section>
                
              </mat-card-content>
            </mat-card>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mycode';
}
