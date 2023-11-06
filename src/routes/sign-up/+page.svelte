<script lang="ts">
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<form method="POST" action="?/sign-up">
	<div>
		<label for="name">name:</label>
		<input type="text" name="name" id="name" required />
	</div>
	<div>
		<label for="email"> email: </label>
		<input type="email" name="email" id="email" required />
	</div>
	<div>
		<label for="password"> password: </label>
		<input type="password" name="password" id="password" required />
	</div>
	<div>
		<button>Sign up</button>
	</div>
</form>
