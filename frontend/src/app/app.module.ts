import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './components/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {ServiceMessage} from "./services/service.message";
import { HttpClientModule } from '@angular/common/http';
import { NewMessageComponent } from './components/new.message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NewMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceMessage],
  bootstrap: [AppComponent]
})
export class AppModule { }
