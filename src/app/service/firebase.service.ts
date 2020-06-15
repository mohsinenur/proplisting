import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  listings: any;

  constructor(private db: AngularFireDatabase) {
  }

  getListings(){
    this.listings = this.db.list('/listings');
    return this.listings;
  }
}