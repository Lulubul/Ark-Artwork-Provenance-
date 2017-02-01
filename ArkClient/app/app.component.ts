import { Component } from '@angular/core';
import { ArtworkService } from './artwork/artwork.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './ark-index/ark-index.component.html',
  providers: [ArtworkService]

})
export class AppComponent {	
  title:string = '';
}
