import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppimgComponent } from './appimg/appimg.component';
import { AppcarouselComponent } from './appcarousel/appcarousel.component';
import { EntreprisesComponent } from './entreprise/entreprises/entreprises.component';
import { PrestationsComponent } from './prestation/prestations/prestations.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppimgComponent,
    AppcarouselComponent,
    EntreprisesComponent,
    PrestationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
