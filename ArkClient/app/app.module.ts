import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routes';
import { ArtworkService }  from './artwork.service';

import { AppComponent }  from './app.component';
import { ArkComponent }  from './ark-index.component';
import { ArtworkDetailsComponent } from './artwork-details.component';
import { ArtworkProvenanceComponent } from './artwork-provenance.component';
import { ArtworkListComponent } from './artwork-list.component';

@NgModule({
  imports: [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent, ArkComponent, ArtworkDetailsComponent, ArtworkListComponent, ArtworkProvenanceComponent],
  providers: [
    ArtworkService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
