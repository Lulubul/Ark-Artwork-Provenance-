import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Artwork } from '../artwork/artwork';
import { ArtworkService } from '../artwork/artwork.service';

@Component({
  moduleId: module.id,
  selector: 'artwork-details',
  templateUrl: './artwork-details.component.html'
})
export class ArtworkDetailsComponent implements OnInit, OnDestroy {
    artwork: Artwork;
    sub: any;

    constructor(private artworkService: ArtworkService,
                private route: ActivatedRoute,
                private router: Router){
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          this.artworkService
            .getByTitle("Transfiguration (Raphael)")
            .subscribe(data => { this.artwork = data as Artwork; });
        });
    }
    ngOnDestroy(){
        this.sub.unsubscribe();
    }

}
