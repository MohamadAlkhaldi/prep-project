var value;
var count=0;
var dcounter = 0
var togle =0
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
function value(str){
	var v = prompt(str)
	return v
}	


$('document').ready(function(){

	$('#para').on('click', function(){
		$('#div'+placement()).append('<p>' + value('Enter your paragraph') + '</p>')
	})

	$('#head').on('click', function(){
		var size = valuevalue('What size? 1 > 6')
		$('#div'+placement()).append('<h' + size + '>' + value('Enter text') + '</h' + size + '>')
	})

	$('#img').on('click', function(){
		$('#div'+placement()).append('<img class="img-responsive" src="' + value('Enter URL') + '">')
	})

	$('#title').on('click', function(){
		$('title').text(value('Enter title'))
	})

	$('#list').on('click', function(){
		$('#div'+placement()).append('<ol id='+count+'>' + value('Enter list title') + '</ol>')
		var numI = value('How many list items?')
		while(numI > 0){
			var lI = value('add a list item')
			$("#"+count).append('<li>' + lI + '</li>')
			
			numI--
		}
		count++

	})

	$('#a').on('click', function(){
		var link = value('Enter a link')
		$('#div'+placement()).append('<a href="'+link+'">'+value('Enter name of link')+'</a>')
		
	})

	$('#division').on('click', function(){
		dcounter++
		$('body').append('<div id=div'+dcounter+'><span class="tohell">'+ dcounter +'</span></div>')
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
$('.tohell').hide()

})

$('#divNum').click(function(){
if(togle % 2 === 0){
	$('.tohell').hide()
} else {$('.tohell').show()}
togle++
})

$('#size').on('click',function(){	
$('#div'+placement()).css("font-size",value('Enter number + px'))

})

$('#family').on('click', function(){
	$('#div' + placement()).css('font-family',value('Enter font name'))
})


  $('#background').on('click',function(){
  $('body').css("background-color", value('Choose a color') )
 })

$('#alignment').on('click',function() {

	var v = value("pick from , text-center or text-right or text-left")
	$('#div' + placement()).removeClass('text-center text-right text-left').addClass(v)
})
$('#borders').on('click',function(){
	var b = value("pick from, solid or dashed or dotted or double ") 
	$('#div' + placement()).css("border-style",b )

})

$('#margin').on('click',function(){

	$('#div' + placement()).css("margin", value("Enter margins top right bottom left") )
})

$('#padding').on('click',function(){

	$('#div' + placement()).css("padding", value("Enter padding top right bottom left") )
})
	// $('<button>undo<button'>).on('click', function(){
	// 	repl
	// })

})