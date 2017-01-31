import { Injectable } from '@angular/core';
import { Artist } from './artist';

import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const ARTISTS : ArtistClass[] = [
      {id: 1, name: 'Christ Driving the Money Changers', abstract: 'Christ Driving the Money Changers from the Temple is a painting by El Greco, from 1568, now in the National Gallery of Art in Washington, D.C., in the United States.[1] It depicts the Cleansing of the Temple, an event in the Life of Christ. There exist three other copies of the painting and also a faithful reproduction in the National Gallery in London, which has recently been considered as authentic by scholars in the field of visual arts.[2] Two versions and that other on loan from Madrid are titled Purification of the Temple. The one at the National Gallery in Washington is called Christ Cleansing the Temple. The painting which bears this actual title belongs to the Minneapolis Institute of Art and it is somewhat different from all the other versions of this legendary Christian scene', imageUrl: '../images/El_Greco_13.jpg'}
    
    ];

export class ArtistClass {
  
  	id: number;
    name: string;
    abstract: string;
    imageUrl: string;
    country: String;
    city: String;
    period: String;

    constructor(artist:any) {
    if (artist) {
      this.id = artist.id;
      this.name = artist.name;
      this.abstract = abstract;
    }
  }

}


@Injectable()
export class ArtistService{

  private baseUrl: string = 'localhost:2994/api';
  	constructor(private http : Http){
  }

  getAllArtists() : ArtistClass[]{

    

    	return ARTISTS.map(p => this.clone(p));
  
   
  }

  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }

  
}


