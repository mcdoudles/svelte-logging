import { AbstractEvent } from './abstract/abstract-event';
import type { Channel } from './channel';

export class ViewerStateEvent extends AbstractEvent {
	constructor(nick: string, online: boolean, channel: Channel) {
		super(nick);
		this.online = online;
		this.channel = channel;
	}
	public online: boolean;
	public channel: Channel;
}
