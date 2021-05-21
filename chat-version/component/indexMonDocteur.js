				// function quitter mci modal
				function quit(){
					$('#createGroupdimudocteur').modal('hide')
				   }
					// function mettre à jour
					document.getElementById('btn-primaryc').onclick=function(){
						setTimeout(()=>{
						document.getElementById('update').style.display="block"
						document.getElementById('btn-primaryc').style.display='none'
						document.getElementById('createGroupTitled').style.display='none'
						document.getElementById('createGroupTitleupd').style.display='block'
						$('#createGroupdimudocteur').modal('hide')
						},5000)
					}
		   
							   // functin  voice call end
				   function voicecaleend() {
						   document.getElementById('toutChatdoctorhide').style.display='block'
						   $('#incomingVideoCall').modal('hide')
						   $('.abd-example-modal-lg').modal('hide')
					   }
				   //voice call function
				   function voiceCalling(){
					   document.getElementById('toutChatdoctorhide').style.display='none'
					   $('.abd-example-modal-lg').modal({
						   show:true,
						   backdrop:'static',
						   keyboard:false
					   })
					   $('#incomingVoiceCall').modal('hide')
					   console.log('ok les gars comment vas')
				   }
					   //exchange class
					   function exchangeclass(){
						   $('#webcamip').removeClass('webcamipclassi');
						   $('#webcamip').addClass('webcamipclass');
						   $('#canvasad').removeClass('webcamipclass');
						   $('#canvasad').addClass('webcamipclassi');			
					   }
					   function exchangeclass2a(){
						   $('#webcamip').removeClass('webcamipclass');
						   $('#webcamip').addClass('webcamipclassi');
						   $('#canvasad').removeClass('webcamipclassi');
						   $('#canvasad').addClass('webcamipclass');
						   console.log('pourquoi')
					   }
		   
					   //appel video
					   function toutChatdoctorhide(){
					   const webcamElement = document.getElementById('webcamip');
					   const canvasElement = document.getElementById('canvasip');
					   const snapSoundElement = document.getElementById('snapSoundip');
					   const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
		   
		   
					   webcam.start()
					   .then(result =>{
					   document.getElementById('toutChatdoctorhide').style.display='none'
					   $('.bd-example-modal-lg').modal({
						   show: true,
						   backdrop: 'static',
						   keyboard: false
					   })
					   //endcallvideo
					   document.getElementById('material-icons3').onclick=function(){
						   document.getElementById('toutChatdoctorhide').style.display='block'
						   $('#incomingVideoCall').modal('hide')
						   $('.bd-example-modal-lg').modal('hide')
						   webcam.stop();
					   }
					   console.log("webcam started");
					   })
					   .catch(err => {
						   console.log(err);
					   });
					   var picture = webcam.snap();
					   
		   
					   }
					   //Cacher les boutons
					   function cacherLeboutonicon() {
					   document.getElementById('material-icons2').style.display = "block"
					   document.getElementById('material-icons1').style.display = "none"
					   console.log('je suis et toi')
				   }
		   
				   function cacherLebouton1() {
					   document.getElementById('material-icons1').style.display = "block"
					   document.getElementById('material-icons2').style.display = "none"
		   
				   }
		   
				   function cacherLeboutonA() {
					   document.getElementById('material-icons5').style.display = "block"
					   document.getElementById('material-icons4').style.display = "none"
					   document.getElementById('webcamip2').style.display = "block"
					   document.getElementById('webcambox').style.display = "none"
				   }
		   
				   function cacherLebouton1A() {
					   document.getElementById('material-icons4').style.display = "block"
					   document.getElementById('material-icons5').style.display = "none"
					   document.getElementById('webcambox').style.display = "block"
					   document.getElementById('webcamip2').style.display = "none"
		   
				   }
					   //Cacher les boutons du voice call
					   function cacherLeboutoniconcall() {
					   document.getElementById('material-icons2call').style.display = "block"
					   document.getElementById('material-icons1call').style.display = "none"
					   console.log('je suis et toi')
				   }
		   
				   function cacherLebouton1call(){
					   document.getElementById('material-icons1call').style.display = "block"
					   document.getElementById('material-icons2call').style.display = "none"
		   
				   }
		   
				   function cacherLeboutonAcall() {
					   document.getElementById('material-icons5call').style.display = "block"
					   document.getElementById('material-icons4call').style.display = "none"
				   }
		   
				   function cacherLebouton1Acall() {
					   document.getElementById('material-icons4call').style.display = "block"
					   document.getElementById('material-icons5call').style.display = "none"
					   document.getElementById('webcambox').style.display = "block"
					   document.getElementById('webcamip2').style.display = "none"
				   }
					   //function monTextEnvoieJav
					   function monTextEnvoieJav() {
						   event.preventDefault();
						   var tapemessage = document.getElementById('Typemessage').value;
						   msag = `<div class="chat-message-text">
									   <p>${tapemessage}</p>
									   </div>`
						   document.getElementById('monTextEnvoieJav').innerHTML = msag
						   document.getElementById('Typemessage').value = ""
					   }
					   //function monTextEnvoieRDV
					   function envoyezRDV() {
						   var datetime = document.getElementById('datetimelocal').value;
						   msag = `<div class="chat-message-text">
									   <p>${datetime} <img src="assets/images/alarme.svg" alt=""></p>
									   </div>`
						   document.getElementById('monTextEnvoieRDV').innerHTML = msag
					   }
		   
					   function soummettreOder() {
						   setTimeout(() => {
							   document.getElementById('medicamentUn').style.display = "none"
							   document.getElementById('medicamentdeux').style.display = "none"
							   document.getElementById('medicamenttrois').style.display = "none"
							   document.getElementById('medicamentquatre').style.display = "none"
							   document.getElementById('medicamentcinq').style.display = "none"
							   document.getElementById('medicamentsix').style.display = "none"
							   document.getElementById('medicamentsept').style.display = "none"
							   document.getElementById('medicamenthuit').style.display = "none"
							   document.getElementById('medicamentneuf').style.display = "none"
							   document.getElementById('medicamentdix').style.display = "none"
							   document.getElementById('lesbuttons').style.display = "none"
							   document.getElementById('medicamentHeurededormir').style.display = "block"
						   }, 3000)
					   }
					   // function validerVal()
					   function validerVal() {
						   setTimeout(() => {
							   document.getElementById('accesmessageConfirm').style.display = "none"
							   document.getElementById('messageModaledenvoieOrder').style.display = "block"
						   }, 3000);
						   setTimeout(() => {
							   $('#exampleModalpara').modal('hide').style.display = 'none'
						   }, 12000)
					   }
		   
		   
					   //function Ajouterun
					   function Ajouterun() {
						   document.getElementById('medicamentUn').style.display = 'none'
						   document.getElementById('medicamentdeux').style.display = 'block'
					   }
		   
					   //function Ajouterdeux
					   function Ajouterdeux() {
						   document.getElementById('medicamentdeux').style.display = 'none'
						   document.getElementById('medicamenttrois').style.display = 'block'
					   }
		   
					   //function Ajoutertrois
					   function Ajoutertrois() {
						   document.getElementById('medicamenttrois').style.display = 'none'
						   document.getElementById('medicamentquatre').style.display = 'block'
					   }
					   //function Ajouterquatre
					   function Ajouterquatre() {
						   document.getElementById('medicamentquatre').style.display = 'none'
						   document.getElementById('medicamentcinq').style.display = 'block'
					   }
					   //function Ajoutercinq
					   function Ajoutercinq() {
						   document.getElementById('medicamentcinq').style.display = 'none'
						   document.getElementById('medicamentsix').style.display = 'block'
					   }
					   //function Ajoutersix
					   function Ajoutersix() {
						   document.getElementById('medicamentsix').style.display = 'none'
						   document.getElementById('medicamentsept').style.display = 'block'
					   }
					   //function Ajoutersept
					   function Ajoutersept() {
						   document.getElementById('medicamentsept').style.display = 'none'
						   document.getElementById('medicamenthuit').style.display = 'block'
					   }
					   //function Ajouterhuit
					   function Ajouterhuit() {
						   document.getElementById('medicamenthuit').style.display = 'none'
						   document.getElementById('medicamentneuf').style.display = 'block'
					   }
					   //function Ajouterneuf
					   function Ajouterneuf() {
						   document.getElementById('medicamentneuf').style.display = 'none'
						   document.getElementById('medicamentdix').style.display = 'block'
					   }
		   
					   //function Retourdeux
					   function Retourdeux() {
						   document.getElementById('medicamentdeux').style.display = 'none'
						   document.getElementById('medicamentUn').style.display = 'block'
					   }
		   
					   //function Retourtrois
					   function Retourtrois() {
						   document.getElementById('medicamenttrois').style.display = 'none'
						   document.getElementById('medicamentdeux').style.display = 'block'
					   }
					   //function Retourquatre
					   function Retourquatre() {
						   document.getElementById('medicamentquatre').style.display = 'none'
						   document.getElementById('medicamenttrois').style.display = 'block'
					   }
					   //function Retourcinq
					   function Retourcinq() {
						   document.getElementById('medicamentcinq').style.display = 'none'
						   document.getElementById('medicamentquatre').style.display = 'block'
					   }
					   //function Retoursix
					   function Retoursix() {
						   document.getElementById('medicamentsix').style.display = 'none'
						   document.getElementById('medicamentcinq').style.display = 'block'
					   }
					   //function Retoursept
					   function Retoursept() {
						   document.getElementById('medicamentsept').style.display = 'none'
						   document.getElementById('medicamentsix').style.display = 'block'
					   }
					   //function Retourhuit
					   function Retourhuit() {
						   document.getElementById('medicamenthuit').style.display = 'none'
						   document.getElementById('medicamentsept').style.display = 'block'
					   }
					   //function Retourneuf
					   function Retourneuf() {
						   document.getElementById('medicamentneuf').style.display = 'none'
						   document.getElementById('medicamenthuit').style.display = 'block'
					   }
					   //function retourtrois
					   function Retourdix() {
						   document.getElementById('medicamentdix').style.display = 'none'
						   document.getElementById('medicamentneuf').style.display = 'block'
					   }
		   
					   //function 
					   function sendOrdonnanceModalr() {
		   
						   $('#exampleModalpara').modal({
							   show: true,
							   backdrop: 'static',
							   keyboard: false
						   });
					   }
		   
					   function mahu() {
						   event.preventDefault()
						   var recupererNumberDrug = document.getElementById('genderNomMedi').value;
		   
						   document.getElementById('medicamentUn').style.display = "block"
						   document.getElementById('medicamentdeux').style.display = "block"
		   
					   }
		   
					   function openNav() {
						   document.getElementById("mySidenav").style.width = "320px";
						   setTimeout(() => {
							   document.getElementById('numberNotification').style.display = "none"
						   }, 1000)
		   
					   }
		   
					   function closeNav() {
						   document.getElementById("mySidenav").style.width = "0";
					   }
					   //function orderun
					   function orderuna() {
						   document.getElementById('orderun').style.display = "none"
					   }
		   
					   function orderunb() {
						   document.getElementById('orderun').style.backgroundColor = "rgb(92, 94, 104)"
					   }
		   
					   function orderunc() {
						   $('#validationordonnance').modal({
							   show: true,
							   backdrop: 'static',
							   keyboard: false
						   })
					   }
					   //function test
					   function validationtesta() {
						   document.getElementById('orderdeux').style.display = "none"
					   }
		   
					   function validationtestb() {
						   document.getElementById('orderdeux').style.backgroundColor = "rgb(92, 94, 104)"
					   }
		   
					   function validationtestc() {
						   $('#validationtest').modal({
							   show: true,
							   backdrop: 'static',
							   keyboard: false
						   })
					   }
					   //function test
					   function validationtesttroisa() {
						   document.getElementById('ordertrois').style.display = "none"
					   }
		   
					   function validationtesttroisb() {
						   document.getElementById('ordertrois').style.backgroundColor = "rgb(92, 94, 104)"
					   }
					   //function test
					   function validationtestquatrea() {
						   document.getElementById('orderquatre').style.display = "none"
					   }
		   
					   function validationtestquatreb() {
						   document.getElementById('orderquatre').style.backgroundColor = "rgb(92, 94, 104)"
					   }
					   //function test
					   function validationtestcinqa() {
						   document.getElementById('ordercinq').style.display = "none"
					   }
		   
					   function validationtestcinqb() {
						   document.getElementById('ordercinq').style.backgroundColor = "rgb(92, 94, 104)"
					   }
					   //function test
					   function validationtestsixa() {
						   document.getElementById('ordersix').style.display = "none"
					   }
		   
					   function validationtestsixb() {
						   document.getElementById('ordersix').style.backgroundColor = "rgb(92, 94, 104)"
					   }
					   //function test
					   function validationtestsepta() {
						   document.getElementById('ordersept').style.display = "none"
					   }
		   
					   function validationtestseptb() {
						   document.getElementById('ordersept').style.backgroundColor = "rgb(92, 94, 104)"
					   }
					   //function test
					   function validationtesthuita() {
						   document.getElementById('orderhuit').style.display = "none"
					   }
		   
					   function validationtesthuitb() {
						   document.getElementById('orderhuit').style.backgroundColor = "rgb(92, 94, 104)"
					   }