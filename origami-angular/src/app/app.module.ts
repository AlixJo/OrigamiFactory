import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {EtapeComponent} from './etape/etape.component';
import {CategorieComponent} from './categorie/categorie.component';
import {AdminComponent} from './admin/admin.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OrigamiComponent} from './origami/origami.component';
import {AppConfigService} from './app-config.service';
import {CategorieService} from './categorie/categorie.service';
import {NavbarComponent} from './navbar/navbar.component';
import {OrigamiService} from './origami/origami.service';
import {OrigamiDetailComponent} from './origami-detail/origami-detail.component';
import {EtapeService} from './etape/etape.service';
import {AdminService} from './admin/admin.service';
import {CategorieDetailComponent} from './categorie/categorie-detail.component';


const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'categorie', component: CategorieComponent},
  {path: 'categorie/:id', component: CategorieDetailComponent},
  {path: 'origami', component: OrigamiComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
 // { path: 'origami/id', component: OrigamiDetailComponent, canActivate:[EtapeService]},
  { path: "origami/:id", component: OrigamiDetailComponent,}
]

@NgModule({
  declarations: [
    AppComponent,
    EtapeComponent,
    CategorieComponent,
    AdminComponent,
    HomeComponent,
    OrigamiComponent,
    NavbarComponent,
    CategorieDetailComponent,
    OrigamiDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AppConfigService,
    CategorieService,
    OrigamiService,
    EtapeService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
