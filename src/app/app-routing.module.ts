import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../app/components/layout/layout.component';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'caracter-list',
      },
      {
        path: 'caracter-list',
        loadChildren: () => import('./modules/caracter-list/caracter-list.module').then(m => m.CaracterListModule)
      },
      {
        path: 'caracter-detail',
        loadChildren: () => import('./modules/caracter-detail/caracter-detail.module').then(m => m.CaracterDetailModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'caracter-list',
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
