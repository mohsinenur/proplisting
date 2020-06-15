import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { environment } from 'src/environments/environment';
import { FirebaseService } from './service/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
