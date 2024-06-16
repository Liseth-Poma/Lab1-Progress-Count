import { Component, EventEmitter, Output,  } from '@angular/core';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.scss'
})
export class Componente1Component {
  @Output() colorElejido: EventEmitter<string> = new EventEmitter<string>();

  SeleccionarColor(color: string): void {
    this.colorElejido.emit(color);
  }
  
}
