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
	return '#div' + place
	}

function value(str){
	var v = prompt(str)
	return v
}	



$('document').ready(function(){


	$('#para').on('click', function(){
		$(placement()).append('<p>' + value('Enter your paragraph') + '</p>')
	})

	$('#head').on('click', function(){
		var size = value('What size? 1 > 6')
		$(placement()).append('<h' + size + '>' + value('Enter text') + '</h' + size + '>')
	})

	$('#img').on('click', function(){
		$(placement()).append('<img class="img-responsive" src="' + value('Enter URL') + '">')
	})

	$('#title').on('click', function(){
		$('title').text(value('Enter title'))
	})

	$('#list').on('click', function(){
		$(placement()).append('<ol id='+count+'>' + value('Enter list title') + '</ol>')
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
		$(placement()).append('<a href="'+link+'">'+value('Enter name of link')+'</a>')
		
	})

	$('#division').on('click', function(){
		dcounter++
		$('body').append('<div id=div'+dcounter+'><span class="tohell">'+ dcounter +'</span></div>')
	})

	$('#clear').on('click', function(){
		var x = placement()
		$(x).html(x.slice(-1))
	})

	$('#delete').on('click', function(){ 
		$(placement()).remove()
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
	$(placement()).css("font-size",value('Enter number + px'))

	})

	$('#family').on('click', function(){
	$(placement()).css('font-family',value('Enter font name'))
	})

	$('#color').on('click', function(){
	$(placement()).css('color',value('Enter color'))
	})

	$('#imgCircle').on('click', function(){
		$(placement() + ' img').css('border-radius', '50%')
	})

	$('#imgBorder').on('click', function(){
		$(placement() + ' img').css('border', '5px solid #021a40')
	})

	$('#imgSize').on('click', function(){
		(placement()).css({'height': '50%', 'width':'50%'})
	})

	$('#backgroundD').on('click',function(){
  	$(placement()).css("background-color", value('Choose a color') )
 	})

  	$('#background').on('click',function(){
  	$('body').css("background-color", value('Choose a color') )
 	})

	$('#alignment').on('click',function() {
	var v = value("pick from , text-center or text-right or text-left")
	$(placement()).removeClass('text-center text-right text-left').addClass(v)
	})

	$('#borders').on('click',function(){
	var b = value("pick from, solid or dashed or dotted or double ") 
	$(placement()).css("border-style",b )
	})

	$('#margin').on('click',function(){
	$(placement()).css("margin", value("Enter margins top right bottom left") )
	})

	$('#padding').on('click',function(){
	$(placement()).css("padding", value("Enter padding top right bottom left") )
	})



})