import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  moduleId: module.id,
  selector: 'ark-app',
  templateUrl: './ark-index.component.html',
  styleUrls: ['./ark-index.component.css']
})
export class ArkComponent {
  title = 'ArK';
}