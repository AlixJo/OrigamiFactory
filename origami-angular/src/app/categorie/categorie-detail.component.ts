import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategorieService} from './categorie.service';
import {Categorie} from './categorie';

@Component({
  selector: 'app-categorie-detail',
  templateUrl: './categorie-detail.component.html',
  styleUrls: ['./categorie-detail.component.css']
})
export class CategorieDetailComponent implements OnInit {

  private categorie: Categorie = new Categorie();
  private categorieWithChild: Categorie = new Categorie();


  constructor(private route: ActivatedRoute, private catService: CategorieService) {
    this.categorie.superCat = new Categorie();
    this.route.params.subscribe(params => {
      this.catService.findParentById(Number(params['id']))
        .subscribe(resp => this.categorie = resp.json()
        );
      this.catService.findById(Number(params['id']), true)
        .subscribe(resp => this.categorieWithChild = resp.json()
        );
    });
  }

  ngOnInit() {
  }

}
