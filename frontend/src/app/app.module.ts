import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
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
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavbarComponentComponent } from './components/navbar.component/navbar.component.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { UserMessageComponent } from './components/user-message/user-message.component';
import { RegistrationComponent } from './components/registration/registration.component';

var routes: Routes = [{
  path : '',
  component:RegistrationComponent
},

{
  path : 'messages',
  component:MessageComponent
},
{
  path : 'AddMessage',
  component:NewMessageComponent
},
{
  path : 'UserMessage/:name',
  component:UserMessageComponent
},
{
  path : 'Home',
  component:HomeComponent
}];
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NewMessageComponent,
    NavbarComponentComponent,
    HomeComponent,
    UserMessageComponent,
    RegistrationComponent
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
    FormsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ServiceMessage],
  bootstrap: [AppComponent]
})
export class AppModule { }
