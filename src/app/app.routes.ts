import { Routes } from '@angular/router';
import { DaisyuiPage } from './features/daisyui-page/daisyui-page';
import { EstilosPage } from './features/estilos-page/estilos-page';
import { SimpsonDetailPageComponent } from './features/simpson-detail-page/simpson-detail-page';
import { SimpsonsPage } from './features/simpsons-page/simpsons-page';

export const routes: Routes = [
  {
  path: '',
  redirectTo: 'inicio',
  pathMatch: 'full'
  },
  {
    path: 'estilos',
    component: EstilosPage,
  },
  {
    path: 'inicio',
    component: DaisyuiPage,
  },
  {
  path: 'simpsons',
  component: SimpsonsPage,
},
{
  path: 'simpsons/:id',
  component: SimpsonDetailPageComponent,
}
];
