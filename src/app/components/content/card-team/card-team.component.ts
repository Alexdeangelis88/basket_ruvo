import { Component, Input, OnInit } from '@angular/core';
import { assFigureToCategoria } from 'src/app/model/societa/assFigureToCategoria.model';
import { anaTipoFigura } from 'src/app/model/societa/figure/anaTipoFigura.model';
import { SocietaService } from 'src/app/services/societa.service';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.css']
})
export class CardTeamComponent implements OnInit {
  @Input() public macrocategoria: string = '';
  componenti : assFigureToCategoria | any;

  constructor(private serivce : SocietaService) { }

  ngOnInit(): void {
    this.serivce.getAllFigureSocietaByIdCategoria(this.macrocategoria).subscribe(r =>{this.componenti = r ; console.log(this.componenti)});
    
  }

  getRuoli(ruoli: anaTipoFigura[]){
    let descrizioneRuolo = "";
    for (let index = 0; index < ruoli.length; index++) {
      if(index == 0){
        descrizioneRuolo = ruoli[index].descrizione;
      }else{
        descrizioneRuolo = descrizioneRuolo + ' / ' + ruoli[index].descrizione;
      }
   }
   return descrizioneRuolo;
  }

}
