import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.scss'
})
export class Componente2Component {

  ColorSeleccionado: string = '';

  updateTheme(color: string): void {
    switch (color) {
      case 'color1':
        this.ColorSeleccionado = 'yellow';
        break;
      case 'color2':
        this.ColorSeleccionado = 'pink';
        break;
      case 'color3':
        this.ColorSeleccionado = 'blue';
        break;
      default:
        this.ColorSeleccionado = '';
        break;
    }
  }
}
