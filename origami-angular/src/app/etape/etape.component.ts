import { Component, OnInit } from '@angular/core';
import {Origami} from '../origami/origami';
import {DropdownListPipe} from '../dropdown-list.pipe';
import {Categorie} from '../categorie/categorie';

import {Etape} from './etape';
import {EtapeService} from './etape.service';

@Component({
  selector: 'app-etape',
  templateUrl: './etape.component.html',
  styleUrls: ['./etape.component.css']
})
export class EtapeComponent implements OnInit {
  private formEtape: Etape = null;

  constructor(private etapeService: EtapeService) {

  }

  public list() {
    return this.etapeService.findAll();
  }


  public addEtape() {
    this.formEtape = new Etape();

  }

  public editEtape(id: number) {
    this.formEtape = this.etapeService.findById(id);
  }

  public saveEtape() {
    this.etapeService.saveEtape(this.formEtape);
    this.formEtape = null;
  }

  public deleteEtape(id: number) {
    this.etapeService.deleteEtape(this.etapeService.findById(id));
  }

  public cancelEtape() {
    this.formEtape = null;
  }


  ngOnInit() {
  }

}
