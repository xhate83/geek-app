import { Component, OnDestroy, inject, OnInit } from '@angular/core';
import { Subject, switchMap, take, takeUntil  } from 'rxjs';
import { Router } from '@angular/router';
import { CaracterService } from '../../services/caracter.service';
import { ICaracter } from '../../models/caracter.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/state/character.state';
import { selectSelectedCharacterIds } from '../../core/store/selectors/character.selectors';


@Component({
  selector: 'app-caracter-detail',
  templateUrl: './caracter-detail.component.html',
})
export class CaracterDetailComponent implements OnDestroy, OnInit {


  caracters: ICaracter[] = [];
  isLoading = true;
  private _router = inject(Router);
  private _store: Store<AppState> = inject(Store);
  private _caracterService = inject(CaracterService);
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  

  ngOnInit(): void {
    this._store.select(selectSelectedCharacterIds).pipe(
      take(1),
      switchMap((ids: number[]) => {
        return this._caracterService.getCaracterDetails(ids);
      }),
      takeUntil(this._unsubscribeAll)
    ).subscribe((res => {
      this.isLoading = false;
      this.caracters = res;
    }));

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  goToList(): void {
    this._router.navigate(['/caracter-list']);
  }

}