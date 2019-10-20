import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'O-projekte', component: AboutComponent },
  { path: 'Team', component: TeamComponent },
  { path: 'Stretnutia', component: MeetingsComponent },
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
