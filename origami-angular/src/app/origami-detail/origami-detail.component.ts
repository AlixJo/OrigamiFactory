import {Component, OnInit} from '@angular/core';
import {Origami} from '../origami/origami';
import {ActivatedRoute} from '@angular/router';
import {OrigamiService} from '../origami/origami.service';
import {Etape} from '../etape/etape';
import {EtapeService} from '../etape/etape.service';

@Component({
  templateUrl: './origami-detail.component.html',
  styleUrls:['./origami-detail.component.css']
})

export class OrigamiDetailComponent /*implements OnInit*/ {/*
  private origami: Etape = new Etape ();

  constructor(private route: ActivatedRoute, private origamiService: OrigamiService, private etapeService: EtapeService){
   this.origami.etape = new Etape();

    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.origamiService.findById (Number(params['id']), true)
             .subscribe(resp => this.origami = resp.json());
     this.origamiService.findAllEtapes (Number(params['id']), true)
        .subscribe(resp => this.origami.etapes = resp.json());
      this.origamiService.findAllCategories (Number(params['id']), true)
        .subscribe(resp => this.origami.categories = resp.json());
    });
  }
  ngOnInit(){}
*/}
