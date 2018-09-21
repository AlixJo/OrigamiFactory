import {Origami} from './origami';
import {Http} from '@angular/http';
import {AppConfigService} from '../app-config.service';
import {Injectable} from '@angular/core';

@Injectable()
export class OrigamiService {
  origamis: Array<Origami> = new Array<Origami>();
  apiUrl = '';

  constructor(private http: Http, private urlService: AppConfigService) {
    this.apiUrl = this.urlService.apiUrl + '/origami/';
    this.http
      .get(this.apiUrl)
      .subscribe(resp =>
          this.origamis = resp.json(),
        err => console.log(err)
      );
  }

  public findAll() {
    return this.origamis;

  }

}
