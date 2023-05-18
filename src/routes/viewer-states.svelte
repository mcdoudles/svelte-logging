<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import { viewerStates } from '../ts/store/stores';
</script>

<DataTable style="margin: 12px; width: -webkit-fill-available">
	<Head>
		<Row>
			<Cell
				style="background-color: peru;
            border-right-style: dashed;">User</Cell
			>
			<Cell
				style="background-color: peru;
            border-right-style: dashed;">Online</Cell
			>
			<Cell style="background-color: peru;">Channel</Cell>
		</Row>
	</Head>
	<Body>
		{#each $viewerStates as viewerState}
			<Row>
				<Cell style="border-right-style: dashed;">{viewerState.nick}</Cell>
				<Cell>{viewerState.online}</Cell>
				<Cell
					>{#if viewerState.channel}{viewerState.channel.channel} ({viewerState.channel
							.service}){/if}</Cell
				>
			</Row>
		{/each}
	</Body>
</DataTable>
