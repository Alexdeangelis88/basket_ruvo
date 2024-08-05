import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  title : string = "staff";
  macrocategoria : string = '3';
  constructor() { }

  ngOnInit(): void {
  }

}
