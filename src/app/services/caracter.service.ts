import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, forkJoin, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { IResponse } from '../models/response.model';
import { ICaracter } from '../models/caracter.model';



@Injectable({
  providedIn: 'root'
})
export class CaracterService {

  apiUrl = environment.apiUrl;
  private _httpClient: HttpClient = inject(HttpClient);
  private _responseApi: BehaviorSubject<any> = new BehaviorSubject(null);


  get infoApi$(): Observable<IResponse>
  {
    return this._responseApi.asObservable();
  }


  public getCaracterList(page: number = 1): Observable<IResponse> {
    return this._httpClient.get<IResponse>(`${this.apiUrl}/character?page=${page}`).pipe(
      tap((data: IResponse) => {
        this._responseApi.next(data);
      })
    );
  }

  public getCaracterDetails(caractersIds: number[]): Observable<ICaracter[]> {
    if (!caractersIds || caractersIds.length === 0) {
      return of([]); 
    }
    const observables = caractersIds.map(id => 
      this._httpClient.get<ICaracter>(`${this.apiUrl}/character/${id}`)
    );
    return forkJoin(observables);
  }
}