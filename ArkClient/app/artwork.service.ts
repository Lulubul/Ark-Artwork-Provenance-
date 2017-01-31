import { Injectable } from '@angular/core';
import { Artwork } from './artwork';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

var ARTWORKS : Artwork[] = [
      {  id: 1,
         title: 'Christ Driving the Money Changers', 
         artist: 'Van Gogh',
         year: '1847',
         abstract: 'Christ Driving the Money Changers from the Temple is a painting by El Greco, from 1568, now in the National Gallery of Art in Washington, D.C., in the United States.[1] It depicts the Cleansing of the Temple, an event in the Life of Christ. There exist three other copies of the painting and also a faithful reproduction in the National Gallery in London, which has recently been considered as authentic by scholars in the field of visual arts.[2] Two versions and that other on loan from Madrid are titled Purification of the Temple. The one at the National Gallery in Washington is called Christ Cleansing the Temple. The painting which bears this actual title belongs to the Minneapolis Institute of Art and it is somewhat different from all the other versions of this legendary Christian scene', 
         imageUrl: 'images/El_Greco_13.jpg',
         revisions: [
           {id: 1, revisionNumber: '700128356', year: '2012'},
           {id: 2, revisionNumber: '700128357', year: '2013'},
           {id: 3, revisionNumber: '700128358', year: '2015'},
           {id: 4, revisionNumber: '700128359', year: '2016'}],
        museum: '',
        country: '',
        city: '',
        medium: '',
        period: ''
      }
 ];


@Injectable()
export class ArtworkService{

  private artworkAPI = 'http://localhost:2994/api/artworks';

    constructor(private http: Http) { }

  getAll() : Artwork[] {
    return ARTWORKS.map(p => this.clone(p));
  }
  get(id: number) : Artwork {
    return this.clone(ARTWORKS.find(p => p.id === id));
  }

  save(artwork: Artwork){
    let originalArtwork = ARTWORKS.find(p => p.id === artwork.id);
    if (originalArtwork) Object.assign(originalArtwork, artwork);
  }

  getByTitle(title: string): Observable<any> {
      const url = `${this.artworkAPI}?title=${title}`;
      return this.http.get(url)
            .map(this.extractData)
            .catch((error: any) => {return Observable.throw(error.message);});
  }

  private clone(object: any){
    return JSON.parse(JSON.stringify(object));
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
}