import { AbstractEvent } from './abstract/abstract-event';
import type { Entities } from './entities';

export class MessageEvent extends AbstractEvent {
	constructor(nick: string, timestamp: number, data: string, entities: Entities) {
		super(nick);
		this.timestamp = timestamp;
		this.data = data;
		this.entities = entities;
	}
	public timestamp: number;
	public data: string;
	public entities: Entities;
}
