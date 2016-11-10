import {Component} from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';

import {TeamsPage} from '../pages';
import {EliteApi} from '../../shared/shared';

@Component({
  templateUrl: 'tournaments.page.html',
})
export class TournamentsPage {

  private tournaments: any;

  constructor(private nav: NavController, private eliteApi: EliteApi, private loadingController: LoadingController) {

  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting tournaments...'
    });

    loader.present().then(()=>{
      this.eliteApi.getTournaments()
        .subscribe(data=> {
          this.tournaments = data;
          loader.dismiss();
        })
      }
    );
  }

  itemTapped($event, tournament) {
    this.nav.push(TeamsPage, tournament);
  }
}
