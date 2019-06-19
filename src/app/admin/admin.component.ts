import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService]
})
export class AdminComponent implements OnInit {

  isShowingAddForm : boolean = false;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  showAddForm() {
    if (this.isShowingAddForm === true) {
      this.isShowingAddForm = false;
    } else if (this.isShowingAddForm === false) {
      this.isShowingAddForm = true;
    }
  }

  isShowAddForm() {
    return this.isShowingAddForm;
  }

  submitForm(title: string, artist: string, description: string, price: number) {
   var newAlbum: Album = new Album(title, artist, description,price);
    this.albumService.addAlbum(newAlbum);
 }

}
