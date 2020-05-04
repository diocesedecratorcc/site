/*Esse js vai adicionar comportamentos para as páginas das dioceses.*/ 
var imported = document.createElement('script');
imported.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
document.head.appendChild(imported); 
var apresentacao, presidencia, elemento;

window.onload = function(){
  $.ajax({
    url:"https://raw.githubusercontent.com/diocesedecratorcc/site/master/crato/apresentacao.html",
    dataType: 'html',
    success: function(response){
		//$('#main').html(response);
    apresentacao = response;
    }
    
});
$.ajax({
    url:"https://raw.githubusercontent.com/diocesedecratorcc/site/master/crato/presidencia.html",
    dataType: 'html',
    success: function(response){
		//$('#main').html(response);
    presidencia = response;
    }
});
}

function rolar_para(elemento) {
	var content="<h1>None</h1>";
  if(elemento == "presidencia"){
	  content=presidencia;
	  alert('S');
  }else{
	  alert('N');
  }
	$('#main').html(content);
  //$('html, body').animate({    scrollTop: $(elemento).offset().top    }, 2000);
}

  
