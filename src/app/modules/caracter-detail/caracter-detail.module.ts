import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CaracterDetailComponent } from './caracter-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Route[] = [
  {
    path: '',
    component: CaracterDetailComponent,
  }
]


@NgModule({
  declarations: [
    CaracterDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ]
})
export class CaracterDetailModule { }
