import {Pipe, PipeTransform} from '@angular/core';
import {Categorie} from './categorie/categorie';
import {ItemDropdown} from './item-dropdown';

@Pipe({
  name: 'dropdownList'
})
export class DropdownListPipe implements PipeTransform {
  dropdownList = [];

  transform(values: Array<Categorie>): any {
    if (typeof values === 'object')
    {

    }
      this.dropdownList = new Array<ItemDropdown>();
    for (const val of values) {
      this.dropdownList.push(
        {
          'id': val.id,
          'itemName': val.nom
        }
      );
    }

    return this.dropdownList;

  }

}
