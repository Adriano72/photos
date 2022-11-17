import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {

  photoURL = <string>'';

  constructor(private photoservice: PhotosService) { 
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoservice.getPhoto().subscribe((photo) => {
      this.photoURL=photo;
      console.log(`We got this random pic: ${this.photoURL}`);
    });
  }

  ngOnInit(): void {
  }
}
