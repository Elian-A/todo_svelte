<script>
	import { enhance } from "$app/forms";
</script>

<h1>Todo</h1>
<form method="Post" action="?/createTask" use:enhance>
	<input type="hidden" name="userId" value={1} />
	<label for="title">
		<input type="text" name="title" required />
	</label>
	<button type="submit">Create task</button>
</form>
<ul />
