import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CaracterListComponent } from './caracter-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { resolveGetCaracterList } from './caracter-list.resolver';
import { FiltersComponent } from '../../components/filters/filters.component';

const routes: Route[] = [
  {
    path: '',
    component: CaracterListComponent,
    resolve: {
      data: resolveGetCaracterList
    },
  }
]


@NgModule({
  declarations: [
    CaracterListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    FiltersComponent
  ]
})
export class CaracterListModule { }
