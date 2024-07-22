import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderSecondaryComponent } from './components/header-secondary/header-secondary.component';
import { NavComponent } from './components/nav/nav.component';
import { ContentComponent } from './components/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPopper } from 'angular-popper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'; 
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { HomeComponent } from './components/content/home/home.component';
import { UltimiComunicatiComponent } from './components/content/home/ultimi-comunicati/ultimi-comunicati.component';
import { StoriaComponent } from './components/content/societa/storia/storia.component';
import { OrganigrammaComponent } from './components/content/societa/organigramma/organigramma.component';
import { RosterComponent } from './components/content/squadra/roster/roster.component';
import { StaffComponent } from './components/content/squadra/staff/staff.component';
import { ClassificaComponent } from './components/content/campionato/classifica/classifica.component';
import { CalendarioComponent } from './components/content/campionato/calendario/calendario.component';
import { NewsComponent } from './components/content/news/news.component';
import { SponsorComponent } from './components/content/sponsor/sponsor.component';
import { BiglietteriaComponent } from './components/content/biglietteria/biglietteria.component';
import { ContattiComponent } from './components/content/contatti/contatti.component';
import { HeaderPageComponent } from './shared/header-page/header-page.component';
import { SidenavPageComponent } from './shared/sidenav-page/sidenav-page.component';
import { SidenavUltimeNewsComponent } from './shared/sidenav-page/sidenav-ultime-news/sidenav-ultime-news.component';
import { SidenavSocialComponent } from './shared/sidenav-page/sidenav-social/sidenav-social.component';
import { SidenavClassificaComponent } from './shared/sidenav-page/sidenav-classifica/sidenav-classifica.component';
import { SidenavSponsorComponent } from './shared/sidenav-page/sidenav-sponsor/sidenav-sponsor.component';
import { CardTeamComponent } from './components/content/card-team/card-team.component'
import { MatTableModule } from '@angular/material/table'  

const material = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatBadgeModule
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderSecondaryComponent,
    NavComponent,
    ContentComponent,
    HomeComponent,
    UltimiComunicatiComponent,
    StoriaComponent,
    OrganigrammaComponent,
    RosterComponent,
    StaffComponent,
    ClassificaComponent,
    CalendarioComponent,
    NewsComponent,
    SponsorComponent,
    BiglietteriaComponent,
    ContattiComponent,
    HeaderPageComponent,
    SidenavPageComponent,
    SidenavUltimeNewsComponent,
    SidenavSocialComponent,
    SidenavClassificaComponent,
    SidenavSponsorComponent,
    CardTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    material,
    FontAwesomeModule,
    NgbModule,
    NgxPopper,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
