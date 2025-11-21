import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-barra-component',
  standalone: true,
  imports: [CommonModule],   // 👈 IMPORTANTE
  templateUrl: `./BarraComponent.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarraComponent {

  progreso = signal(0);

  actualizarProgreso(event: Event) {
    const valor = Number((event.target as HTMLInputElement).value);
    this.progreso.set(valor);
  }

  esRojo() {
    return this.progreso() < 40;
  }

  esAmarillo() {
    const p = this.progreso();
    return p >= 40 && p <= 70;
  }

  esVerde() {
    return this.progreso() > 70;
  }
}
