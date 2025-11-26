import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-modal-action',
  imports: [],
  templateUrl: `./modalAction.html`,
  //styleUrl: './modalAction.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAction { }
