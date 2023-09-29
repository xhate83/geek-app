import { createAction, props } from '@ngrx/store';

export const selectCharacter = createAction(
  '[Character List] Select Character',
  props<{ id: number }>()
);

export const deselectCharacter = createAction(
  '[Character List] Deselect Character',
  props<{ id: number }>()
);

export const clearSelection = createAction(
    '[Character List] Clear selection'
  );