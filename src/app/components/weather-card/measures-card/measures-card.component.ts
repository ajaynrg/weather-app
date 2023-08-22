import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-measures-card',
  templateUrl: './measures-card.component.html',
  styleUrls: ['./measures-card.component.css']
})
export class MeasuresCardComponent {
  // @Input() measureValue;
  // @Input() imgUrl;
  @Input() measuresArray;
}
