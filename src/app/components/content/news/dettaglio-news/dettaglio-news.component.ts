import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { newsModel } from 'src/app/model/content/news/news.model';
import { SidenavPageComponent } from 'src/app/shared/sidenav-page/sidenav-page.component';

@Component({
  selector: 'app-dettaglio-news',
  templateUrl: './dettaglio-news.component.html',
  styleUrl: './dettaglio-news.component.css'
})
export class DettaglioNewsComponent {
  title : string = "news";
  news: newsModel | any;
  constructor(private router : Router) { 
    this.news = this.router.getCurrentNavigation()?.extras.state?.data;
  }

  ngOnInit(): void {
  }

}
