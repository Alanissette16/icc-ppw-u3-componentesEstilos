import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DrawerNavbar } from './components/drawer-navbar/drawer-navbar';
import { Footer } from "./components/footer/footer";
import { CodeSimulado } from "./components/codeSimulado/codeSimulado";
import { Tabla } from "./components/Tabla/Tabla";
import { Card } from "./components/card/card";
import { ModalAction } from "./components/modalAction/modalAction";
import { Calendar } from "./components/calendar/calendar";

@Component({
  selector: 'app-daisyui-page',
  standalone: true,
  imports: [CommonModule, DrawerNavbar, Footer, CodeSimulado, Tabla, Card, ModalAction, Calendar],
  templateUrl: './daisyui-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyuiPage {}