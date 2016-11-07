import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyTeamsPage, TournamentsPage, TeamsPage, TeamHomePage, TeamDetailPage,StandingsPage } from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamHomePage,
    TeamDetailPage,
    StandingsPage
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
    StandingsPage
  ],
  providers: []
})
export class AppModule {}
