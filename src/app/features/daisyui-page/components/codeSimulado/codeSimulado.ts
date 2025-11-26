import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-code-simulado',
  imports: [],
  templateUrl: `./codeSimulado.html`,
  //styleUrl: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeSimulado { }
