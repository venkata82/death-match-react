export const RECEIVE_WARRIORS = 'RECEIVE_WARRIORS';
export const CHOOSE_OPPONENTS = 'CHOOSE_OPPONENTS';
export const NOTIFY = 'NOTIFY';
export const NOTIFY_CLEAR = 'NOTIFY_CLEAR';

let notificationId = 0;

// TODO: i'm not sure I'm feeling this because it's used only for test code
export function setNotificationId(value) {
	notificationId = value;	
}

export function receiveWarriors(warriors) {
  return { type: RECEIVE_WARRIORS, warriors };
}

export function chooseOpponents(warriors) {
  return { type: CHOOSE_OPPONENTS };
}

export function notify(message, theme = null, autoDismissTimeout = null) {
  notificationId++;
  return { type: NOTIFY, id: notificationId, message, theme, autoDismissTimeout };
}

export function notifyClear(id) {
  return { type: NOTIFY_CLEAR, id };
}