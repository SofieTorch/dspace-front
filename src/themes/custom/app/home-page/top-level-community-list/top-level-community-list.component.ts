import { Component, ViewEncapsulation } from '@angular/core';
import { TopLevelCommunityListComponent as BaseComponent } from '../../../../../app/home-page/top-level-community-list/top-level-community-list.component';

@Component({
  selector: 'ds-top-level-community-list',
  // styleUrls: ['./top-level-community-list.component.scss'],
  styleUrls: ['./top-level-community-list.component.css'],
  // templateUrl: './top-level-community-list.component.html'
  templateUrl: './top-level-community-list.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class TopLevelCommunityListComponent extends BaseComponent {}
