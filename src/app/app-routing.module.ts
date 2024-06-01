import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListArtistsComponent } from './list-artists/list-artists.component';
import { AddShowComponent } from './add-show/add-show.component';
import { ListShowsComponent } from './list-shows/list-shows.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'artists', component: ListArtistsComponent },
  { path: 'addshow/:id', component: AddShowComponent },

  { path: 'show', component: ListShowsComponent },
  { path: 'reserver/:id', component: ReservationComponent }, // reserfve show for seazts









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
