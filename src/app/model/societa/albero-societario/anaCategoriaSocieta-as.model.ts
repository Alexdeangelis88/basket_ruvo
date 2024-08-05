import { anaTipoFiguraAS } from "./anaTipoFigura-as.mode";

export interface anaCategoriaSocietaAS {
    id : number;
    descrizione : string;
    anaTipoFigura : anaTipoFiguraAS[];
}