import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NotizieDTO } from 'src/app/model/content/news/news.model';
import { SidenavPageComponent } from 'src/app/shared/sidenav-page/sidenav-page.component';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-dettaglio-news',
  templateUrl: './dettaglio-news.component.html',
  styleUrl: './dettaglio-news.component.css'
})
export class DettaglioNewsComponent implements OnInit  {
  title : string = "news";
  news: NotizieDTO ;
  constructor(private router : Router, private newsS : NewsService) { 
    this.news = this.router.getCurrentNavigation()?.extras.state?.data;   


  }

  ngOnInit(): void {
    this.aumentaNumeroVisualizzazioni();
  }

  aumentaNumeroVisualizzazioni(){
    return this.newsS.aumentaNumeroVisualizzazioni(this.news.id).subscribe( r =>{
      this.news = r;
    });
  }

}
