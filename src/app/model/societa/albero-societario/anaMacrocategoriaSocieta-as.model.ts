import { anaCategoriaSocietaAS } from "./anaCategoriaSocieta-as.model";

export interface anaMacrocategoriaSocietaAS {
    id : number;
    descrizione : string;
    anaCategoriaSocieta : anaCategoriaSocietaAS[];
}