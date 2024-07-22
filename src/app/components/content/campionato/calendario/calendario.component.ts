import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  giornta: string;
  partita: string;
  data: string;
  orario: string;
  risultato: string;
  palazzetto: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {giornta: '1° giornata' , partita: 'General Contractor Jesi vs Ruvo' , data: '01/10/2023' , orario:'18:00' , risultato:'100-99' , palazzetto: 'PalaTriccoli'  },
  {giornta: '1° giornata' , partita: 'General Contractor Jesi vs Ruvo' , data: '01/10/2023' , orario:'18:00' , risultato:'100-99' , palazzetto: 'PalaTriccoli'  },
  {giornta: '1° giornata' , partita: 'General Contractor Jesi vs Ruvo' , data: '01/10/2023' , orario:'18:00' , risultato:'100-99' , palazzetto: 'PalaTriccoli'  },
  {giornta: '1° giornata' , partita: 'General Contractor Jesi vs Ruvo' , data: '01/10/2023' , orario:'18:00' , risultato:'100-99' , palazzetto: 'PalaTriccoli'  },
  {giornta: '1° giornata' , partita: 'General Contractor Jesi vs Ruvo' , data: '01/10/2023' , orario:'18:00' , risultato:'100-99' , palazzetto: 'PalaTriccoli'  },
  {giornta: '1° giornata' , partita: 'General Contractor Jesi vs Ruvo' , data: '01/10/2023' , orario:'18:00' , risultato:'100-99' , palazzetto: 'PalaTriccoli'  },
  {giornta: '1° giornata' , partita: 'General Contractor Jesi vs Ruvo' , data: '01/10/2023' , orario:'18:00' , risultato:'100-99' , palazzetto: 'PalaTriccoli'  },
  {giornta: '1° giornata' , partita: 'General Contractor Jesi vs Ruvo' , data: '01/10/2023' , orario:'18:00' , risultato:'100-99' , palazzetto: 'PalaTriccoli'  },
  {giornta: '1° giornata' , partita: 'General Contractor Jesi vs Ruvo' , data: '01/10/2023' , orario:'18:00' , risultato:'100-99' , palazzetto: 'PalaTriccoli'  },
  {giornta: '1° giornata' , partita: 'General Contractor Jesi vs Ruvo' , data: '01/10/2023' , orario:'18:00' , risultato:'100-99' , palazzetto: 'PalaTriccoli'  },
  {giornta: '1° giornata' , partita: 'General Contractor Jesi vs Ruvo' , data: '01/10/2023' , orario:'18:00' , risultato:'100-99' , palazzetto: 'PalaTriccoli'  },
  {giornta: '1° giornata' , partita: 'General Contractor Jesi vs Ruvo' , data: '01/10/2023' , orario:'18:00' , risultato:'100-99' , palazzetto: 'PalaTriccoli'  },
  {giornta: '1° giornata' , partita: 'General Contractor Jesi vs Ruvo' , data: '01/10/2023' , orario:'18:00' , risultato:'100-99' , palazzetto: 'PalaTriccoli'  },
  {giornta: '1° giornata' , partita: 'General Contractor Jesi vs Ruvo' , data: '01/10/2023' , orario:'18:00' , risultato:'100-99' , palazzetto: 'PalaTriccoli'  }
];

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  title : string = "calendario";
  displayedColumns: string[] = ['giornta', 
    'partita', 
    'data',
    'orario',    
    'risultato',
    'palazzetto'];
    dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
