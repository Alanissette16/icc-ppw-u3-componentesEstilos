import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-responsive',
  imports: [],
  templateUrl: `./cardResponsive.html`,
  //styleUrl: './cardResponsive.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardResponsive { }
