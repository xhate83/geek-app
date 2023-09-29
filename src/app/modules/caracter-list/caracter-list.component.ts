import { Component, OnDestroy, inject, OnInit } from '@angular/core';
import { Subject, takeUntil  } from 'rxjs';
import { SnackBarService } from '../../utilities/snack-bak.service';
import { Router } from '@angular/router';
import { CaracterService } from '../../services/caracter.service';
import { ICaracter } from '../../models/caracter.model';
import { IInfo } from '../../models/response.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/state/character.state';
import * as CharacterActions from '../../core/store/actions/character.actions';
import { selectSelectedCharacterIds } from '../../core/store/selectors/character.selectors';


@Component({
  selector: 'app-caracter-list',
  templateUrl: './caracter-list.component.html',
})
export class CaracterListComponent implements OnDestroy, OnInit {


  caracters: ICaracter[] = [];
  selectedCharactersIds: number[] = [];
  infoPagination!: IInfo;
  selectedCharactersCount = 0;
  totalCharacters = 0;
  isLoading = false;
  private _router = inject(Router);
  private _store: Store<AppState> = inject(Store);
  private _snackBarService = inject(SnackBarService);
  private _caracterService = inject(CaracterService);
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  

  ngOnInit(): void {

    this._caracterService.infoApi$.pipe(takeUntil(this._unsubscribeAll)).subscribe(
      response => {
        this.totalCharacters = response.info.count;
        this.infoPagination = response.info;
        this.caracters = response.results;
        this.isLoading = false;
      }
    )

    this._store.select(selectSelectedCharacterIds).pipe(takeUntil(this._unsubscribeAll)).subscribe(ids => {
      this.selectedCharactersIds = [...ids];
      this.selectedCharactersCount = this.selectedCharactersIds.length;
    });

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  selectCaracter(caracter: ICaracter): void {
    if(this.selectedCharactersIds.includes(caracter.id)) {
      this._store.dispatch(CharacterActions.deselectCharacter({ id: caracter.id }));
      return;
    }
    if(this.selectedCharactersIds.length < 3) {
      this.selectedCharactersIds.push(caracter.id);
      this._store.dispatch(CharacterActions.selectCharacter({ id: caracter.id }));
    } else {
      this._snackBarService.openSnackBar('You can only select 3 characters', '⛔');
    }
  }

  clearSelection(): void {
    this._store.dispatch(CharacterActions.clearSelection());
  }

  changePage(event: any) {
    this.isLoading = true;
    const page = event.pageIndex + 1;
    this._caracterService.getCaracterList(page).pipe(takeUntil(this._unsubscribeAll)).subscribe();
  }

  goToDetail(): void {
    this._router.navigate(['/caracter-detail']);
  }

}