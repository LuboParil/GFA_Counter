let counter = 0;

$('h2').text(counter);

$('#btn-increaser').click( () => {
	counter++;
	$('h2').text(counter);
});
$('#btn-decreaser').click( () => {
	counter--;
	$('h2').text(counter);
});
