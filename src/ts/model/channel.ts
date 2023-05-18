export class Channel {
	constructor(channel: string, service: string, path: string) {
		this.channel = channel;
		this.service = service;
		this.path = path;
	}
	public channel: string;
	public service: string;
	public path: string;
}
