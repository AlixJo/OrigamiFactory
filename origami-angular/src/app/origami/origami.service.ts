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

  public findById(id: number, details?: boolean): any {
    // if (details) {
    //  return this.http
    //    .get(this.apiUrl + id)
    //    .subscribe(resp => resp.json());

    for (const origami of this.origamis) {
      if (origami.id === id) {
        return origami;
      }
    }
    return null;
  }


  public save(origami: Origami) {
    if (origami) {
      if (!origami.id) {
        if (this.origamis.length > 0) {
          origami.id = this.origamis[this.origamis.length - 1].id + 1;
        } else {
          origami.id = 1;
        }

        this.http
          .post(this.apiUrl, origami)
          .subscribe(
            resp => this.origamis.push(origami),
            err => console.log(err)
          );
      }
      this.http
        .put(this.apiUrl + origami.id, origami)
        .subscribe(
          resp => null,
          err => console.log(err)
        );
    }
  }

  public delete(origami: Origami) {
    const pos: number = this.origamis.indexOf(origami);

    this.http
      .delete(this.apiUrl + origami.id)
      .subscribe(
        resp => this.origamis.splice(pos, 1),
        err => console.log(err)
      );
  }

}
