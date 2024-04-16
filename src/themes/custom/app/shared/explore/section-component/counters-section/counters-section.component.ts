import { Component, ViewEncapsulation } from '@angular/core';
import { CountersSectionComponent as BaseComponent } from '../../../../../../../app/shared/explore/section-component/counters-section/counters-section.component';

@Component({
  selector: 'ds-counters-section',
  styleUrls: ['./counters-section.component.css'],
  templateUrl: './counters-section.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class CountersSectionComponent extends BaseComponent {}
