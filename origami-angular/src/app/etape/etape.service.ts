import { Injectable } from '@angular/core';

import {Http} from '@angular/http';
import {AppConfigService} from '../app-config.service';
import {Etape} from './etape';


@Injectable()
export class EtapeService {
  etapes: Array<Etape> = new Array<Etape>();
  apiUrl = '';

  constructor(private http: Http, private urlService: AppConfigService) {
    this.apiUrl = this.urlService.apiUrl + '/origami/detail';
    this.http
      .get(this.apiUrl)
      .subscribe(resp =>
          this.etapes = resp.json(),
        err => console.log(err)
      );
  }

  public findAll() {
    return this.etapes;
  }

  public findById(id: number, details?: boolean): any {
    if (details) {
      return this.http
        .get(this.apiUrl + id);
    }
    for (const etape of this.etapes) {
      if (etape.id === id) {
        return etape;
      }
    }
    return null;
  }

  public saveEtape(etape: Etape) {
    if (etape) {
      if (!etape.id) {


        this.http
          .post(this.apiUrl, etape)
          .subscribe(
            resp => this.etapes.push(resp.json()),
            err => console.log(err)
          );
      }else {
        this.http
          .put(this.apiUrl + etape.id, etape)
          .subscribe(
            resp => null,
            err => console.log(err)
          );
      }
    }
  }

  public deleteEtape(etape: Etape) {
    const pos: number = this.etapes.indexOf(etape);

    this.http
      .delete(this.apiUrl + etape.id)
      .subscribe(
        resp => this.etapes.splice(pos, 1),
        err => console.log(err)
      );
  }

}


