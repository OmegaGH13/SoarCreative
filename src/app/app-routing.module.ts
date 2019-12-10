import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'client', component: ClientViewComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'book', component: BookComponent
  },
  {
    path: 'about', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }