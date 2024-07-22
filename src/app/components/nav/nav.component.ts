import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  changeNavbarSelected(sel : string , subsel : string = ""){
    var elements = document.getElementsByClassName("element-li");
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    Array.prototype.forEach.call(elements, function(el) {
      if(el.classList.contains('active'))
      {
        el.classList.remove("active")
      }      
    });

    document.getElementById("li-"+sel)?.classList.add("active");
    if(subsel != ""){
      document.getElementById("li-"+sel+"-"+subsel)?.classList.add("active");
    }  
  }
}
