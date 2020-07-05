import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateEventtypeComponent } from './eventtypes/update-eventtype/update-eventtype.component';
import { EventtypeDetailsComponent } from './eventtypes/eventtype-details/eventtype-details.component';
import { EventtypeListComponent } from './eventtypes/eventtype-list/eventtype-list.component';
import { CreateEventtypeComponent } from './eventtypes/create-eventtype/create-eventtype.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { UpdateEventComponent } from './events/update-event/update-event.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UpdateUserComponent,
    UpdateEventtypeComponent,
    EventtypeDetailsComponent,
    EventtypeListComponent,
    CreateEventtypeComponent,
    CreateEventComponent,
    EventDetailsComponent,
    EventListComponent,
    UpdateEventComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [{  
    provide:HTTP_INTERCEPTORS, useClass:HttpInterceptorService, multi:true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
