import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Artwork } from '../artwork/artwork';
import { ArtworkService } from '../artwork/artwork.service';

@Component({
  moduleId: module.id,
  selector: 'artwork-provenance',
  templateUrl: './artwork-provenance.component.html'
})

export class ArtworkProvenanceComponent implements OnInit, OnDestroy {
    artwork: Artwork;
    sub: any;

    constructor(private artworkService: ArtworkService,
                private route: ActivatedRoute,
                private router: Router){
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          this.artwork = this.artworkService.get(1);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

}
