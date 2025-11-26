import { Component, effect, Injectable, signal } from '@angular/core';



@Component({
  selector: 'app-theme-service',
  imports: [],
  templateUrl: './theme-service.html',
  styleUrl: './theme-service.css',
})

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
private readonly STORAGE_KEY = 'app-theme';

  // Signal que almacena el tema actual
  theme = signal<string>(this.loadTheme());

  constructor() {
    // Efecto que guarda automáticamente el tema cada vez que cambia
    effect(() => {
      const current = this.theme();
      console.log('Tema actual:', current);
      localStorage.setItem(this.STORAGE_KEY, current);
      document.documentElement.setAttribute('data-theme', current);
    });
  }

  // Cargar el tema desde localStorage
  private loadTheme(): string {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    return saved ? saved : 'light';
  }

  // Cambiar el tema
  setTheme(theme: string) {
    this.theme.set(theme);
  }
}