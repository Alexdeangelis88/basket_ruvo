import { anaTipoFigura } from "./anaTipoFigura.model";

export interface figura{
    id : number;
    nome : string;
    cognome : string;
    anni : number;
    annoNascita : Date;
    luogoNazioneNascita : string;
    ftpImg : string;
    altezza : number;
    urlLnp : string;
    anaTipoFigura : anaTipoFigura[];
}