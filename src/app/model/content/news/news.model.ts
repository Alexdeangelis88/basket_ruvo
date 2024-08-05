import { anaCategorieModel } from "./ana-categoria-news.mode";

export interface NotizieDTO{
    id: number;
    pathImg: string;
    dataIns: string;
    numeroVisualizzazione: number;
    titolo: string;
    descrizione: string;
    breveDescrizione: string;
    categorie: anaCategorieModel[];
}