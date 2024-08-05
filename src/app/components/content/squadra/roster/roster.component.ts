import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  title : string = "roster";
  macrocategoria : string = '2';
  constructor() { }

  ngOnInit(): void {
  }

}
