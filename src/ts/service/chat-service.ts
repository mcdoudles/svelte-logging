import { browser } from '$app/environment';
import { MessageTypes } from '../enum/message-types';
import type { JoinEvent } from '../model/join-event';
import type { MessageEvent } from '../model/message-event';
import type { Nick } from '../model/nick';
import type { QuitEvent } from '../model/quit-event';
import type { ViewerStateEvent } from '../model/viewer-state-event';
import { joins, messages, quits, users, viewerStates } from '../store/stores';

export function connectToChat() {
	if (browser) {
		const socket = new WebSocket('wss://chat.strims.gg/ws');
		socket.addEventListener('open', () => {
			console.log('opened');
		});

		socket.addEventListener('message', (message) => {
			if (message && message.data) {
				const type = message.data.substring(0, message.data.indexOf('{')).trim();
				const data = JSON.parse(message.data.substring(message.data.indexOf('{')));
				switch (type) {
					case MessageTypes[MessageTypes.MSG]:
						messages.update((array) => [...array, data as MessageEvent]);
						break;
					case MessageTypes[MessageTypes.VIEWERSTATE]:
						viewerStates.update((array) => [...array, data as ViewerStateEvent]);
						break;
					case MessageTypes[MessageTypes.NAMES]:
						break;
					case MessageTypes[MessageTypes.JOIN]:
						joins.update((array) => [...array, data as JoinEvent]);
						break;
					case MessageTypes[MessageTypes.QUIT]:
						quits.update((array) => [...array, data as QuitEvent]);
						break;
					default:
						break;
				}
				if (data && data.nick) {
					users.update((set) => set.add(data.nick));
					data.entities?.nicks?.forEach((nick: Nick) => users.update((set) => set.add(nick.nick)));
				}
			}
		});
		socket.addEventListener('error', (error) => console.error(error));
	}
}
