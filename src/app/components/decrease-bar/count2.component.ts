import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-count2',
  standalone: true,
  imports: [],
  templateUrl: './count2.component.html',
  styleUrl: './count2.component.scss'
})
export class Count2Component implements OnChanges {
  @Input() progress: number = 100;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['progress']) {
      this.updateProgress(changes['progress'].currentValue);
    }
  }

  updateProgress(value: number) {
    this.progress = value;
  }
}