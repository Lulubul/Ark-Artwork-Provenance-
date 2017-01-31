import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Artwork } from './artwork';
import { ArtworkService } from './artwork.service';

@Component({
  moduleId: module.id,
  selector: 'artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: [ './artwork-list.component.css' ]
 
})
export class ArtworkListComponent implements OnInit, OnDestroy {
    artworks: Artwork[] = [];
    submitted: boolean = false; 
    artworkSearch: Artwork;
    artistsComboValues: String[];
    museumsComboValues: String[];
    citiesComboValues: String[];
    countrieComboValues: String[];
    mediumsComboValues: String[];
    periodsComboValues: String[];


    constructor(private artworkService: ArtworkService,
                private route: ActivatedRoute,
                private router: Router){
    }

  constructor(private artworkService : ArtworkService){ }

  ngOnInit(){
    this.artworks = this.artworkService.getAll();

    this.artworkSearch = {
      title: '',
      abstract: '',
      imageUrl: '',
      artist: '',
      year: '',
      museum: '',
      country: '',
      city: '',
      medium: '',
      period: ''
};
  }

   processForm() {
    console.log(this.artworkSearch);
    this.submitted = true;

    this.artworks =  this.artworkService.getArtworksAdvancedSearch(this.artworkSearch);
  }

}
