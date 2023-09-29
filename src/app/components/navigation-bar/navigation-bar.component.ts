import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';4
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
})
export class NavigationBarComponent  {

  private _router = inject(Router);

  goToList(): void {
    this._router.navigate(['/caracter-list']);
  }
  goToDetail(): void {
    this._router.navigate(['/caracter-detail']);
  }

 
}