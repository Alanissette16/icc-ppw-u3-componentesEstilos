import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  imports: [],
  templateUrl: `./Tabla.html`,
  //styleUrl: 'css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tabla { }
