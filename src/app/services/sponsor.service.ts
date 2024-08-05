import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { anaTipoSponsor } from '../model/sponsor/anaTipoSponsor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  private API_URL= environment.API_URL;

  constructor(private http: HttpClient) { }

  public GetStrutturaSponsor() : Observable<anaTipoSponsor[]>{
    return this.http.get<anaTipoSponsor[]>(this.API_URL+'/api/Sponsor/getStrutturaSponsor');
  }
}
