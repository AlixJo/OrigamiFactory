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
}
