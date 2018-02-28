var value;
var count=0;
$('document').ready(function(){
	$('#p').on('click', function(){
		value =	$('#i1').val()
		$('body').append('<p>' + value + '</p>')
	})

	$('#h').on('click', function(){
		value =	$('#i1').val()
		$('body').append('<h' + value.slice(-1) + '>' + value.slice(0, length-1) + '</h' + value.slice(-1) + '>')
	})

	$('#i').on('click', function(){
		value =	$('#i1').val()
		$('body').append('<img src="' + value + '">')
	})

	$('#t').on('click', function(){
		value =	$('#i1').val()
		$('title').text(value)
	})

	$('#l').on('click', function(){
		value =	$('#i1').val()
		$('body').append('<ol id='+count+'>' + value + '</ol>')
		var numI = prompt('How many list items?')
		while(numI > 0){
			var lI = prompt('add a list item')
			$("#"+count).append('<li>' + lI + '</li>')
			
			numI--
		}
		count++

	})

	$('#a').on('click', function(){
		value =	$('#i1').val()
		var link = prompt('enter a link')
		$('body').append('<a href="'+link+'">'+value+'</a>')
		
	})

	// $('<button>undo<button'>).on('click', function(){
	// 	repl
	// })

})