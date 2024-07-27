import { Component, OnInit } from '@angular/core';
import { newsModel } from '../../../model/content/news/news.model';
import { NavigationExtras, Router } from '@angular/router';
import { anaCategorieModel } from 'src/app/model/content/news/ana-categoria-news.mode';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title : string = "news";
  news: newsModel[] = [];

  constructor(private router : Router) { }

  ngOnInit(): void {
    let cat : anaCategorieModel[] = [];
    cat.push({idCategoria : 1 , descrizioneCategoria : "Comunicato"});
    cat.push({idCategoria : 2 , descrizioneCategoria : "News"});

    this.news.push({
      id : 1,
      pathImg : "../../../../assets/images/upload/giorgi.jpg",
      dataIns : "22 luglio alle ore 18:03" ,
      numeroVisualizzazione : 150,
      titolo : "Crifo Wines Ruvo di Puglia, altro guerriero nel pitturato: ecco Gianluca Giorgi!",
      descrizione : "La Crifo Wines Ruvo di Puglia è lieta di annunciare l'acquisizione delle prestazioni di Gianluca Giorgi, centro classe 1995, proveniente dalla Virtus Roma. Dotato di un fisico importante (200 cm), Giorgi ama svariare sul fronte d'attacco, essendo capace di far male sia dalla lunga distanza che nel piitturato. Il pivot toscano è giocatore moderno che lavora per la squadra, si sacrifica sotto ambo le plance, che non si tira indietro nei contatti fisici ed è in grado di portare alla squadra punti e rimbalzi preziosi. L'ex Roma ha avuto esperienze di spessore con le canotte di Montecatini, Alba, Libertas Livorno, Iseo, Valsesia basket Borgosesia e Vigevano. Prima di approdare alla Virtus, Giorgi vive una stagione da protagonista a Fiorenzuola, dove registra una prova monstre da 44 punti, 10 rimbalzi e 50 di valutazione. La sua stagione però termina anzitempo per la rottura del crociato. Ora il giocatore nato in provincia di Pisa è pronto per tornare nella terza categoria nazionale da protagonista, come affermato nella sua prima dichiarazione da giocatore ruvese: «Sono molto contento di entrare nella famiglia di Ruvo, è una squadra che punta sempre in alto, io sono contento e carico per questa nuova avventura, voglio tornare a dimostrare ciò che valgo, questo è il contesto giusto per farlo. Ho voglia di scoprire subito come sarà con i nuovi compagni, il nuovo allenatore, i nuovi tifosi: sono molto felice ed euforico, non vedo l'ora di cominciare». Altro colpo da novanta dunque per la Crifo Wines Ruvo di Puglia, grazie all'indefesso lavoro del DS Gianluigi Campanale e tutta la grande squadra biancoblu, che sta creando i presupposti per una stagione da protagonisti nella Serie B Old Wild West 2024/2025. Benvenuto Gianluca, nella famiglia biancoblu!",
      breveDescrizione : "La Crifo Wines Ruvo di Puglia è lieta di annunciare l'acquisizione delle prestazioni di Gianluca Giorgi, centro classe 1995 [...]" ,
      categorie : cat
      });

    this.news.push({
      id : 2,
      pathImg : "../../../../assets/images/upload/giorgi.jpg",
      dataIns : "22 luglio alle ore 18:03" ,
      numeroVisualizzazione : 150,
      titolo : "Crifo Wines Ruvo di Puglia, altro guerriero nel pitturato: ecco Gianluca Giorgi!",
      descrizione : "La Crifo Wines Ruvo di Puglia è lieta di annunciare l'acquisizione delle prestazioni di Gianluca Giorgi, centro classe 1995, proveniente dalla Virtus Roma. Dotato di un fisico importante (200 cm), Giorgi ama svariare sul fronte d'attacco, essendo capace di far male sia dalla lunga distanza che nel piitturato. Il pivot toscano è giocatore moderno che lavora per la squadra, si sacrifica sotto ambo le plance, che non si tira indietro nei contatti fisici ed è in grado di portare alla squadra punti e rimbalzi preziosi. L'ex Roma ha avuto esperienze di spessore con le canotte di Montecatini, Alba, Libertas Livorno, Iseo, Valsesia basket Borgosesia e Vigevano. Prima di approdare alla Virtus, Giorgi vive una stagione da protagonista a Fiorenzuola, dove registra una prova monstre da 44 punti, 10 rimbalzi e 50 di valutazione. La sua stagione però termina anzitempo per la rottura del crociato. Ora il giocatore nato in provincia di Pisa è pronto per tornare nella terza categoria nazionale da protagonista, come affermato nella sua prima dichiarazione da giocatore ruvese: «Sono molto contento di entrare nella famiglia di Ruvo, è una squadra che punta sempre in alto, io sono contento e carico per questa nuova avventura, voglio tornare a dimostrare ciò che valgo, questo è il contesto giusto per farlo. Ho voglia di scoprire subito come sarà con i nuovi compagni, il nuovo allenatore, i nuovi tifosi: sono molto felice ed euforico, non vedo l'ora di cominciare». Altro colpo da novanta dunque per la Crifo Wines Ruvo di Puglia, grazie all'indefesso lavoro del DS Gianluigi Campanale e tutta la grande squadra biancoblu, che sta creando i presupposti per una stagione da protagonisti nella Serie B Old Wild West 2024/2025. Benvenuto Gianluca, nella famiglia biancoblu!",
      breveDescrizione : "La Crifo Wines Ruvo di Puglia è lieta di annunciare l'acquisizione delle prestazioni di Gianluca Giorgi, centro classe 1995 [...]",
      categorie : cat
      });
      this.news.push({
        id : 3,
        pathImg : "../../../../assets/images/upload/giorgi.jpg",
        dataIns : "22 luglio alle ore 18:03" ,
        numeroVisualizzazione : 150,
        titolo : "Crifo Wines Ruvo di Puglia, altro guerriero nel pitturato: ecco Gianluca Giorgi!",
        descrizione : "La Crifo Wines Ruvo di Puglia è lieta di annunciare l'acquisizione delle prestazioni di Gianluca Giorgi, centro classe 1995, proveniente dalla Virtus Roma. Dotato di un fisico importante (200 cm), Giorgi ama svariare sul fronte d'attacco, essendo capace di far male sia dalla lunga distanza che nel piitturato. Il pivot toscano è giocatore moderno che lavora per la squadra, si sacrifica sotto ambo le plance, che non si tira indietro nei contatti fisici ed è in grado di portare alla squadra punti e rimbalzi preziosi. L'ex Roma ha avuto esperienze di spessore con le canotte di Montecatini, Alba, Libertas Livorno, Iseo, Valsesia basket Borgosesia e Vigevano. Prima di approdare alla Virtus, Giorgi vive una stagione da protagonista a Fiorenzuola, dove registra una prova monstre da 44 punti, 10 rimbalzi e 50 di valutazione. La sua stagione però termina anzitempo per la rottura del crociato. Ora il giocatore nato in provincia di Pisa è pronto per tornare nella terza categoria nazionale da protagonista, come affermato nella sua prima dichiarazione da giocatore ruvese: «Sono molto contento di entrare nella famiglia di Ruvo, è una squadra che punta sempre in alto, io sono contento e carico per questa nuova avventura, voglio tornare a dimostrare ciò che valgo, questo è il contesto giusto per farlo. Ho voglia di scoprire subito come sarà con i nuovi compagni, il nuovo allenatore, i nuovi tifosi: sono molto felice ed euforico, non vedo l'ora di cominciare». Altro colpo da novanta dunque per la Crifo Wines Ruvo di Puglia, grazie all'indefesso lavoro del DS Gianluigi Campanale e tutta la grande squadra biancoblu, che sta creando i presupposti per una stagione da protagonisti nella Serie B Old Wild West 2024/2025. Benvenuto Gianluca, nella famiglia biancoblu!",
        breveDescrizione : "La Crifo Wines Ruvo di Puglia è lieta di annunciare l'acquisizione delle prestazioni di Gianluca Giorgi, centro classe 1995 [...]",
        categorie : cat
        });
  }

  dettaglioNotizia(n : newsModel){
    debugger
    const navigationExtras: NavigationExtras = {
      state: {
        data: n
      }
    };

    this.router.navigate(['/news/' + n.id] , navigationExtras);
  }

}
