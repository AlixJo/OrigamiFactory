import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EtapeComponent } from './etape/etape.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AdminComponent } from './admin/admin.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {OrigamiComponent} from './origami/origami.component';
import {AppConfigService} from './app-config.service';
import {CategorieService} from './categorie/categorie.service';
import {NavbarComponent} from './navbar/navbar.component';



const routes: Routes =[
  { path: 'admin', component: AdminComponent},
  { path: 'categorie', component: CategorieComponent},
  { path: 'origami', component: OrigamiComponent},
  { path: 'etape', component: EtapeComponent},
  { path: 'home', component: HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    EtapeComponent,
    CategorieComponent,
    AdminComponent,
    HomeComponent,
    OrigamiComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppConfigService,
    CategorieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
