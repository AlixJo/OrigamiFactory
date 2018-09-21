import {Component, OnInit} from '@angular/core';
import {Origami} from './origami';
import {OrigamiService} from './origami.service';
import {CategorieService} from '../categorie/categorie.service';

@Component({
  templateUrl: './origami.component.html',
  styleUrls: ['./origami.component.css']
})

export class OrigamiComponent implements OnInit {

  private formOrigami: Origami = null;

  constructor(private origamiService: OrigamiService) {
  }

  ngOnInit() {
  }

  public list() {
    return this.origamiService.findAll();
  }

  public add() {
    this.formOrigami = new Origami();
  }

  public edit(id: number) {
    this.formOrigami = this.origamiService.findById(id);
  }

  public save() {
    this.origamiService.save(this.formOrigami);
  }

  public delete(id: number) {
    this.origamiService.delete(this.origamiService.findById(id));
  }

  public cancel() {
    this.formOrigami = null;
  }

}
