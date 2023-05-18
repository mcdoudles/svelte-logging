<script lang="ts">
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import { users } from '../ts/store/stores';
</script>

<DataTable style="margin: 12px; width: -webkit-fill-available">
	<Head>
		<Row>
			<Cell style="background-color: peru">User</Cell>
		</Row>
	</Head>
	<Body>
		{#each Array.from($users.values()) as user}
			<Row>
				<Cell>{user}</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>
