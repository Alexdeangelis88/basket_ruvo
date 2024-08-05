import { anaMacrocategoriaSocieta } from "./anaMacrocategoriaSocieta.model";

export interface anaCategoriaSocieta {
    id : number;
    descrizione : string;
    anaMacrocategoriaSocieta : anaMacrocategoriaSocieta
}