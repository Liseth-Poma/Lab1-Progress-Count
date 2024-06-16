import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-counter',
  standalone: true,
  imports: [],
  templateUrl: './progress-counter.component.html',
  styleUrl: './progress-counter.component.scss'
})
export class ProgressCounterComponent implements OnChanges {
  @Input() count: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['count']) {
      this.updateCount(changes['count'].currentValue);
    }
  }

  updateCount(value: number) {
    this.count = value;
  }
}