import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookingComponent } from './components/booking/booking.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { UserInterfaceComponent } from './components/user-interface/user-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    RoomListComponent,
    UserInterfaceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }