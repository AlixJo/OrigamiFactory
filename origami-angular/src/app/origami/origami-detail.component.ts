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
  private formEtape: Etape = null;

  constructor(private route: ActivatedRoute, private origamiService: OrigamiService, private etapeService: EtapeService) {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.origamiService.findById(Number(params['id']), true)
        .subscribe(resp => this.origami = resp.json());
    });


  }

  ngOnInit() {
  }

  public listEtape() {
    return this.origami.etapes;
  }

  public addEtape(id: number) {
    this.formEtape = new Etape();

  }

  public editEtape(id: number) {
    this.formEtape = this.etapeService.findById(id);
  }

  public saveEtape() {

    this.formEtape.origami = this.origami;
    this.etapeService.saveEtape(this.formEtape);

    this.formEtape = null;

    // refresh
    // this.origamiService.findById(this.origami.id, true)
    //   .subscribe(resp => this.origami = resp.json());
  }

  public deleteEtape(id: number) {
    this.etapeService.deleteEtape(this.etapeService.findById(id));

    // refresh
    // this.origamiService.findById(this.origami.id, true)
    //   .subscribe(resp => this.origami = resp.json());
  }

  public cancelEtape() {
    this.formEtape = null;
  }


}


