import {Origami} from './origami';
import {Http} from '@angular/http';

export class OrigamiService {

  apiUrl: string;
  origamis: Array<Origami>;
  origami: Origami;

  constructor(private http: Http, private appConfig: AppConfigService, private utilisateurService: UtilisateurService) {
    this.apiUrl = this.appConfig.apiUrl + "origami/";
    this.http
      .get(this.apiUrl)
      .subscribe(resp => this.origamis = resp.json());
  }


  public findAll() {
    return this.origamis;
  }


  public findById(id: number) {
    this.http
      .get(this.apiUrl + id)
      .subscribe(resp => {
        this.origami = resp.json()
        this.refresh();
      });
  }


  public refresh() {
    if (this.origami) {
      this.http.get(this.apiUrl + this.origami.id + "/etape").subscribe(users => this.origami.etapes = etapes.json());
      this.http.get(this.apiUrl + this.origami.id + "/categorie").subscribe(messages => this.origami.categories = categories.json());
    }
  }


  public save(origami: Origami) {
    if (origami.id) {
      this.update(origami);
    }

    else {
      this.create(origami);
    }
  }


  public create(origami: Origami) {
    origami.createur = this.utilisateurService.utilisateur;

    this.http
      .post(this.apiUrl, origami)
      .subscribe(resp => this.origamis.push(resp.json()));
  }


  public update(origami: Origami) {
    this.http
      .put(this.apiUrl + origami.id, origami)
      .subscribe();
  }


  public delete(origami: Origami) {
    let pos: number = this.origamis.indexOf(origami);

    this.http
      .delete(this.apiUrl + origami.id)
      .subscribe(resp => this.origamis.splice(pos, 1));
  }


  public send(etape: Etape) {
    etape.expediteur = this.utilisateurService.categorie;

    this.http
      .post(this.apiUrl + this.origami.id + "/etape", etape)
      .subscribe(resp => this.origami.categories.push(resp.json()));
  }

}