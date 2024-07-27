import { Component } from '@angular/core';
import { SidenavPageComponent } from 'src/app/shared/sidenav-page/sidenav-page.component';

@Component({
  selector: 'app-dettaglio-news',
  templateUrl: './dettaglio-news.component.html',
  styleUrl: './dettaglio-news.component.css'
})
export class DettaglioNewsComponent {
  title : string = "news";
  constructor() { }

  ngOnInit(): void {
  }

}
