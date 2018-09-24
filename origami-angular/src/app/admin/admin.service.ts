import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AppConfigService} from '../app-config.service';
import {Admin} from './admin';
import {Categorie} from '../categorie/categorie';
import {Origami} from '../origami/origami';

@Injectable()
export class AdminService {
  admins: Array<Admin> = new Array<Admin>();
  apiUrl = '';

  constructor(private http: Http, private urlService: AppConfigService) {
    this.apiUrl = this.urlService.apiUrl + '/admin/';
    this.http
      .get(this.apiUrl)
      .subscribe(resp =>
          this.admins = resp.json(),
        err => console.log(err)
      );
  }
  public save(admin: Admin) {
    if (admin) {
      if (!admin.id) {
        if (this.admins.length > 0) {
          admin.id = this.admins[this.admins.length - 1].id + 1;
        } else {
          admin.id = 1;
        }

        this.http
          .post(this.apiUrl, admin)
          .subscribe(
            resp => this.admins.push(admin),
            err => console.log(err)
          );
      }
      this.http
        .put(this.apiUrl + admin.id, admin)
        .subscribe(
          resp => null,
          err => console.log(err)
        );
    }
  }
  public findById(id: number, details?: boolean): any {
    // if (details) {
    //  return this.http
    //    .get(this.apiUrl + id)
    //    .subscribe(resp => resp.json());

    for (const admin of this.admins) {
      if (admin.id === id) {
        return admin;
      }
    }
    return null;
  }


  public findAll() {
    return this.admins;
  }


}


