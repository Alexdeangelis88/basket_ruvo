import { sponsors } from "./sponsors";
import { stileCssSponsor } from "./stileCssSponsor";

export interface anaTipoSponsor{
    id : number;
    livello : number;
    tipo : string;
    stileCssSponsor : stileCssSponsor;
    sponsors : sponsors[];
}