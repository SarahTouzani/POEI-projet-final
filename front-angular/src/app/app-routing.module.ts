import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppcarouselComponent } from './appcarousel/appcarousel.component';
import { AppcontactComponent } from './appcontact/appcontact.component';
import { AppimgComponent } from './appimg/appimg.component';

const routes: Routes = [
  { path: 'appcarousel', component: AppcarouselComponent },
  { path: 'appheader', component: AppHeaderComponent },
  { path: 'appfooter', component: AppFooterComponent },
  { path: 'appimg', component: AppimgComponent },
  { path: 'appcontact', component: AppcontactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
