import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignalBoxComponent } from "../components/SignalBoxComponent/SignalBoxComponent";
import { BarraComponent } from "../components/BarraComponent/BarraComponent";

@Component({
  selector: 'app-estilos-page',
  standalone: true,
  templateUrl: './estilos-page.html',
  styleUrl:'./estilos-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SignalBoxComponent, BarraComponent],
})
export class EstilosPage {}