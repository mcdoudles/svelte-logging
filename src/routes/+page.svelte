<script lang="ts">
	import { connectToChat } from '../ts/service/chat-service';
	import Joins from './joins.svelte';
	import Messages from './messages.svelte';
	import Quits from './quits.svelte';
	import Users from './users.svelte';
	import ViewerStates from './viewer-states.svelte';
	import TopAppBar, { Row, Section, Title as HeaderTitle } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import Drawer, { AppContent, Content, Header, Title } from '@smui/drawer';
	import List, { Item, Text } from '@smui/list';
	import { MessageTypes } from '../ts/enum/message-types';

	connectToChat();

	let open: boolean = true;
	let tab: string = 'MSG';

	function setTab(value: string) {
		tab = value;
	}
</script>

<Drawer variant="dismissible" bind:open>
	<Header>
		<Title>Content</Title>
	</Header>
	<Content>
		<List>
			<Item
				href="javascript:void(0)"
				on:click={() => setTab(MessageTypes[MessageTypes.MSG])}
				activated={tab === MessageTypes[MessageTypes.MSG]}
			>
				<Text>Messages</Text>
			</Item>
			<Item
				href="javascript:void(0)"
				on:click={() => setTab(MessageTypes[MessageTypes.JOIN])}
				activated={tab === MessageTypes[MessageTypes.JOIN]}
			>
				<Text>Joins</Text>
			</Item>
			<Item
				href="javascript:void(0)"
				on:click={() => setTab(MessageTypes[MessageTypes.QUIT])}
				activated={tab === MessageTypes[MessageTypes.QUIT]}
			>
				<Text>Quits</Text>
			</Item>
			<Item
				href="javascript:void(0)"
				on:click={() => setTab(MessageTypes[MessageTypes.VIEWERSTATE])}
				activated={tab === MessageTypes[MessageTypes.VIEWERSTATE]}
			>
				<Text>Viewerstates</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={() => setTab('USERS')} activated={tab === 'USERS'}>
				<Text>Userlist</Text>
			</Item>
		</List>
	</Content>
</Drawer>
<AppContent>
	<div class="top-app-bar-container flexor">
		<TopAppBar variant="static" prominent={false} dense={false} color={'primary'}>
			<Row>
				<Section>
					<IconButton class="material-icons" on:click={() => (open = !open)}>menu</IconButton>
					<HeaderTitle>Strims logs</HeaderTitle>
				</Section>
			</Row>
		</TopAppBar>
	</div>
	<div>
		{#if tab === MessageTypes[MessageTypes.MSG]}
			<Messages />
		{/if}
		{#if tab === MessageTypes[MessageTypes.JOIN]}
			<Joins />
		{/if}
		{#if tab === MessageTypes[MessageTypes.QUIT]}
			<Quits />
		{/if}
		{#if tab === MessageTypes[MessageTypes.VIEWERSTATE]}
			<ViewerStates />
		{/if}
		{#if tab === 'USERS'}
			<Users />
		{/if}
	</div>
</AppContent>

<style>
</style>
