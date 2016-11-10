import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {MyTeamsPage, TournamentsPage, TeamsPage, TeamHomePage, TeamDetailPage, StandingsPage, GamePage} from '../pages/pages';
import {EliteApi} from '../shared/shared'

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamHomePage,
    TeamDetailPage,
    StandingsPage,
    GamePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamHomePage,
    TeamDetailPage,
    StandingsPage,
    GamePage
  ],
  providers: [
    EliteApi
  ]
})
export class AppModule {
}
