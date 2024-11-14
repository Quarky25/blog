import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"about", component: AboutUsComponent},
  {path:"contact", component: ContactFormComponent},
  {path:"details/:id", component: PostDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatMenuTrigger, MatMenu, MatMenuItem, MatListModule, MatToolbarModule, MatButtonModule, MatIconModule],
  exports: [RouterModule, MatMenuTrigger, MatMenu, MatMenuItem, MatListModule, MatToolbarModule, MatButtonModule, MatIconModule]
})
export class AppRoutingModule { }
