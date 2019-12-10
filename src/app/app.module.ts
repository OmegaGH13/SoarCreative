import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ClientViewComponent } from './client-view/client-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BookComponent,
    ContactComponent,
    LoginComponent,
    ClientViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
