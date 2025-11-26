import { Component, effect, inject, signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { Pagination } from "../shared/components/pagination/pagination";
import { HeroSimpsons } from "../simpsons/components/hero-simpsons/hero-simpsons";
import { PaginationService } from '../simpsons/services/PaginationService';
import { SimpsonsService } from '../simpsons/services/SimpsonsService';
import { Breadcrumbs } from "../../shared/components/breadcrumbs/breadcrumbs";
import { BackToTop } from "../../shared/components/back-to-top/back-to-top";

@Component({
  selector: 'app-simpsons-page',
  standalone: true,
  imports: [RouterLink, Pagination, HeroSimpsons, Breadcrumbs],
  templateUrl: './simpsons-page.html',
  styleUrl: './simpsons-page.css',
})
export class SimpsonsPage {
private simpsonsService = inject(SimpsonsService);
  paginationService = inject(PaginationService);

  charactersPerPage= signal(10);
  totalPages = signal(0);

  constructor() {
    // Effect que actualiza el número de páginas cuando hay datos válidos
    effect(() => {
      if (this.simpsonsResource.hasValue()) {
        this.totalPages.set(this.simpsonsResource.value().pages);
      }
    });
  }

  simpsonsResource2 = toSignal(
    this.simpsonsService.getCharacters(this.paginationService.currentPage()).pipe(
      map(res => res)
    ),
    { initialValue: null }
  );

  simpsonsResource = rxResource({
  params: () => ({
    page: this.paginationService.currentPage() - 1,
    limit: this.charactersPerPage(),
  }),
  stream: ({ params }) => {
    return this.simpsonsService.getCharactersOptions({
      offset: params.page,
      limit: params.limit,
    });
  },
});

}
