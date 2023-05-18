<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import { quits } from '../ts/store/stores';
</script>

<DataTable style="margin: 12px; width: -webkit-fill-available">
	<Head>
		<Row>
			<Cell
				style="background-color: peru;
            border-right-style: dashed;">Time</Cell
			>
			<Cell style="background-color: peru">User</Cell>
		</Row>
	</Head>
	<Body>
		{#each $quits as quit}
			<Row>
				<Cell style="border-right-style: dashed;"
					>{new Date(quit.timestamp).toLocaleTimeString()}</Cell
				>
				<Cell>{quit.nick}</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>
