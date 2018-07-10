import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material';
import 'hammerjs';


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    
    BrowserModule,
    routing,
    HttpModule,
    MatButtonModule,
    MatToolbarModule
 
  ],

  providers: [
    LoginService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
