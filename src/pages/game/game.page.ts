import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {EliteApi} from "../../shared/shared";
import {TeamHomePage} from "../team-home/team-home.page";

@Component({
  templateUrl: 'game.page.html',
})
export class GamePage {

  game: any = {};

  constructor(private nav: NavController, private navParams: NavParams, private eliteApi: EliteApi) {

  }

  ionViewDidLoad() {
    this.game = this.navParams.data;
  }

  public teamTapped(teamId) {
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t=>t.id === teamId);
    this.nav.push(TeamHomePage, team);

  }
}
