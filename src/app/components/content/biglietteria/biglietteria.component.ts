import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biglietteria',
  templateUrl: './biglietteria.component.html',
  styleUrls: ['./biglietteria.component.css']
})
export class BiglietteriaComponent implements OnInit {
  title : string = "biglietteria";
  constructor() { }

  ngOnInit(): void {
  }

}
