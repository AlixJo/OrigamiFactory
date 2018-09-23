import {Injectable} from '@angular/core';
import {Categorie} from './categorie';
import {Http} from '@angular/http';
import {AppConfigService} from '../app-config.service';

@Injectable()
export class CategorieService {
  categories: Array<Categorie> = new Array<Categorie>();
  categoriesParent: Array<Categorie> = new Array<Categorie>();
  categoriesChildren: Array<Categorie> = new Array<Categorie>();
  apiUrl = '';


  constructor(private http: Http, private urlService: AppConfigService) {
    this.apiUrl = this.urlService.apiUrl + '/categorie/';
    this.http
      .get(this.apiUrl)
      .subscribe(resp => this.categories = resp.json()
        , err => console.log(err)
      );
    this.http
      .get(this.apiUrl + '/children')
      .subscribe(resp =>
          this.categoriesChildren = resp.json(),
        err => console.log(err)
      );
  }

  public findAll() {
    return this.categories;
  }

  public findAvailableParent(categorie: Categorie) {

    if (categorie) {

      const descendants: Array<Categorie> = new Array<Categorie>();

      this.getAllDescendants(descendants, categorie.sousCats);
      descendants.push(categorie);

      this.categoriesParent = Object.assign([], this.categories);

      for (let cat of descendants) {
        cat = this.findById(cat.id);
        const pos: number = this.categoriesParent.indexOf(cat);
        this.categoriesParent.splice(pos, 1);
      }

      return this.categoriesParent;

    } else {
      return this.categories;
    }

  }

  public getAllDescendants(descendantsList: Array<Categorie>, sousCats: Array<Categorie>) {
    for (const categorie of sousCats) {
      descendantsList.push(categorie);
      this.getAllDescendants(descendantsList, categorie.sousCats);
    }
  }

  public findById(id: number, details?: boolean): any {
    if (details) {
      return this.http
        .get(this.apiUrl + id);
    }

    for (const categorie of this.categories) {
      if (categorie.id === id) {
        if (!categorie.superCat) {
          categorie.superCat = new Categorie();
        }
        return categorie;
      }
    }

    return null;
  }

  public findByIdWithChildren(id: number) {
    for (const categorie of this.categoriesChildren) {
      if (categorie.id === id) {
        return categorie;
      }
    }
  }

  public findParentById(id: number): any {
    return this.http
      .get(this.apiUrl + id + '/super');
  }

  public save(categorie: Categorie) {
    if (categorie) {
      if (!categorie.superCat.id || categorie.superCat.id.toString() === 'null') {
        categorie.superCat = null;
      }
      if (!categorie.id) {
        this.http
          .post(this.apiUrl, categorie)
          .subscribe(resp =>
              this.categories.push(resp.json()),
            err => console.log(err)
          );
      } else {
        this.http
          .put(this.apiUrl + categorie.id, categorie)
          .subscribe(resp => {
              this.http
                .get(this.apiUrl)
                .subscribe(respo =>
                    this.categories = respo.json(),
                  err => console.log(err)
                );
            },
            err => console.log(err))
        ;
      }
    }
  }

  public delete(categorie: Categorie) {
    const pos: number = this.categories.indexOf(categorie);

    this.http
      .delete(this.apiUrl + categorie.id)
      .subscribe(resp => this.categories.splice(pos, 1),
        err => console.log(err))
    ;
  }

}
