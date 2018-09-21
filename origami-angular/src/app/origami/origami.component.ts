import {Component, OnInit} from '@angular/core';
import {Origami} from './origami';
import {OrigamiService} from './origami.service';

@Component({
  templateUrl: './origami.component.html',
  styleUrls: ['./origami.component.css']
})

export class OrigamiComponent implements OnInit {

  formOrigami: Origami;

  constructor(private origamiService: OrigamiService) {
  }

  ngOnInit() {
  }


  public add() {
    this.formOrigami = new Origami();
  }


  public edit(origami: Origami) {
    this.formOrigami = origami;
  }


  public create() {
    this.origamiService.save(this.formOrigami);
    this.formOrigami = null;
  }


  public cancel() {
    this.formOrigami = null;
  }


  public delete(origami: Origami) {
    this.origamiService.delete(origami);
    this.formOrigami = null;
  }

}
