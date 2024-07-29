import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderSecondaryComponent } from './components/header-secondary/header-secondary.component';
import { NavComponent } from './components/nav/nav.component';
import { ContentComponent } from './components/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { MatTableModule } from '@angular/material/table'  
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule} from '@angular/material/dialog';
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
import { DettaglioNewsComponent } from './components/content/news/dettaglio-news/dettaglio-news.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffGiovaniliComponent } from './components/giovanili/staff-giovanili/staff-giovanili.component';
import { RosterGiovaniliComponent } from './components/giovanili/roster-giovanili/roster-giovanili.component';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { LogInComponent } from './components/header/log-in/log-in.component';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { MessageComponent } from './shared/utilities/message/message.component';
import { AuthInterceptor } from './services/auth.interceptor';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

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
  MatBadgeModule,
  MatDialogModule,
  MatSelectModule,
  MatInputModule,
  MatTableModule,
  MatCardModule,
  MatOptionModule
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
    CardTeamComponent,
    DettaglioNewsComponent,
    StaffGiovaniliComponent,
    RosterGiovaniliComponent,
    LogInComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    material,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [material] ,
  providers: [
    provideHttpClient(),
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
