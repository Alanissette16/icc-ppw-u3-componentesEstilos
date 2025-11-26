import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: `./card.html`,
  //styleUrl: 'css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card { }
