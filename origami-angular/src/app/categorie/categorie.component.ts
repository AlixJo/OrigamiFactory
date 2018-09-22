import {Component, OnInit} from '@angular/core';
import {CategorieService} from './categorie.service';
import {Categorie} from './categorie';
import {Origami} from '../origami/origami';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  private formCategorie: Categorie = null;

  constructor(private catService: CategorieService) {

  }

  ngOnInit() {
  }

  public list() {
    return this.catService.findAll();
  }

  public listAvailableParent(id: number) {
    return this.catService.findAvailableParent(this.catService.findByIdWithChildren(id));
  }

  public add() {
    this.formCategorie = new Categorie();
    this.formCategorie.superCat = new Categorie();
    this.formCategorie.sousCats = new Array<Categorie>();
    this.formCategorie.origamis = new Array<Origami>();
  }

  public edit(id: number) {
    this.formCategorie = this.catService.findById(id);
  }

  public save() {
    this.catService.save(this.formCategorie);
    this.formCategorie = null;
  }

  public delete(id: number) {
    this.catService.delete(this.catService.findById(id));
  }

  public cancel() {
    this.formCategorie = null;
  }

}
