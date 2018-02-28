var value;
var count=0;
var dcounter = 0
function placement(){
	var place = Number(prompt('which division?'))
	if (dcounter === 0 ){
		alert("Please creat a division first ")
	}
	else if(place === 0 || place === NaN || place > dcounter){
		alert("Invalid input")
	}
	return place
	}
	

$('document').ready(function(){

	$('#para').on('click', function(){

		value =	$('#i1').val()
		$('#div'+placement()).append('<p>' + value + '</p>')
	})

	$('#head').on('click', function(){
		value =	$('#i1').val()
		var size = prompt('What size? 1 > 6')
		$('#div'+placement()).append('<h' + size + '>' + value + '</h' + size + '>')
	})

	$('#img').on('click', function(){
		value =	$('#i1').val()
		$('#div'+placement()).append('<img class="img-responsive" src="' + value + '">')
	})

	$('#title').on('click', function(){
		value =	$('#i1').val()
		$('title').text(value)
	})

	$('#list').on('click', function(){
		value =	$('#i1').val()
		$('#div'+placement()).append('<ol id='+count+'>' + value + '</ol>')
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
		$('#div'+placement()).append('<a href="'+link+'">'+value+'</a>')
		
	})

	$('#division').on('click', function(){
		dcounter++
		$('body').append('<div id=div'+dcounter+'>'+ dcounter +'</div>')
	})

	$('#clear').on('click', function(){
		var x = placement()
		$('#div'+ x).html(x)
	})
$('#delete').on('click', function(){
		var x = placement()
		$('#div'+ x).remove()
	})
$("#hide").on("click", function(){
$('nav').hide()

})


	

	// $('<button>undo<button'>).on('click', function(){
	// 	repl
	// })

})