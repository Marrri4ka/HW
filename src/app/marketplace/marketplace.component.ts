import { Component, OnInit} from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { ShoppingcartService } from '../shoppingcart.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService, ShoppingcartService]
})
export class MarketplaceComponent implements OnInit {

  albums: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  newMaxPrice: number = 1000;

  constructor(private router: Router, private albumService: AlbumService, private shoppingcartService: ShoppingcartService){}

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
  }

  goToDetailPage(clickedAlbum) {
   this.router.navigate(['albums', clickedAlbum.$key]);

  }

  addToCart(album){
    this.shoppingcartService.addToCart(album);
  }

 //  albums: Album[] = [
 //   new Album("Pulse", "Pink Floyd",
 //       "A live  album by the English progressive rock band originally released in 1995, on the label EMI in the United Kingdom.", 1),
 //   new Album("Funhouse", "The Stooges",
 //       "The second  album from the American rock band, released in 1970 by Elektra Records.", 2),
 //   new Album("Twilight of the Thunder God", "Amon Amarth",
 //       "Seventh album by the Swedish band, released in 2008, based on Thor's battle with the serpent Jörmungandr.", 3),
 //   new Album("Dilate", "Ani DiFranco",
 //       "Her highest-selling and most acclaimed album, released in 1996.", 4),
 //   new Album("Chopin - Complete Nocturnes", "Brigitte Engerer",
 //       "Released in 2010, this is Engerer's own rendition of the classical composer Chopin.", 5),
 //   new Album("Axis Bold As Love", "The Jimi Hendrix Experience",
 //       "Second studio album by the English-American band, released in 1967.", 6)
 // ];


}
