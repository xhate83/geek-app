import { Component, inject, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { LoadingService } from '../../services/loading-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationBarComponent, MatProgressBarModule],
})
export class LayoutComponent implements AfterViewInit {

  private _loadingService: LoadingService = inject(LoadingService);
  isLoading$: Observable<boolean> = this._loadingService.isLoading$;
  private _changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  ngAfterViewInit(): void {
  
    this._changeDetectorRef.detectChanges();
   
  }
}