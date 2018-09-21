import {Origami} from '../origami/origami';

export class Categorie {
  id: number;
  nom: string;
  superCat: Categorie;
  sousCats: Array<Categorie>;
  origamis: Array<Origami>;


  constructor(id?: number, nom?: string, superCat?: Categorie, sousCats?: Array<Categorie>, origamis?: Array<Origami>) {
    this.id = id;
    this.nom = nom;
    this.superCat = superCat;
    this.sousCats = sousCats;
    this.origamis = origamis;
  }
}
