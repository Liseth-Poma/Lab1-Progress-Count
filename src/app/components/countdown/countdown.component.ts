import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnChanges{
  @Input() init: number = 0;
  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  public counter: number = 0;
  private countDownTimeRef: any = null;

  ngOnInit(): void {
    this.startCounter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Valor de init cambio a: ', changes['init'].currentValue);
    this.startCounter();
  }


  startCounter() {
    if (this.init && this.init > 0) {
      this.clearTimeOutRef();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
    this.countDownTimeRef = setTimeout(() => {
      this.counter = this.counter - 1;
      this.processCountdown();
    }, 1000);
  }

  clearTimeOutRef() {
    if (this.countDownTimeRef) {
      clearTimeout(this.countDownTimeRef);
      this.countDownTimeRef = null;
    }
  }

  processCountdown() {
    this.onDecrease.emit(this.counter);
    console.log("La cuenta va en: ", this.counter);
    if (this.counter === 0) {
      this.onComplete.emit();
      console.log("--------------Fin del Conteo------------------")
    } else {
      this.doCountdown();
    }
  }
}
