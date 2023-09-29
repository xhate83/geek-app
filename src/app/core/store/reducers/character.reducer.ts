import { createReducer, on } from '@ngrx/store';
import * as CharacterActions from '../actions/character.actions';
import { initialState } from '../state/character.state';


export const characterReducer = createReducer(
    initialState,
    on(CharacterActions.selectCharacter, (state, { id }) => ({ ...state, selectedCharacterIds: [...state.selectedCharacterIds, id] })),
    on(CharacterActions.deselectCharacter, (state, { id }) => ({ ...state, selectedCharacterIds: state.selectedCharacterIds.filter(characterId => characterId !== id) })),
    on(CharacterActions.clearSelection, state => ({ ...state, selectedCharacterIds: [] }))
  );