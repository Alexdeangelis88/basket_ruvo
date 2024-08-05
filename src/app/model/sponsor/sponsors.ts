import { anaTipoSponsor } from "./anaTipoSponsor";

export interface sponsors{
    id : number;
    nome : string;
    url : string;
    ftpImg : string;
    anaTipoSponsorId : number;
    anaTipoSponsor : anaTipoSponsor;
}