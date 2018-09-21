import {EnumNiveau} from './enumNiveau';
import {Etape} from '../etape/etape';
import {Categorie} from '../categorie/categorie';

export class Origami {
  id: number;
  nom: string;
  tempsRea: string;
  nbFeuille: number;
  niveau: EnumNiveau;
  note: number;
  actif: Boolean;
  youTube: string;
  imageOri: string;

  etapes: Array<Etape>;
  categories: Array<Categorie>;

  constructor(id?: number, nom?: string, tempsRea?: string, nbFeuille?: number, niveau?: EnumNiveau, note?: number, actif?: Boolean,
              youTube?: string, imageOri?: string, etapes?: Array<Etape>, categories?: Array<Categorie>) {
    this.id = id;
    this.nom = nom;
    this.tempsRea = tempsRea;
    this.nbFeuille = nbFeuille;
    this.niveau = niveau;
    this.note = note;
    this.actif = actif;
    this.youTube = youTube;
    this.imageOri = imageOri;
    this.etapes = etapes;
    this.categories = categories;
  }
}
