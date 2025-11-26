import { TitleCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../theme-service/theme-service';

@Component({
  selector: 'app-theme-switcher',
  imports: [TitleCasePipe],
  standalone: true,
  templateUrl: './theme-switcher.html',
})
export class ThemeSwitcherComponent {
  
  themes = ['light', 'dark', 'sunset'];

  private themeService = inject(ThemeService);

  currentTheme = signal<string>(this.getCurrentTheme());

  constructor() {
    // APLICAR TEMA GUARDADO AL INICIAR
    const saved = this.themeService.theme();
    document.documentElement.setAttribute('data-theme', saved);
    this.currentTheme.set(saved);
  }

  private getCurrentTheme(): string {
    return document.documentElement.getAttribute('data-theme') ?? 'light';
  }

  setTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
    this.currentTheme.set(theme);

    // GUARDAR EN EL SERVICIO
    this.themeService.setTheme(theme);
  }
}
