import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"about", component: AboutUsComponent},
  {path:"contact", component: ContactFormComponent},
  {path:"details/:id", component: PostDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
