import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/content/home/home.component';
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
import { DettaglioNewsComponent } from './components/content/news/dettaglio-news/dettaglio-news.component';

const routes: Routes = [
  { path: "" , redirectTo: "home" , pathMatch: "full"},
  { path: "home" , component: HomeComponent},
  { path: "storia" , component: StoriaComponent},
  { path: "organigramma" , component: OrganigrammaComponent},
  { path: "roster" , component: RosterComponent},
  { path: "staff" , component: StaffComponent},
  { path: "classifica" , component: ClassificaComponent},
  { path: "calendario" , component: CalendarioComponent},
  { path: "news" , component: NewsComponent},
  { path: "sponsor" , component: SponsorComponent},
  { path: "biglietteria" , component: BiglietteriaComponent},
  { path: "contatti" , component: ContattiComponent},
  { path: "news/:title" , component: DettaglioNewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
