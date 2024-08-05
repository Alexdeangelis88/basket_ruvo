import { Component, OnInit } from '@angular/core';
import { anaTipoSponsor } from 'src/app/model/sponsor/anaTipoSponsor';
import { SponsorService } from 'src/app/services/sponsor.service';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {
  title : string = "sponsor";
  ats : anaTipoSponsor[] = [];
  constructor(private serivce : SponsorService) { }

  ngOnInit(): void {
    this.serivce.GetStrutturaSponsor().subscribe(r =>{this.ats = r ; console.log(this.ats)});

  }

}
