<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import { joins } from '../ts/store/stores';
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
		{#each $joins as join}
			<Row>
				<Cell style="border-right-style: dashed;"
					>{new Date(join.timestamp).toLocaleTimeString()}</Cell
				>
				<Cell>{join.nick}</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>
