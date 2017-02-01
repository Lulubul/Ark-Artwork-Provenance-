import { Injectable } from '@angular/core';
import { Artist } from './artist';

import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ArtistService{

  private artistsAPI = 'http://localhost:2994/api/artists';

  constructor(private http : Http) {  }

  getAllArtists(): Observable<Artist[]> {
    const url = `${this.artistsAPI}`;
    return this.http
               .get(url)
               .map(response => response.json() as Artist[]);
  }
}


