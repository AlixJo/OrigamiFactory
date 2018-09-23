import {Component, OnInit} from '@angular/core';
import {Origami} from './origami';
import {OrigamiService} from './origami.service';
import {Categorie} from '../categorie/categorie';
import {CategorieService} from '../categorie/categorie.service';
import {ItemDropdown} from '../item-dropdown';
import {DropdownListPipe} from '../dropdown-list.pipe';

@Component({
  selector: 'app-origami',
  templateUrl: './origami.component.html',
  styleUrls: ['./origami.component.css']
})

export class OrigamiComponent implements OnInit {

  private formOrigami: Origami = null;
  private categories: Array<Categorie> = new Array<Categorie>();
  private dropdownSettings = {};
  selectedItems: Array<ItemDropdown> = new Array<ItemDropdown>();

  constructor(private origamiService: OrigamiService, private catService: CategorieService) {
  }

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Catégorie(s)',
      enableCheckAll: false,
      searchPlaceholderText: 'Rechercher une catégorie',
      enableSearchFilter: true,
      filterSelectAllText: 'Selectionner tout',
      filterUnSelectAllText: 'Désélectionner tout',
      noDataLabel: 'Aucune catégorie trouvée'
    };

  }

  public list() {
    return this.origamiService.findAll();
  }

  public listCategorie() {
    return this.catService.findAll();
  }

  public add() {
    this.formOrigami = new Origami();
  }

  public edit(id: number) {
    this.formOrigami = this.origamiService.findById(id);
    const pipe = new DropdownListPipe();
    this.selectedItems = pipe.transform(this.formOrigami.categories);
  }

  public save() {
    const listCat: Array<Categorie> = new Array<Categorie>();
    for (const it of this.selectedItems) {
      listCat.push(new Categorie(it.id, it.itemName));
    }

    this.formOrigami.categories = listCat;

    this.origamiService.save(this.formOrigami);
    this.formOrigami = null;
    this.selectedItems = new Array<ItemDropdown>();
  }


  public delete(id: number) {
    this.origamiService.delete(this.origamiService.findById(id));
  }

  public cancel() {
    this.formOrigami = null;
    this.selectedItems = new Array<ItemDropdown>();
  }

  public convertToDropdownList(categories: Array<Categorie>) {
    const pipe = new DropdownListPipe();
    pipe.transform(categories);
  }
}
