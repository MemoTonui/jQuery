$(document).ready(function() {

	$('.login-page').hide();
	$('p.error').hide();

	$('.loginBtn').click(function(){
		$('.login-page').show();
	});
	$('#reset').click(function(){
		$('input').html(" ");
	})

	
});

