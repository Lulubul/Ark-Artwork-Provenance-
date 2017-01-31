import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Artwork } from '../artwork/artwork';
import { ArtistClass } from '../artwork/artwork.service';
import { Artist } from '../artist/artist';
import { ArtworkService } from '../artwork/artwork.service';
import { ArtistService } from '../artist/artist.service';
import { Subject }           from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

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
    museumsComboValues: String[];
    citiesComboValues: String[];
    countrieComboValues: String[];
    mediumsComboValues: String[];
    periodsComboValues: String[];

    private searchTerms = new Subject<string>();
    artistsComboValues: ArtistClass[];

    constructor(private artworkService: ArtworkService, artistService: ArtistService,
                private route: ActivatedRoute,
                private router: Router){
    }

    // Push a search term into the observable stream.
    search(term: string): void {
      this.searchTerms.next(term);
    }

    ngOnInit(){
      this.artworks = this.artworkService.getAll();
      this.artworkService
              .getAllArtists()
              .subscribe(data => { this.artistsComboValues = data; });
    }

    ngOnDestroy() {

    }

}
