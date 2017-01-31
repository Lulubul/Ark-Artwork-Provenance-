import { Routes, RouterModule } from '@angular/router';

import { ArtworkDetailsComponent } from '../artwork-details/artwork-details.component';
import { ArtworkProvenanceComponent } from '../artwork-provenance/artwork-provenance.component';
import { ArkComponent } from '../ark-index/ark-index.component';
import { ArtworkListComponent } from '../artwork-list/artwork-list.component';

// Route config let's you map routes to components
const routes: Routes = [
  {
    path: 'ark',
    component: ArkComponent,
  },
  {
   path: 'artworks',
   component: ArtworkListComponent
  },
  {
    path: 'artworks/:id',
    component: ArtworkDetailsComponent
  },
  {
    path: 'provenance/:id',
    component: ArtworkProvenanceComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/artworks',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
