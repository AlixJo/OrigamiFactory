import {Injectable} from '@angular/core';
import {Categorie} from './categorie';
import {Http} from '@angular/http';
import {AppConfigService} from '../app-config.service';

@Injectable()
export class CategorieService {
  categories: Array<Categorie> = new Array<Categorie>();
  apiUrl = '';

  constructor(private http: Http, private urlService: AppConfigService) {
    this.apiUrl = this.urlService.apiUrl + '/categorie/';
    this.http
      .get(this.apiUrl)
      .subscribe(resp =>
          this.categories = resp.json(),
        err => console.log(err)
      );
  }

  public findAll() {
    return this.categories;

  }

}
