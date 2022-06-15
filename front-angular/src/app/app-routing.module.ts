import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppcarouselComponent } from './appcarousel/appcarousel.component';
import { AppimgComponent } from './appimg/appimg.component';
import { EntreprisesComponent } from './entreprise/entreprises/entreprises.component';
import { PrestationsComponent } from './prestation/prestations/prestations.component';

const routes: Routes = [
  { path: 'appcarousel', component: AppcarouselComponent },
  { path: 'appimg', component: AppimgComponent },
  { path: 'entreprises', component: EntreprisesComponent },
  { path: 'prestations', component: PrestationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
