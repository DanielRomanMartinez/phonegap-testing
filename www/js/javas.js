function getNameAndPrint(){
	var nombre = $('#nombre').val();
	$('#nombre_introducido').show();
	$('#nombre_introducido').html('Tu nombre es: <strong>'+nombre+'<strong>');
}

$(function() {

	alert('THE APP STARTED!');

	$('#btn-submit').on("click", function() {
		getNameAndPrint();		
	});

	$( "#form_nombre" ).submit(function( event ) {
		getNameAndPrint();		
	});
});