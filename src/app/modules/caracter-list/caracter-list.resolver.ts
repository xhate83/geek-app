import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CaracterService } from '../../services/caracter.service';
import { ResolveFn } from '@angular/router';

export const resolveGetCaracterList: ResolveFn<any> = (): Observable<any> => {
    const caracterService= inject(CaracterService);
    return caracterService.getCaracterList();
}
