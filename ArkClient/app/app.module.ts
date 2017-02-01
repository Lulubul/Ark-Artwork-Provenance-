import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './routes/app.routes';
import { ArtworkService }  from './artwork/artwork.service';
import { ArtistService }  from './artist/artist.service';

import { AppComponent }  from './app.component';
import { ArkComponent }  from './ark-index/ark-index.component';
import { ArtworkDetailsComponent } from './artwork-details/artwork-details.component';
import { ArtworkProvenanceComponent } from './artwork-provenance/artwork-provenance.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule ],
  declarations: [ AppComponent, ArkComponent, ArtworkDetailsComponent, ArtworkListComponent, ArtworkProvenanceComponent],
  providers: [
    ArtworkService, ArtistService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
