import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UpdateUserComponent } from "./users/update-user/update-user.component";
import { UserDetailsComponent } from "./users/user-details/user-details.component";
import { EventtypeListComponent } from "./eventtypes/eventtype-list/eventtype-list.component";
import { CreateEventtypeComponent } from "./eventtypes/create-eventtype/create-eventtype.component";
import { UpdateEventtypeComponent } from "./eventtypes/update-eventtype/update-eventtype.component";
import { EventtypeDetailsComponent } from "./eventtypes/eventtype-details/eventtype-details.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import {AuthGuardService } from "./services/auth-guard.service";
import { EventListComponent } from './events/event-list/event-list.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { UpdateEventComponent } from './events/update-event/update-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'events', component: EventListComponent, canActivate:[AuthGuardService] },
  { path: 'event/new' , component: CreateEventComponent, canActivate:[AuthGuardService] },
  { path: 'event/update/:eventId' , component: UpdateEventComponent, canActivate:[AuthGuardService]},
  { path: 'event/details/:eventId' , component: EventDetailsComponent, canActivate:[AuthGuardService]},
  { path: 'users', component: UserListComponent, canActivate:[AuthGuardService] },
  { path: 'user/new' , component: CreateUserComponent, canActivate:[AuthGuardService] },
  { path: 'user/update/:userId' , component: UpdateUserComponent, canActivate:[AuthGuardService]},
  { path: 'user/details/:userId' , component: UserDetailsComponent, canActivate:[AuthGuardService]},
  { path: 'event/types', component: EventtypeListComponent, canActivate:[AuthGuardService] },
  { path: 'event/type/new' , component: CreateEventtypeComponent, canActivate:[AuthGuardService] },
  { path: 'event/type/update/:eventTypeId' , component: UpdateEventtypeComponent, canActivate:[AuthGuardService]},
  { path: 'event/type/details/:eventTypeId' , component: EventtypeDetailsComponent, canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
