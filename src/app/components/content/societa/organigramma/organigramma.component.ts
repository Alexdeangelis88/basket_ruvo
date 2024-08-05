import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organigramma',
  templateUrl: './organigramma.component.html',
  styleUrls: ['./organigramma.component.css']
})
export class OrganigrammaComponent implements OnInit {
  title : string = "organigramma";
  macrocategoria : string = '1';

  constructor() { }

  ngOnInit(): void {
  }

}



