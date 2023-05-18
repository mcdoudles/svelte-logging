import { AbstractEvent } from './abstract/abstract-event';

export class QuitEvent extends AbstractEvent {
	constructor(nick: string, timestamp: number) {
		super(nick);
		this.timestamp = timestamp;
	}
	public timestamp: number;
}
