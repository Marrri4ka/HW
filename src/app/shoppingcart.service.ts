import { Injectable } from '@angular/core';
import {Album } from './album.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ShoppingcartService {
albums: FirebaseListObservable<any[]>;

addToCart(album: Album)
{
  this.albums.push(album);
}

 getAllAlbums()
 {
   return this.albums;
 }
 constructor(private database: AngularFireDatabase) {
   this.albums = database.list('shoppingcart');
 }

}
