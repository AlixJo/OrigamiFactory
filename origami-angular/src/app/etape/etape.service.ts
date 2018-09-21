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

}

