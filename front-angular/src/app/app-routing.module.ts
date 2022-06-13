import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppcarouselComponent } from './appcarousel/appcarousel.component';
import { AppimgComponent } from './appimg/appimg.component';

const routes: Routes = [
  { path: 'appcarousel', component: AppcarouselComponent },
  { path: 'appimg', component: AppimgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
