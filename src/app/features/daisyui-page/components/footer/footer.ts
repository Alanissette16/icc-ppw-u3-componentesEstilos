import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: `./footer.html`,
  //styleUrl: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer { }
