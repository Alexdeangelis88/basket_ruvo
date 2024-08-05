import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { assFigureToCategoria } from '../model/societa/assFigureToCategoria.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocietaService {
  private API_URL= environment.API_URL;

  constructor(private http: HttpClient) { }

  public getAllFigureSocietaByIdCategoria(id : string ) : Observable<assFigureToCategoria>{
    return this.http.get<assFigureToCategoria>(this.API_URL+'/api/Societa/getAllFigureSocietaByIdMacroCategoria/'+id);
  }
}
