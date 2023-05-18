import type { Emote } from './emote';
import type { Nick } from './nick';

export class Entities {
	constructor(emotes: Emote[], nicks: Nick[]) {
		this.emotes = emotes;
		this.nicks = nicks;
	}
	public emotes: Emote[];
	public nicks: Nick[];
}
