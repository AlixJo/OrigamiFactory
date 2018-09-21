import {Component, OnInit} from '@angular/core';
import {Origami} from './origami';
import {ActivatedRoute} from '@angular/router';
import {OrigamiService} from './origami.service';

@Component({
  templateUrl: './origami-detail.component.html'
})

export class OrigamiDetailComponent implements OnInit {
  private origami: Origami = new Origami ();

  constructor(private route: ActivatedRoute, private origamiService: OrigamiService ){
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.origamiService
        .findById (Number(params['id']), true)
        .subscribe(resp => this.origami = resp.json());
    });
  }
  ngOnInit(){}
}
