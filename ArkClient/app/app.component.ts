import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ArtworkService } from './artwork.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './ark-index.component.html',
  providers: [ArtworkService],
  directives: [ROUTER_DIRECTIVES]

})
export class AppComponent {	
  title:string = '';
}
