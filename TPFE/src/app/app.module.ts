//  Internal Libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// External Libraries
import { ModalModule } from 'ngx-bootstrap/modal';

// Components
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MemberComponent } from './member/member.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    MeetingsComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomeComponent,
    MenuComponent,
    MemberComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  entryComponents: [ModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
