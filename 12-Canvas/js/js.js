
(function($) {
	$(document).ready(function() {
		bg=$('#bg'),
		n=0;
		ruleta= $('#bg').html('<div class="ruleta" > </div>');

		bg.pan({fps: 25, speed: 3, dir: 'left'}); 

        //1 amarilla  , 2 violeta, 3 azul, 4 naranja , 5 verde

        function Mariposa(tipo){
        	var color;
        	switch(tipo){
        		case 1:
        		color="img/mariposaAmarilla.png";
        		break;
        		case 2:
        		color="img/mariposasVioleta.png";
        		break;
        		case 3:
        		color="img/mariposasAzul.png";
        		break;
        		case 4:
        		color="img/mariposasNaranja.png";
        		break;
        		case 5:
        		color="img/mariposasVerde.png";
        		break;
        		case 6:
        		color="img/mariposasRoja.png";
        		break;
        	}
        	bg.append('<div class="mariposa" id="mariposa'+n+'" > </div>');

        	mariposa=  document.getElementById("bg").lastElementChild;
        	mariposa.style.background="url('"+color+"') 0 0 no-repeat";

        	$('#mariposa'+n+'').sprite({fps: 6, no_of_frames: 5,rewind: true});



        	$('#mariposa'+n+'').animate({right: '100%'}, 8000);

n++;		

}

function aleatorio(a,b) {
	return Math.round(Math.random()*(b-a)+parseInt(a));
}



          // 1 facil 2 medio 3 dificl
          function render(dif){
          	cantMariposas=1;
          	for (var i = 0; i <= cantMariposas; i++) {
          	new Mariposa(aleatorio(1,6));
          	};


          }








          function Ruleta(){
          	$('#ruleta').sprite({fps: 2, no_of_frames: 6 ,dir: 'left'});

          	var numero = Math.floor((Math.random() * 10000) + 5000);
          	function startTimer () {

          		setTimeout(stopTimer,numero);

          	}
          	function stopTimer () {

          		//$('#ruleta').spStop();
          	}

          	startTimer();
          }

          function Personaje(){
          	$('#personaje').sprite({fps: 4, no_of_frames: 3 ,dir: 'right'});
          }


          
          Personaje.prototype.jump = function(e){
           if(e.keyCode==32){
          		$('#personaje').animate({top: '-5%'}, 1000);
          		$('#personaje').animate({top: '50%'}, 1000);
            }
          	
          };

          function main(){
          	new Ruleta();
          	personaje=new Personaje();
           $( document ).keydown(function(e) {
          	personaje.jump(e);
          	});
          	render(1);

          }

          main();
      });



})(jQuery);
