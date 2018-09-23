import { Component, OnInit } from '@angular/core';
import {AdminService} from './admin.service';
import {Admin} from './admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private formAdmin: Admin = null;

  private BaseAdmins : Admin[] = null;


  constructor(private adminService: AdminService) {

  }


  ngOnInit() {
    //je sais pas comment faire autrement
    this.formAdmin = new Admin(0,'','');
  }
  public edit(id: number) {
      this.formAdmin = this.adminService.findById(id);
    }
  public add() {
    this.formAdmin = new Admin();
  }
  public save() {
    this.adminService.save(this.formAdmin);
    this.formAdmin = null;
  }

  public Connect()
  {

    this.BaseAdmins = this.adminService.findAll();

    let user = this.formAdmin.username ;
    let password = this.formAdmin.password ;
    let connect = false;


    for (let entry of this.BaseAdmins) {
      {
          if(entry.username === user && entry.password == password){
            connect = true;
          }
      }
    }
    if(connect){
      document.location.href="/home"
    }
    else
    {
      alert('l\'utilisateur ou le mot de passe est incorrect' );
    }

  }
}
