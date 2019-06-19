import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { ShoppingcartService } from '../shoppingcart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
  providers: [ShoppingcartService]
})
export class ShoppingcartComponent implements OnInit {

  albums: Album[] = [

  ];

  constructor(private shoppingcartService: ShoppingcartService) { }

  ngOnInit() {
    this.albums = this.shoppingcartService.getAllAlbums();
  }

}
