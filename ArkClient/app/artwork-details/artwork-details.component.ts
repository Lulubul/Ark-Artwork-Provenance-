import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artwork, Provenance} from '../artwork/artwork';
import { ArtworkService } from '../artwork/artwork.service';

@Component({
  moduleId: module.id,
  selector: 'artwork-details',
  templateUrl: './artwork-details.component.html'
})
export class ArtworkDetailsComponent implements OnInit, OnDestroy {
    artwork: Artwork;
    sub: any;
    provenances: Provenance[] = [];
    relatedArtworks: Artwork[];

    constructor(private artworkService: ArtworkService,
                private route: ActivatedRoute,
                private router: Router){
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
          this.artworkService
            .getByTitle("Iris")
            .subscribe(data => { this.artwork = data as Artwork; });

          this.artworkService
            .getProvenanceByTitle("Iris")
            .subscribe(data => { this.provenances = data as Provenance[]; });

          this.artworkService
            .getRelatedArworks("Gogh")
            .subscribe(data => { this.relatedArtworks = data as Artwork[]; });
        });
        
    }
    ngOnDestroy(){
        this.sub.unsubscribe();
    }

}
