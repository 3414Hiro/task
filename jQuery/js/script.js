$(function(){
	var stack = [];
	var cleared = false;
	var lastPushedbutton
	var getLastStackValue = function(){
		return stack[stack.length - 1];
	}
	var isOperator = function(value){
		return (value == "/" ||
			   value == "+" ||
			   value == "-" ||
			   value == "*" );
	}

	

	$('.number').on('click', function(){
		var lastStackValue = stack[stack.length - 1]
		if( isOperator(getLastStackValue()) ){
			if(!cleared){
				$('#result').text('');
				cleared = true;
			}
		}
		var currentValue = $('#result').text();
		var newValue;
		if(currentValue == 0){
			 newValue = $(this).text();
		}else{
			 newValue = currentValue + $(this).text();
		}
		$('#result').text(newValue);
	});



	$('.ope').on('click', function(){
		var ope = $(this).data('ope')
		if(isOperator(lastPushedbutton)){
			stack[stack.length - 1] = ope;
		}else if(lastPushedbutton == '='){
			stack.push(ope);

		}else{
			stack.push($('#result').text());
			stack.push(ope);
		}
		
		cleared = false;
		console.log(stack);
	});


	
	$('#equal').on('click', function(){
		if(lastPushedbutton == "="){
			var lastFormula = stack.slice(stack.length - 2);
			lastFormula.unshift($('#result').text());
			$('#result').text(eval(lastFormula.join('')));
		}else{
		stack.push($('#result').text());
		console.log(stack);
		console.log(stack.join(""));
		var formula = stack.join("")
		$('#result').text(eval(formula));
		}
	});

	var caluculate = function(formulaArray){
		var formula = '';
		var result;
		formulaArray.forEach(function(val, index){
			if(isFinate(val)){
				formula += val;
				result = eval(formula);
				formula
			}else{
				formula += val;
			}
			console.log(formula);
		});
	};


	$('.btn').on('click', function(){
		if($(this).hasClass('number')){
			lastPushedbutton = $(this).data('number');
		}else if($(this).hasClass('ope')){
			lastPushedbutton = $(this).data('ope');
		}else if($(this).attr('id') == 'equal'){
			lastPushedbutton = '=';
		}
	}).on('mousedown',function(){
		$(this).addClass('mousedown');
	}).on('mouseup',function(){
		$(this).removeClass('mousedown');
	});

	$('#ac').on('click', function(){
		$('#result').text(0);
		stack = [];
	})

});


