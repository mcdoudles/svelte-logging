<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import { messages } from '../ts/store/stores';
</script>

<DataTable style="margin: 12px; width: -webkit-fill-available">
	<Head>
		<Row>
			<Cell
				style="background-color: peru;
                border-right-style: dashed;">Time</Cell
			>
			<Cell
				style="background-color: peru;
                border-right-style: dashed;">User</Cell
			>
			<Cell style="background-color: peru">Message</Cell>
		</Row>
	</Head>
	<Body>
		{#each $messages as message}
			<Row>
				<Cell style="border-right-style: dashed;"
					>{new Date(message.timestamp).toLocaleTimeString()}</Cell
				>
				<Cell style="border-right-style: dashed;">{message.nick}</Cell>
				<Cell>{message.data}</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>

<style>
</style>
