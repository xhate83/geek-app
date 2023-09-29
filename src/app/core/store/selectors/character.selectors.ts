import { createSelector } from "@ngrx/store";
import { AppState, CharacterState } from "../state/character.state";

export const selectCharacterState = (state: AppState) => state.caracter;

export const selectSelectedCharacterIds = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.selectedCharacterIds
);