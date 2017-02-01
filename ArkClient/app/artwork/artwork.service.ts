import { Injectable } from '@angular/core';
import { Artwork } from './artwork';
import { Artist } from '../artist/artist';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


const ARTWORKS : Artwork[] = [
      { id: 1,
        title: 'Christ Driving the Money Changers',
        abstract: '',
        imageUrl: '',
        revisions: [],
        artist : '',
        year: '',
        museum: '',
        country: '',
        city: '', 
        medium: '',
        period: '' }
    ];

@Injectable()
export class ArtworkService{

  constructor(private http: Http) { }

  private baseUrl: string = 'localhost:2994/api';
  private artworkAPI = 'http://localhost:2994/api/artworks';

  getAll() : Observable<Artwork[]> {
      return this.http.get(this.artworkAPI)
            .map(response => response.json() as Artwork[])
            .catch((error: any) => {return Observable.throw(error.message);});
  }

  get(id: number) : Artwork {
    return this.clone(ARTWORKS.find(p => p.id === id));
  }

  getByTitle(title: string) : Observable<any> {
      const url = `${this.artworkAPI}?title=${title}`;
      return this.http.get(url)
            .map(this.extractData)
            .catch((error: any) => {return Observable.throw(error.message);});
  }

  save(artwork: Artwork){
    let originalArtwork = ARTWORKS.find(p => p.id === artwork.id);
    if (originalArtwork) Object.assign(originalArtwork, artwork);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }
}