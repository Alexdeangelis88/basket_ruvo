import { Component, OnInit } from '@angular/core';
import { NotizieDTO } from '../../../model/content/news/news.model';
import { NavigationExtras, Router } from '@angular/router';
import { anaCategorieModel } from 'src/app/model/content/news/ana-categoria-news.mode';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title : string = "news";
  news: NotizieDTO[] = [];

  constructor(private router : Router , private newsS : NewsService) { }

  ngOnInit(): void {
    this.newsS.getNewsHome().subscribe(result => {this.news = result;});
  }

  dettaglioNotizia(n : NotizieDTO){
    const navigationExtras: NavigationExtras = {
      state: {
        data: n
      }
    };

    this.router.navigate(['/news/' + n.id] , navigationExtras);
  }

}
