import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import type { JoinEvent } from '../model/join-event';
import type { MessageEvent } from '../model/message-event';
import type { QuitEvent } from '../model/quit-event';
import type { ViewerStateEvent } from '../model/viewer-state-event';

export let messages: Writable<MessageEvent[]> = writable([]);
export let viewerStates: Writable<ViewerStateEvent[]> = writable([]);
export let joins: Writable<JoinEvent[]> = writable([]);
export let quits: Writable<QuitEvent[]> = writable([]);
export let users: Writable<Set<string>> = writable(new Set());
