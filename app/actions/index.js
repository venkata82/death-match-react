export const RECEIVE_WARRIORS = 'RECEIVE_WARRIORS';
export const CHOOSE_OPONENTS = 'CHOOSE_OPONENTS';
export const NOTIFY = 'NOTIFY';
export const NOTIFY_CLEAR = 'NOTIFY_CLEAR';

export function receiveWarriors(warriors) {
  return { type: RECEIVE_WARRIORS, warriors };
}

export function chooseOpponents(warriors) {
  return { type: CHOOSE_OPONENTS };
}

export function notify(message, status = null) {
  return { type: NOTIFY, message, status };
}

export function notifyClear() {
  return { type: NOTIFY_CLEAR };
}