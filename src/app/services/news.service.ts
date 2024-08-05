import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NotizieDTO } from '../model/content/news/news.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private API_URL= environment.API_URL;

  constructor(private http: HttpClient) { }

  public getNewsHome( ) : Observable<NotizieDTO[]>{
    return this.http.get<NotizieDTO[]>(this.API_URL+'/api/News');
  }

  public aumentaNumeroVisualizzazioni( id : number ) : Observable<any>{
    return this.http.post<any>(this.API_URL+'/api/News/aumentaNumeroVisualizzazioni/'+id, null);
  }
}
