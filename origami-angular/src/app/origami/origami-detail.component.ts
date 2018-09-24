import {Component, OnInit} from '@angular/core';
import {Origami} from './origami';
import {ActivatedRoute} from '@angular/router';
import {OrigamiService} from './origami.service';
import {EtapeService} from '../etape/etape.service';
import {Etape} from '../etape/etape';

@Component({
  templateUrl: './origami-detail.component.html'
})

export class OrigamiDetailComponent implements OnInit {
  private origami: Origami = new Origami();
  private etape: Etape = new Etape();

  constructor(private route: ActivatedRoute, private origamiService: OrigamiService, private etapeService: EtapeService) {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.origamiService.findById(Number(params['id']), true)
        .subscribe(resp => this.origami = resp.json());

      //this.etapeService.findById(Number(params['id']), true)
      //  .subscribe(resp => this.etape = resp.json());
    });


  }

  ngOnInit() {
  }



}


