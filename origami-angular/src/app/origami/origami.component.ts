import {Component, OnInit} from '@angular/core';
import {Origami} from './origami';
import {OrigamiService} from './origami.service';
import {CategorieService} from '../categorie/categorie.service';

@Component({
  templateUrl: './origami.component.html'
})

export class OrigamiComponent implements OnInit {

  constructor(private origamiService: OrigamiService) { }

  ngOnInit() {
  }

  public list() {
    return this.origamiService.findAll();
  }

}
