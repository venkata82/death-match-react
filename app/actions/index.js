export const RECEIVE_WARRIORS = 'RECEIVE_WARRIORS';
export const CHOOSE_OPONENTS = 'CHOOSE_OPONENTS';

export function receiveWarriors(warriors) {
  return { type: RECEIVE_WARRIORS, warriors };
}

export function chooseOponents(warriors) {
  return { type: CHOOSE_OPONENTS };
}