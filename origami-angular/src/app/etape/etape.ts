import {Origami} from '../origami/origami';


export class Etape { id: number;
numeroEtape: string;
description: string;
imageEtape: string;
//origami: Origami;


constructor(id?: number, numeroEtape?: string, description?: string, imageEtape?: string,) {
  this.id = id;
  this.numeroEtape = numeroEtape;
  this.description = description;
  this.imageEtape = imageEtape;
 }
}
