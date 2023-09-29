export interface CharacterState {
    selectedCharacterIds: number[];
  }

  export const initialState: CharacterState = {
    selectedCharacterIds: []
};

export interface AppState {
    caracter: CharacterState;
}