export function handleKeydown({
	event, 
	key, 
	onKeydown
}) {
	if (event.key.toLowerCase() === key.toLowerCase()) onKeydown()
}